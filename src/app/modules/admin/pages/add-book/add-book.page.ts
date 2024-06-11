import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book-admin',
  templateUrl: 'add-book.page.html',
  styleUrls: ['add-book.page.scss'],
})
export class AddBookPage implements OnInit {
  nuevoLibro = new FormGroup ({
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    tags: new FormControl('', [Validators.required])
  });

  image: any;
  pdf: any;

  isLoading = false;

  id: number = 0;

  constructor(
    public http: HttpClient,
    public toast: ToastrService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
        this.getBook();
      }
    });
  }

  getBook() {
    this.isLoading = true;
    this.http
      .get(`https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/books?id=${this.id}`)
      .subscribe({
        next: (response: any) => {
          const tags = response.tags.map((tag: any) => tag.label);
          this.nuevoLibro.patchValue(
            {
              titulo: response.data[0].titulo,
              descripcion: response.data[0].descripcion,
              fecha: new Date(response.data[0].fecha_publicacion).toISOString().split('T')[0],
              autor: response.data[0].autor,
              tags: tags.join(', '),
            });
          this.image = response.data[0].imagen_portada;
          this.pdf = response.data[0].archivo_pdf;
          this.isLoading = false;
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
        },
      });
  }

  async onFileSelected(event: any, type: string) {
    const file: File = event.target.files[0];

    if (type === 'image') {
      this.image = file;
    } else {
      this.pdf = file;
    }
  }

  agregarLibro() {
    if(this.id) {
      this.editBook();
      return
    }
    if (
      this.pdf === undefined ||
      this.image === undefined
    ) {
      this.toast.error('Error!', 'Debes llenar todos los campos');
      return;
    }
    this.isLoading = true;
    // Aquí puedes implementar la lógica para agregar el nuevo libro
    console.log('Nuevo Libro:', this.nuevoLibro);

    let titulo = this.nuevoLibro.value.titulo ? this.nuevoLibro.value.titulo : '';
    let descripcion = this.nuevoLibro.value.descripcion ? this.nuevoLibro.value.descripcion : '';
    let fecha = this.nuevoLibro.value.fecha ? this.nuevoLibro.value.fecha : '';
    let autor = this.nuevoLibro.value.autor ? this.nuevoLibro.value.autor : '';
    let tags = this.nuevoLibro.value.tags ? this.nuevoLibro.value.tags : '';

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('fecha_publicacion', fecha);
    formData.append('autor', autor);
    formData.append('tags', tags);
    formData.append('imagen_portada', this.image);
    formData.append('archivo_pdf', this.pdf);
    // Lógica para enviar el libro al servicio o hacer otra acción
    // Reiniciar el objeto nuevoLibro después de agregarlo, si es necesario
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    this.http
      .post('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/add-book', formData, {
        headers: headers,
      })
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          this.toast.success('Listo!', 'Guardado con Exito');
          this.router.navigate(['/admin/library']);
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

  editBook(){
    if(this.nuevoLibro.invalid){
      this.toast.error('Error!', 'Debes llenar todos los campos');
      return;
    }

    this.isLoading = true;
    const body = {
      titulo: this.nuevoLibro.value.titulo,
      descripcion: this.nuevoLibro.value.descripcion,
      fecha_publicacion: this.nuevoLibro.value.fecha,
      autor: this.nuevoLibro.value.autor,
      tags: this.nuevoLibro.value.tags
    }

    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    this.http
      .put(`https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/books?id=${this.id}`, body, {
        headers: headers,
      })
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          this.toast.success('Listo!', 'Guardado con Exito');
          this.router.navigate(['admin/home/library']);
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


