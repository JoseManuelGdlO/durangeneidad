import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
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
    ]
  })
  export class SharedModule { } 