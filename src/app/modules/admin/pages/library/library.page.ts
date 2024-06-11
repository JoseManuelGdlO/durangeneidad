import { Component, ElementRef, ViewChild } from "@angular/core";
import { ApiService } from "../../../home/services/api.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-library-admin',
    templateUrl: 'library.page.html',
    styleUrls: ['library.page.scss'],
  })
  export class LibraryPage {

    libros: any[] = [];
    librosFiltrados: any[] = [];
    filtro: string = '';

    isLoading = false;

    
  @ViewChild('exampleModal') exampleModal!: ElementRef;
  id: number = 0;
  
    constructor(private apiService: ApiService, public http: HttpClient, public toast: ToastrService) {}
  
    ngOnInit() {
      this.obtenerLibros();
    }
  
    async obtenerLibros() {
      try {
        this.isLoading = true;
        const libros: any = await this.apiService.getBook();
        this.libros = libros.data.reverse();
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
      this.librosFiltrados = this.libros.filter(libro =>
        libro.titulo.toLowerCase().includes(this.filtro.toLowerCase()) ||
        libro.creador.toLowerCase().includes(this.filtro.toLowerCase()) ||
        libro.descripcion.toLowerCase().includes(this.filtro.toLowerCase())
      );
    }

    removeBook() {
      this.isLoading = true;
      const token = localStorage.getItem('authToken');
  
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', `Bearer ${token}`);
  
      this.http
        .delete(`https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/books?id=${this.id}`, {
          headers: headers,
        })
        .subscribe({
          next: (response) => {
            this.toast.success('Listo!', 'Libro Eliminado con Exito');
            this.obtenerLibros();
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