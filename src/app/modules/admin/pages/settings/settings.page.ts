import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-admin',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage implements OnInit {
  filtro: string = '';
  configurations: any[] = [];
  configurationsFiltered: any[] = [];
  configuration = { codigo: '', valor: '', id: 0, descripcion: '', tipo: 'texto' };
  isLoading = true;
  imagenSeleccionada!: File

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.getConfigurations();
  }

  getConfigurations() {
    this.http.get('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/configuraciones').subscribe((data: any) => {
      this.configurations = data.data;
      this.aplicarFiltro();
      this.isLoading = false;
    });
  }

  aplicarFiltro() {
    this.configurationsFiltered = this.configurations.filter(
      (descr) =>
        descr.codigo.toLowerCase().includes(this.filtro.toLowerCase()) ||
        descr.valor.toLowerCase().includes(this.filtro.toLowerCase())  ||
        descr.descripcion.toLowerCase().includes(this.filtro.toLowerCase()) ||
        descr.tipo.toLowerCase().includes(this.filtro.toLowerCase()) 
    );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.imagenSeleccionada = file;
  }

  updateConfiguration() {
    if(this.configuration.codigo === '' || this.configuration.valor === '' || this.configuration.descripcion === '') {
      return;
    }
    this.isLoading = true;
    if(this.configuration.tipo === 'imagen') {
      this.sendImage();
      return
    }
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);


    this.http
      .post(`https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/configuraciones`, this.configuration, { headers: headers } )
      .subscribe((data: any) => {
        this.getConfigurations();
      });
  }

  sendImage() {
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    const formData = new FormData();
    formData.append('imagen', this.imagenSeleccionada);
    formData.append('codigo', this.configuration.codigo);
    formData.append('valor', this.configuration.valor);
    formData.append('descripcion', this.configuration.descripcion);
    formData.append('tipo', this.configuration.tipo);
    formData.append('id', this.configuration.id.toString());

    this.http
      .post(`https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/configuracionesImagen`, formData, { headers: headers } )
      .subscribe((data: any) => {
        this.getConfigurations();
      });
  }
}
