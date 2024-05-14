import { Component } from "@angular/core";

@Component({
    selector: 'app-biography-admin',
    templateUrl: 'biography.page.html',
    styleUrls: ['biography.page.scss'],
  })
  export class BiographyPage {
    biografia: string = '';
    imagenSeleccionada: string | ArrayBuffer | null = null;
  
    onFileSelected(event: any) {
      const file: File = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenSeleccionada = reader.result;
      };
      reader.readAsDataURL(file);
    }
  
    guardarBiografia() {
      // Aquí puedes guardar la biografía y la imagen
      console.log('Biografía:', this.biografia);
      console.log('Imagen:', this.imagenSeleccionada);
    }
  }