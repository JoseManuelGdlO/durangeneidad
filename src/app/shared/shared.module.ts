import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MenuComponent } from "./components/menu/menu.component";
import { SearchComponent } from "./components/search/search.component";
import { HeaderComponent } from "./components/header/header.component";
import { CardComponent } from "./components/card/card.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { LottieComponent } from "ngx-lottie";
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PerfilComponent } from "./components/perfil/perfil.component";
import { NewsComponent } from "./components/news/news.component";

@NgModule({
    declarations: [
        MenuComponent,
        SearchComponent,
        HeaderComponent,
        CardComponent,
        LoadingComponent,
        PerfilComponent,
        NewsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        LottieComponent,
        NgxSkeletonLoaderModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
    ],
    exports: [
        MenuComponent,
        SearchComponent,
        HeaderComponent,
        CardComponent,
        LoadingComponent,
        PerfilComponent,
        NewsComponent
    ]
  })
  export class SharedModule { } 