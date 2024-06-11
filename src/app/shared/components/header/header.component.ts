import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../modules/home/services/api.service';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit{

  @Input() selected = '';

  position = 'fixed';

  constructor(public router: Router, public apiService: ApiService, public platform: Platform) {}

  ngOnInit(): void {
    // this.apiService.displayStyle.subscribe((response: any) => {
    //   this.position = response;
    // });
  }

  selectTag($event: string) {
    this.router.navigate(['/inicio/'+$event]);
  }
}
