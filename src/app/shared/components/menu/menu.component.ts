import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../modules/home/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() selected = '';

  @Input() menuItems: any[] = [
    { name: 'INICIO', link: '/home', selected: true },
    { name: 'GALERIA', link: '/about', selected: false },
    { name: 'BIOGRAFIA', link: '/home/biografia', selected: false },
    { name: 'SOCIEDAD', link: '/contact', selected: false },
    { name: 'CONTACTO', link: '/contact', selected: false },
  ];

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getTags()
    if(this.selected) {
      this.menuItems.forEach((i) => (i.selected = i.name.toLowerCase() === this.selected));
    }
  }

  async getTags() {
    try {
      const response = await this.apiService.getTags();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


  clickItem(item: any) {
    this.menuItems.forEach((i) => (i.selected = false));
    this.router.navigate([item.link]);
    item.selected = true;
  }
}
