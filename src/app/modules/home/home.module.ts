import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./pages/home/home.page";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { BiografiaPage } from "./pages/Biografia/biografia.page";
import { ApiService } from "./services/api.service";
import { DetailPage } from "./pages/detail/detail.page";
import { MetaService } from "./services/meta.service";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { ContactoPage } from "./pages/contacto/contacto.page";
import { DataService } from "../admin/services/data.service";
import { DashboardPage } from "./pages/dashboard/dashboard.page";
import { LibraryPage } from "./pages/library/library.page";
import { BookDetailPage } from "./pages/library/book-detail/book-detail.page";
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HomeRoutingModule,
      SharedModule,
      HttpClientModule,
      NgxExtendedPdfViewerModule,
      NgxSkeletonLoaderModule,
      FontAwesomeModule,
      ShareIconsModule,
      ShareButtonsModule
    ],
    providers: [
        ApiService,
        MetaService,
        DataService
    ],
    declarations: [
        HomePage,
        BiografiaPage,
        DetailPage,
        ContactoPage,
        DashboardPage,
        LibraryPage,
        BookDetailPage
    ]
  })
  export class HomePageModule {
  }