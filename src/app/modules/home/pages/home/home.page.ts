import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })
  export class HomePage implements OnInit {

    articles: any = [{}, {}, {}, {}]
    isLoading = false;

    constructor(private apiService: ApiService, public route: ActivatedRoute) {}

    async ngOnInit() {
      this.isLoading = true;

      this.route.params.subscribe((params: any) => {
        this.isLoading = true;
        if(params.tag) {
          this.getArts(params.tag);
        } else {
          this.getArts();
        }
      });
      this.getArts();
    }


    async getArts(tag?: string) {
      try {
        const response:any = await this.apiService.getArticles(tag);
        this.articles = response.data.reverse();
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    }
  }