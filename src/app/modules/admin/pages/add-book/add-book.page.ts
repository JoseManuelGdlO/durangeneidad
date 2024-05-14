import { Component } from "@angular/core";

@Component({
    selector: 'app-add-book-admin',
    templateUrl: 'add-book.page.html',
    styleUrls: ['add-book.page.scss'],
  })
  export class AddBookPage {
    nuevoLibro: any = {
      titulo: '',
      descripcion: '',
      fecha: '',
      autor: '',
      tags: '',
      pdf: null,
      image: null
    };
  
    async onFileSelected(event: any, type: string) {
      const file: File = event.target.files[0];
      const base64: string = await this.convertBase64(file);
      if(type === 'image') {
        this.nuevoLibro.image = base64;
      } else {
        this.nuevoLibro.pdf = base64;
      }
    }

    convertBase64(file: any): Promise<string> {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
    
        fileReader.onload = () => {
          resolve(fileReader.result as string);
        };
    
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };
  
    agregarLibro() {
      // Aquí puedes implementar la lógica para agregar el nuevo libro
      console.log('Nuevo Libro:', this.nuevoLibro);
      // Lógica para enviar el libro al servicio o hacer otra acción
      // Reiniciar el objeto nuevoLibro después de agregarlo, si es necesario
      this.nuevoLibro = {
        titulo: '',
        descripcion: '',
        fecha: '',
        autor: '',
        tags: '',
        pdf: null, 
        image: null
      };
    }
  }