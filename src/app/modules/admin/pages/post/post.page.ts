import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import Quill from 'quill';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../home/services/api.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements AfterViewInit, OnInit {
  @ViewChild('quillEditor') quillEditor!: ElementRef;
  private quillInstance!: Quill;
  creacion: string = '';

  articleForm = new FormGroup({
    creador: new FormControl('', [Validators.required]),
    creacion: new FormControl(''),
    titulo: new FormControl('', [Validators.required]),
    lugar: new FormControl('', [Validators.required]),
    tags: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    imagen: new FormControl<string>(''),
    descripcion: new FormControl(''),
  });

  category: any = [];

  id: string = '';

  isLoading = false;

  constructor(private http: HttpClient, private toastr: ToastrService, public route: ActivatedRoute, public apiService: ApiService) {}

  ngOnInit(): void {
    this.getCategories();
    this.route.params.subscribe((params: any) => {
      if(params.id){
        this.id = params.id;
        this.getDetails();
      }
    });
  }

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

    if(this.id){
      this.editArticle();
      return;
    }

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
        descripcion: this.articleForm.value.descripcion,
        fkid_category: this.articleForm.value.categoria,
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

  getCategories() {
    this.apiService.getMenu().then((response: any) => {
      this.category = response.data;
    }).catch((error: any) => {
      console.log(error);
    });
  }

  async getDetails() {
    this.isLoading = true;
    this.apiService
    .getDetail(Number(this.id))
    .then((response: any) => {
      this.articleForm.patchValue({
        creador: response.data[0].creador,
        titulo: response.data[0].titulo,
        lugar: response.data[0].lugar,
        tags: response.tags.map((tag: any) => tag.label).join(', '),
        imagen: response.data[0].thumb,
        descripcion: response.data[0].descripcion,
        categoria: response.data[0].fkid_category
      });

      this.quillInstance.root.innerHTML = response.data[0].body;
    }).catch((error: any) => {
      console.log(error);
    }).finally(() => {
      this.isLoading = false;
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

  editArticle() {
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
        descripcion: this.articleForm.value.descripcion,
        fkid_category: this.articleForm.value.categoria
      },
      tags: completeTags
    };

    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${token}`);

    this.http.put(`https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/article?id=${this.id}`, body, { headers: headers}).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.toastr.success('Listo!', 'Guardado con Exito');
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
}
