import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {
    if(this.selected) {
      this.menuItems.forEach((i) => (i.selected = i.name.toLowerCase() === this.selected));
    }
  }

  clickItem(item: any) {
    this.menuItems.forEach((i) => (i.selected = false));
    this.router.navigate([item.link]);
    item.selected = true;
  }
}
