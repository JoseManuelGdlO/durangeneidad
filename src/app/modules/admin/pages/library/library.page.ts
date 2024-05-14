import { Component } from "@angular/core";

@Component({
    selector: 'app-library-admin',
    templateUrl: 'library.page.html',
    styleUrls: ['library.page.scss'],
  })
  export class LibraryPage {

    librosFiltrados: any[] = []; // Aquí cargarías tus libros desde tu servicio o donde los tengas
    filtro: string = '';
  

    constructor() {}
    
    aplicarFiltro() {
      // Implementa la lógica para filtrar los libros según el filtro ingresado
    }
  }