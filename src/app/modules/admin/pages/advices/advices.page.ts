import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'app-advices-admin',
  templateUrl: 'advices.page.html',
  styleUrls: ['advices.page.css'],
})
export class AdvicesPage implements OnInit {

  @ViewChild('quillEditor') quillEditor!: ElementRef;
  public quillInstance!: Quill;

  filtro: string = '';
  advices: any[] = [];
  advicesFiltered: any[] = [];
  advice = { descripcion: '', autor: '', date: '', id: 0};
  isLoading = true;

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.getAdvices();
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

  updateConfiguration() {
    this.advice.descripcion = this.quillInstance.root.innerHTML;
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
        this.quillInstance.setText('');
        this.getAdvices();
      });
  }
}
