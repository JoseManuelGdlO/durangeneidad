import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-admin',
  templateUrl: 'categories.page.html',
  styleUrls: ['categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  filtro: string = '';
  categories: any[] = [];
  categoriesFiltered: any[] = [];
  categorie = { nombre: '', descripcion: '', id: 0 };
  isLoading = true;

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.http.get('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/categories').subscribe((data: any) => {
      this.categories = data.data;
      this.aplicarFiltro();
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  aplicarFiltro() {
    this.categoriesFiltered = this.categories.filter(
      (libro) =>
        libro.nombre.toLowerCase().includes(this.filtro.toLowerCase()) ||
        libro.descripcion.toLowerCase().includes(this.filtro.toLowerCase()) 
    );
  }

  updateCategorie() {
    if(this.categorie.nombre === '' || this.categorie.descripcion === '') {
      return;
    }

    if(this.categorie.id === 0) {
      this.addCategorie();
      return;
    }
    this.isLoading = true;
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    this.http
      .put(`https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/categories`, this.categorie, { headers: headers } )
      .subscribe((data: any) => {
        this.categorie = { nombre: '', descripcion: '', id: 0 };
        this.getCategories();
      });
  }

  addCategorie() {
    this.isLoading = true;
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    this.http
      .post(`https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/categories`, this.categorie, { headers: headers } )
      .subscribe((data: any) => {
        this.categorie = { nombre: '', descripcion: '', id: 0 };
        this.getCategories();
      });
  }

}
