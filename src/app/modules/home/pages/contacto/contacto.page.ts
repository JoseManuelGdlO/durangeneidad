import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-contacto',
  templateUrl: 'contacto.page.html',
  styleUrls: ['contacto.page.scss'],
})
export class ContactoPage {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  constructor(
    public apiService: ApiService,
  ) {}

  enviarFormulario() {
    // Aquí podrías agregar la lógica para enviar el formulario, como hacer una solicitud HTTP a tu backend
    console.log('Nombre:', this.nombre);
    console.log('Correo:', this.correo);
    console.log('Mensaje:', this.mensaje);
  }

}
