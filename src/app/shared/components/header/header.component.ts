import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {

  @Input() selected = '';

  constructor(public router: Router) {}

  selectTag($event: string) {
    this.router.navigate(['/inicio/'+$event]);
  }
}
