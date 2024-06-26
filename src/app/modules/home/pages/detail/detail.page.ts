import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage implements OnInit {
  article: any;

  isLoading = false;
  tags = '';

  constructor(
    private route: ActivatedRoute,
    public apiService: ApiService,
    private metaService: MetaService,
    public router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.metaService.setURL(this.router.url);
    this.route.params.subscribe((params: any) => {
      this.getData(params.id);
      this.metaService.setTitle(params.title);
    });
  }

  getData(id: number) {
    this.apiService
      .getDetail(id)
      .then((response: any) => {
        this.article = response.data[0];
        this.tags = response.tags.map((x: any) => x.label).join(', ');
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
