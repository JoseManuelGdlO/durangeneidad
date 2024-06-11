import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-biography-admin',
  templateUrl: 'biography.page.html',
  styleUrls: ['biography.page.scss'],
})
export class BiographyPage implements OnInit {
  biografia: string = '';
  imagenSeleccionada: any;
  imgPreview!: any

  isLoading = false;

  constructor(
    public http: HttpClient,
    public toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.getBiography();
  }

  getBiography() {
    this.isLoading = true;
    this.http
      .get('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/biografia')
      .subscribe({
        next: (response: any) => {
          this.biografia = response.data[0].biografia;
          this.imgPreview = response.data[0].imagen;
          this.isLoading = false;
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
        },
      });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imgPreview = reader.result;
    };
    reader.readAsDataURL(file);
    this.imagenSeleccionada = file;
  }

  guardarBiografia() {
    this.isLoading = true;
    // Aquí puedes guardar la biografía y la imagen
    
    const formData = new FormData();
    formData.append('biografia', this.biografia);
    formData.append('imagen_perfil', this.imagenSeleccionada);
    // Lógica para enviar el libro al servicio o hacer otra acción
    // Reiniciar el objeto nuevoLibro después de agregarlo, si es necesario
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    this.http
      .put('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/biografia', formData, {
        headers: headers,
      })
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          this.toast.success('Listo!', 'Guardado con Exito');
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
