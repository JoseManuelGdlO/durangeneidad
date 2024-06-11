import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-biografia',
  templateUrl: 'biografia.page.html',
  styleUrls: ['biografia.page.scss'],
})
export class BiografiaPage implements OnInit {

  biography: any

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.getBio();
  }

  async getBio() {
    try {
      this.biography = (await this.apiService.getBio()).data[0];
    } catch (error) {
      console.error(error);
    }
  }
}
