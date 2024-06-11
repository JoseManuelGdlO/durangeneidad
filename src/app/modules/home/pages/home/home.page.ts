import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ActivatedRoute } from "@angular/router";
import { ConfigService } from "../../../../shared/utils/configuraciones.utils";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })
  export class HomePage implements OnInit {

    articles: any = [{}, {}, {}, {}]
    title = ''
    subTitle = ''
    contactMessage =  ''
    backgroundImg = 'assets/images/home.jpg'
    isLoading = false;
    tags = [{label: 'Durango', count: 2}, {label: 'Mexico', count: 1}, {label: 'Covid', count: 3}, {label: 'Vacuna', count: 1}];

    news: any = [];

    constructor(private apiService: ApiService, public route: ActivatedRoute, public configService: ConfigService) {}

    async ngOnInit() {
      this.initLetters();
      
      this.isLoading = true;

      this.getNews();

      this.route.params.subscribe((params: any) => {
        this.isLoading = true;
        if(params.type) {
          this.getArts(params.type, params.tag);
        } else {
          this.getArts('ALL');
        }
      });
    }

    async initLetters() {
      this.title = await this.configService.findConfiguration('TITULO_INICIO')
      this.subTitle = await this.configService.findConfiguration('SUBTITULO_INICIO')
      this.contactMessage = await this.configService.findConfiguration('MENSAJE_CONTACTO_HOME')
      this.backgroundImg = `url('https://extra.durangueneidad.com/${await this.configService.findConfiguration('IMAGEN_PORTADA')}')`
      console.log(this.backgroundImg);
      
    }

    async getNews() {
      this.apiService.getNews().then((response: any) => {
        this.news = response.data.reverse();
      });
    }


    async getArts(type: string, tag?: string) {
      try {
        const response:any = await this.apiService.getArticles(type, tag);
        this.articles = response.data.reverse();
        this.tags = response.tags;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    }
  }