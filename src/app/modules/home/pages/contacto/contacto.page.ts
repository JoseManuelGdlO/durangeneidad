import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: 'contacto.page.html',
  styleUrls: ['contacto.page.scss'],
})
export class ContactoPage {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  error = false

  loading = false;

  constructor(
    public apiService: ApiService,
    public http: HttpClient
  ) {}

  enviarFormulario() {
    this.error = false;
    if(!this.nombre || !this.correo || !this.mensaje) {
      this.error = true;
      return;
    }
    this.loading = true;
    const formData = {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    };

    this.http.post<any>('http://3.218.160.237:8000/durangeneidad/email', formData)
      .subscribe(
        response => {
          console.log('Correo enviado con éxito', response);
          this.loading = false;
          // Aquí podrías mostrar un mensaje de éxito al usuario
        },
        error => {
          console.error('Error al enviar el correo', error);
          this.loading = false;
          // Aquí podrías mostrar un mensaje de error al usuario
        },
      );
  }

}
