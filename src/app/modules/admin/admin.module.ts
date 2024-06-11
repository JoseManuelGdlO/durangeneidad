import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { AdminRoutingModule } from "./admin-routing.module";
import { LoginPage } from "./pages/login/login.page";
import { HomePage } from "./pages/home/home.page";
import { PostPage } from "./pages/post/post.page";
import { ArticlesPage } from "./pages/articles/articles.page";
import { SettingsPage } from "./pages/settings/settings.page";
import { BiographyPage } from "./pages/biography/biography.page";
import { DataService } from "./services/data.service";
import { ApiService } from "../home/services/api.service";
import { LibraryPage } from "./pages/library/library.page";
import { AddBookPage } from "./pages/add-book/add-book.page";
import { AdvicesPage } from "./pages/advices/advices.page";
import { CategoriesPage } from "./pages/categories/categories.page";


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
      PostPage,
      ArticlesPage,
      SettingsPage,
      BiographyPage,
      LibraryPage,
      AddBookPage,
      CategoriesPage,
      AdvicesPage
    ],
    providers: [
      DataService,
      ApiService
    ]
  })
  export class AdminPageModule {}
