import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Quill from 'quill';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements AfterViewInit {
  @ViewChild('quillEditor') quillEditor!: ElementRef;
  private quillInstance!: Quill;
  creador: string = '';
  creacion: string = ''; // Esta propiedad se llenará con la fecha actual en addPost()
  titulo: string = '';
  lugar: string = '';
  tags: { label: string }[] = [];

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.quillInstance = new Quill(this.quillEditor.nativeElement, {
      theme: 'snow' // o 'bubble'
    });
  }

  addPost(): void {
    // Establece 'creacion' a la fecha actual en formato ISO antes de enviar
    this.creacion = new Date().toISOString();

    const articleBody = this.quillInstance.root.innerHTML; // Obtiene el contenido del editor Quill
    const body = {
      article: {
        creador: this.creador,
        creacion: this.creacion,
        titulo: this.titulo,
        body: articleBody,
        lugar: "durango"
      },
      tags: this.tags
    };

    console.log(body)
    this.http.post('http://3.218.160.237:8000/durangeneidad/add', body).subscribe({
      next: (response) => {
        console.log(response);
        // Manejo de la respuesta exitosa
      },
      error: (error) => {
        console.error(error);
        // Manejo de errores
      }
    });
  }
}
