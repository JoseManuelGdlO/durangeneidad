import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: 'book-detail.page.html',
  styleUrls: ['book-detail.page.scss'],
})
export class BookDetailPage implements OnInit, OnDestroy {
  isWeb: boolean = true;
  isMobile: boolean = false;

  isLoading: boolean = true;

  book: any;
  id: number = 0
  tags = ''

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  constructor(public apiService: ApiService, public route: ActivatedRoute, public router: Router) {
    this.checkScreenSize();
  }
  ngOnDestroy(): void {
    this.apiService.displayStyle.next('fixed');
  }
  
  ngOnInit(): void {
    console.log('BookDetailPage', this.router.url);
    
    this.apiService.displayStyle.next('absolute');
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.getBooks();
    });
  }

  getBooks() {
    this.apiService
      .getBook(this.id.toString())
      .then((response: any) => {
        this.book = response.data[0];
        this.tags = response.tags.map((x: any) => x.label).join(', ');
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  checkScreenSize() {
    this.isWeb = window.innerWidth >= 992; // Cambia aquí según tu definición de "web"
    this.isMobile = window.innerWidth < 576;
  }
}
