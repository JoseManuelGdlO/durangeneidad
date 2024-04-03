import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'app-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements AfterViewInit {
  @ViewChild('quillEditor') quillEditor!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    new Quill(this.quillEditor.nativeElement, {
      theme: 'snow' // o 'bubble'
    });
  }
}
