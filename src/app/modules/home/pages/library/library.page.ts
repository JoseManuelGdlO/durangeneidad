import { Component, HostListener } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-library',
    templateUrl: 'library.page.html',
    styleUrls: ['library.page.scss'],
  })
  export class LibraryPage {

    isWeb: boolean = true;
    isMobile: boolean = false;

    isLoading: boolean = true;

    items: any
  
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.checkScreenSize();
    }
  
    constructor(public apiService: ApiService, public router: Router) {
      this.checkScreenSize();
      this.getBooks()
    }

    getBooks() {
      this.apiService.getBook().then((response: any) => {
        this.items = response.data;
      }).finally(() => {
        this.isLoading = false;
      })
    }

    sendDetail(id: number) {
      this.router.navigate([`inicio/book/${id}`]);
    }
  
    checkScreenSize() {
      this.isWeb = window.innerWidth >= 992; // Cambia aquí según tu definición de "web"
      this.isMobile = window.innerWidth < 576;
    }
  }