import { Component } from "@angular/core";

@Component({
    selector: 'app-home-admin',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })
  export class HomePage {
    menuItems: { label: string, link: string }[] = [
      { label: 'Articulos', link: 'articles' },
      { label: 'Biografía', link: 'biography' },
      { label: 'Libreria', link: 'library' },
      { label: 'Avisos', link: 'advices' },
      { label: 'Categorias', link: 'categories' },
      { label: 'Configuraciones', link: 'settings' }
    ];
  }