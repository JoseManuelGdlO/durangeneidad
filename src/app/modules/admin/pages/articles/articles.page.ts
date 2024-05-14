import { Component } from "@angular/core";
import { ApiService } from "../../../home/services/api.service";
import { DataService } from "../../services/data.service";

@Component({
    selector: 'app-article-admin',
    templateUrl: 'articles.page.html',
    styleUrls: ['articles.page.scss'],
  })
  export class ArticlesPage {
    articulos: any[] = [];
    articulosFiltrados: any[] = [];
    filtro: string = '';

    isLoading = false;
  
    constructor(private apiService: ApiService) {}
  
    ngOnInit() {
      this.obtenerArticulos();
    }
  
    async obtenerArticulos() {
      try {
        this.isLoading = true;
        const articulos:any = await this.apiService.getArticles();
        this.articulos = articulos.data.reverse();
        this.aplicarFiltro();
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }

    }
  
    aplicarFiltro() {
      this.articulosFiltrados = this.articulos.filter(articulo =>
        articulo.titulo.toLowerCase().includes(this.filtro.toLowerCase()) ||
        articulo.creador.toLowerCase().includes(this.filtro.toLowerCase()) ||
        articulo.descripcion.toLowerCase().includes(this.filtro.toLowerCase())
      );
    }
  }