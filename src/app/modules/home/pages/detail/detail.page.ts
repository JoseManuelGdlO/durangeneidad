import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage implements OnInit {
  article: any;

  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    public apiService: ApiService,
    private metaService: MetaService,
    public router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe((params: any) => {
      this.getData(params.id);
    });
  }

  getData(id: number) {
    this.apiService
      .getDetail(id)
      .then((response: any) => {
        this.article = response.data[0];
        this.metaService.updateMetaTags({
          title: this.article.titulo,
          type: 'website',
          imageSrc: this.article.thumb,
          url: this.router.url,
          description: this.article.descripcion,
          cardType: 'summary_large_image',
        });
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
