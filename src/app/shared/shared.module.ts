import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MenuComponent } from "./components/menu/menu.component";
import { SearchComponent } from "./components/search/search.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
    declarations: [
        MenuComponent,
        SearchComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
    ],
    exports: [
        MenuComponent,
        SearchComponent,
        HeaderComponent
    ]
  })
  export class SharedModule { } 