import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./pages/home/home.page";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HomeRoutingModule,
      SharedModule,
      HttpClientModule
    ],
    declarations: [
        HomePage
    ]
  })
  export class HomePageModule {}