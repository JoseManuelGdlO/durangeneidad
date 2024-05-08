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

@NgModule({
    declarations: [
        MenuComponent,
        SearchComponent,
        HeaderComponent,
        CardComponent,
        LoadingComponent
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
        LoadingComponent
    ]
  })
  export class SharedModule { } 