import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Quill from 'quill';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  tags: string = '';

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.quillInstance = new Quill(this.quillEditor.nativeElement, {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],

                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                [{ 'direction': 'rtl' }],                         // text direction

                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [ 'link', 'image', 'video', 'formula' ],          // add's image support
                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'font': [] }],
                [{ 'align': [] }],

                ['clean']          
        ],
      },
      theme: 'snow' // o 'bubble'
    });
  }

  addPost(): void {
    // Establece 'creacion' a la fecha actual en formato ISO antes de enviar
    this.creacion = new Date().toISOString();

    const completeTags = this.tags.split(',').map((tag) => ({ label: tag.trim() })); // Convierte la cadena de tags en un arreglo de objetos

    const articleBody = this.quillInstance.root.innerHTML; // Obtiene el contenido del editor Quill
    const body = {
      article: {
        creador: this.creador,
        creacion: this.creacion,
        titulo: this.titulo,
        body: articleBody,
        lugar:this.lugar
      },
      tags: completeTags
    };

    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${token}`);

    console.log(body)
    this.http.post('http://3.218.160.237:8000/durangeneidad/add', body, { headers: headers}).subscribe({
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
