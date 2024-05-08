import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { AdminRoutingModule } from "./admin-routing.module";
import { LoginPage } from "./pages/login/login.page";
import { HomePage } from "./pages/home/home.page";
import { PostPage } from "./pages/post/post.page";


@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      AdminRoutingModule,
      SharedModule,
      HttpClientModule
    ],
    declarations: [
      LoginPage,
      HomePage,
      PostPage
    ]
  })
  export class AdminPageModule {}
