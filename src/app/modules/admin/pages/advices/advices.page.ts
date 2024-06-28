import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import Quill from 'quill';

@Component({
  selector: 'app-advices-admin',
  templateUrl: 'advices.page.html',
  styleUrls: ['advices.page.css'],
})
export class AdvicesPage implements OnInit {

  @ViewChild('quillEditor') quillEditor!: ElementRef;
  public quillInstance!: Quill;
  editor!: Editor;
  body = '';
  toolbar: Toolbar = [
    // default value
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    // or, set options for link:
    //[{ link: { showOpenInNewTab: false } }, 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['horizontal_rule', 'format_clear', 'indent', 'outdent'],
    ['superscript', 'subscript'],
    ['undo', 'redo'],
  ];

  filtro: string = '';
  advices: any[] = [];
  advicesFiltered: any[] = [];
  advice = { descripcion: '', autor: '', date: '', id: 0};
  isLoading = true;
  articleForm = new FormGroup({
    descripcion: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  });

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.editor = new Editor();
    this.getAdvices();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  ngAfterViewInit(): void {
    // this.quillInstance = new Quill(this.quillEditor.nativeElement, {
    //   modules: {
    //     toolbar: [
    //       ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    //             ['blockquote', 'code-block'],

    //             [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    //             [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    //             [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    //             [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    //             [{ 'direction': 'rtl' }],                         // text direction

    //             [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    //             [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    //             [ 'link', 'image', 'video', 'formula' ],          // add's image support
    //             [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    //             [{ 'font': [] }],
    //             [{ 'align': [] }],

    //             ['clean']          
    //     ],
    //   },
    //   theme: 'snow' // o 'bubble'
    // });
  }

  getAdvices() {
    this.isLoading = true;
    this.http.get('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/avisos').subscribe((data: any) => {
      this.advices = data.data;
      this.aplicarFiltro();
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });

  }

  aplicarFiltro() {
    this.advicesFiltered = this.advices.filter(
      (libro) =>
        libro.descripcion.toLowerCase().includes(this.filtro.toLowerCase()) ||
        libro.autor.toLowerCase().includes(this.filtro.toLowerCase()) 
    );
  }

  putItems(adv: any){
    this.advice = adv;
    this.articleForm.patchValue({
      descripcion: adv.descripcion,
      autor: adv.autor,
      date: adv.fecha,
    });
  }

  updateConfiguration() {
    this.advice.descripcion = this.articleForm.value.descripcion ? this.articleForm.value.descripcion : ''; 
    this.advice.autor = this.articleForm.value.autor ? this.articleForm.value.autor : '';
    this.advice.date = this.articleForm.value.date ? this.articleForm.value.date : '';

    if(this.advice.descripcion === '' || this.advice.autor === '' || this.advice.date === '') {
      return;
    }
    this.isLoading = true;
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    this.http
      .post(`https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/avisos`, this.advice, { headers: headers } )
      .subscribe((data: any) => {
        this.advice = { descripcion: '', autor: '', date: '', id: 0};
        this.articleForm.reset();
        this.getAdvices();
      });
  }
}
