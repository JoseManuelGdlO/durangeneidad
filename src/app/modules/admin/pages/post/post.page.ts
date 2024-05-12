import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Quill from 'quill';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements AfterViewInit {
  @ViewChild('quillEditor') quillEditor!: ElementRef;
  private quillInstance!: Quill;
  creacion: string = '';

  articleForm = new FormGroup({
    creador: new FormControl('', [Validators.required]),
    creacion: new FormControl(''),
    titulo: new FormControl('', [Validators.required]),
    lugar: new FormControl('', [Validators.required]),
    tags: new FormControl('', [Validators.required]),
    imagen: new FormControl<string>(''),
    descripcion: new FormControl(''),
  });

  isLoading = false;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

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

    this.isLoading = true;
    
    // Establece 'creacion' a la fecha actual en formato ISO antes de enviar
    this.creacion = new Date().toISOString();

    const completeTags = this.articleForm.value.tags?.split(',').map((tag) => ({ label: tag.trim() })); // Convierte la cadena de tags en un arreglo de objetos

    const articleBody = this.quillInstance.root.innerHTML; // Obtiene el contenido del editor Quill
    const body = {
      article: {
        creador: this.articleForm.value.creador,
        creacion: this.creacion,
        titulo: this.articleForm.value.titulo,
        body: articleBody,
        lugar: this.articleForm.value.lugar,
        thumb: this.articleForm.value.imagen,
        descripcion: this.articleForm.value.descripcion
      },
      tags: completeTags
    };

    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${token}`);

    this.http.post('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/add', body, { headers: headers}).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.toastr.success('Listo!', 'Guardado con Exito');
        this.articleForm.reset();
        // Manejo de la respuesta exitosa
      },
      error: (error) => {
        this.toastr.error('Error!', 'ah ocurrido un error');
        console.error(error);
        this.isLoading = false;
        // Manejo de errores
      }
    });
  }

  async uploadImage(event: any) {
    const file = event.target.files[0];
    const base64: string = await this.convertBase64(file);
    this.articleForm.patchValue({
      imagen: base64
    });
  };

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
}
