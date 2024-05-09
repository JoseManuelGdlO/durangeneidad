import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../modules/home/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
})
export class CardComponent {

  @Input() item:any;

  @Input() set loading( value: boolean) {
    this.isLoading = value;
  }

  isLoading = false;

  constructor( private router: Router) {}

  seeMore(item: any) {
    this.router.navigate(['inicio/noticia', item.id, item.titulo.split(' ').join('-')]);
  }


}
