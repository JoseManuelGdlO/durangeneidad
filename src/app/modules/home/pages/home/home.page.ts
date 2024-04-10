import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })
  export class HomePage implements OnInit {

    articles: any = []

    constructor(private apiService: ApiService) {}

    async ngOnInit() {
      this.getArts();
    }


    async getArts() {
      try {
        const response:any = await this.apiService.getArticles();
        console.log(response);
        this.articles = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }