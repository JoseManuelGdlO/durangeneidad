import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { AdminRoutingModule } from "./admin-routing.module";
import { LoginPage } from "./pages/login/login.page";
import { HomePage } from "./pages/home/home.page";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      AdminRoutingModule,
      SharedModule,
      HttpClientModule
    ],
    declarations: [
      LoginPage,
      HomePage
    ]
  })
  export class AdminPageModule {}