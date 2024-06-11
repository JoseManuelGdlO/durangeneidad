import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../../home/services/api.service';
import { DataService } from '../../services/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-article-admin',
  templateUrl: 'articles.page.html',
  styleUrls: ['articles.page.scss'],
})
export class ArticlesPage {
  articulos: any[] = [];
  articulosFiltrados: any[] = [];
  filtro: string = '';

  @ViewChild('exampleModal') exampleModal!: ElementRef;

  isLoading = false;

  id: number = 0;

  constructor(
    private apiService: ApiService,
    public http: HttpClient,
    public toast: ToastrService
  ) {}

  ngOnInit() {
    this.obtenerArticulos();
  }

  async obtenerArticulos() {
    try {
      this.isLoading = true;
      const articulos: any = await this.apiService.getArticles('ALL');
      this.articulos = articulos.data.reverse();
      this.aplicarFiltro();
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  openModal() {
    const modal = this.exampleModal.nativeElement;
    modal.classList.add('show');
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  closeModal() {
    const modal = this.exampleModal.nativeElement;
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  aplicarFiltro() {
    this.articulosFiltrados = this.articulos.filter(
      (articulo) =>
        articulo.titulo.toLowerCase().includes(this.filtro.toLowerCase()) ||
        articulo.creador.toLowerCase().includes(this.filtro.toLowerCase()) ||
        articulo.descripcion.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  removeArticle() {
    this.isLoading = true;
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    this.http
      .delete(`https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/article?id=${this.id}`, {
        headers: headers,
      })
      .subscribe({
        next: (response) => {
          this.toast.success('Listo!', 'Articulo Eliminado con Exito');
          this.obtenerArticulos();
          // Manejo de la respuesta exitosa
        },
        error: (error) => {
          this.toast.error('Error!', 'ah ocurrido un error');
          console.error(error);
          this.isLoading = false;
          // Manejo de errores
        },
      });
  }
}
