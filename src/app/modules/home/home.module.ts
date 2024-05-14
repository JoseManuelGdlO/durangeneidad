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

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HomeRoutingModule,
      SharedModule,
      HttpClientModule,
      NgxSkeletonLoaderModule
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
        ContactoPage
    ]
  })
  export class HomePageModule {}