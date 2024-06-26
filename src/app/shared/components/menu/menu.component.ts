import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../modules/home/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class MenuComponent implements OnInit {

  isOpen: boolean = false;

  @Input('selected') set item(value: string) {
    this.selected = value;
    if(value) {
      this.menuItems.forEach((i) => (i.selected = i.name.toLowerCase() === this.selected));
    }
  }

  @Output() tagSelected = new EventEmitter<string>();
  
  selected = '';

  @Input() menuItems: any[] = [
    { name: 'INICIO', link: '/inicio', selected: true },
    { name: 'BIOGRAFIA', link: '/inicio/biografia', selected: false },
    { name: 'LIBROS', link: '/inicio/library', selected: false },
    { name: 'CONTACTO', link: '/inicio/contact', selected: false },
  ];

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMenu()
    // this.getTags()
    if(this.selected) {
      this.menuItems.forEach((i) => (i.selected = i.name.toLowerCase() === this.selected));
    }
    window.addEventListener('beforeunload', function() {
      console.log('close');
      
      sessionStorage.removeItem('MENU');
    });
  }

  async getMenu() {
    try {
      const response: any = await this.apiService.getMenu();
      this.menuItems = []; 
      this.menuItems.push({
        name: 'INICIO',
        catid: 0,
        link: '/inicio',
        isTag: false,
        selected: true,
      });
      let index = 0
      for(const item of response.data) {
        this.menuItems.push({
          name: item.nombre.toUpperCase(),
          catid: item.id,
          link: `/inicio/${item.id}/CATEGORY`,
          isTag: true,
          selected: false,
        });
        if(index === response.data.length - 1) {
          this.menuItems.push({
            name: 'LIBROS',
            link: '/inicio/library',
            isTag: false,
            selected: false,
          });
        }
        if(index === response.data.length - 1) {
          this.menuItems.push({
            name: 'BIOGRAFIA',
            link: '/inicio/biografia',
            isTag: false,
            selected: false,
          });
        }
        index++
      }
    } catch (error) {
      console.error(error);
    }
  }


  async getTags() {
    try {
      if (!sessionStorage.getItem('MENU')) {        
      const response: any = (await this.apiService.getTags()).data;
      const ids = response.map((item: any) => item.label);
      const filtered = response.filter((item: any, index: number) =>
      !ids.includes(item.label, index + 1));
 
      this.menuItems = [];
      const inMiddle = Math.floor(filtered.length / 2);
      let index = 1
      filtered.forEach((item: any) => {

        if(index === inMiddle) {
          this.menuItems.push({
            name: 'BIOGRAFIA',
            link: '/inicio/biografia',
            isTag: false,
            selected: false,
          });
        } else if (index === 1) {
          this.menuItems.push({
            name: 'INICIO',
            link: '/inicio',
            isTag: false,
            selected: false,
          });
        }

        this.menuItems.push({
          name: item.label.toUpperCase(),
          link: `/inicio/tag/${item.label}`,
          isTag: true,
          selected: false,
        });

        if(index === filtered.length) {
          this.menuItems.push({
            name: 'CONTACTO',
            link: '/inicio/contact',
            isTag: false,
            selected: false,
          });
        }
        index ++;
        
      });
      if(this.selected) {
        this.menuItems.forEach((i) => (i.selected = i.name.toLowerCase() === this.selected));
      } else {
        this.menuItems[0].selected = true;
      }
      sessionStorage.setItem('MENU', JSON.stringify(this.menuItems));
    } else {
      const storage = sessionStorage.getItem('MENU') ?? '[]';
      const menuData = JSON.parse(storage);
      this.menuItems = menuData;
    }
    } catch (error) {
      console.error(error);
    }
  }


  clickItem(item: any) {

    this.menuItems.forEach((i) => (i.selected = false));
    item.selected = true;
    sessionStorage.setItem('MENU', JSON.stringify(this.menuItems));
    this.router.navigate([item.link]);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}
