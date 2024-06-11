import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.scss'],
})
export class NewsComponent {
  @Input() date!: string;
  @Input() message!: string;
  @Input() autor!: string;
  
  constructor() {}


}
