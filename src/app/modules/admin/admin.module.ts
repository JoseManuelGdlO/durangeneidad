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
import { NgxEditorModule } from "ngx-editor";


@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      AdminRoutingModule,
      SharedModule,
      NgxEditorModule.forRoot({
        locals: {
          // menu
          bold: 'Bold',
          italic: 'Italic',
          code: 'Code',
          underline: 'Underline',
          strike: 'Strike',
          blockquote: 'Blockquote',
          bullet_list: 'Bullet List',
          ordered_list: 'Ordered List',
          heading: 'Heading',
          h1: 'Header 1',
          h2: 'Header 2',
          h3: 'Header 3',
          h4: 'Header 4',
          h5: 'Header 5',
          h6: 'Header 6',
          align_left: 'Left Align',
          align_center: 'Center Align',
          align_right: 'Right Align',
          align_justify: 'Justify',
          text_color: 'Text Color',
          background_color: 'Background Color',
          horizontal_rule: 'Horizontal rule',
          format_clear: 'Clear Formatting',
          insertLink: 'Insert Link',
          removeLink: 'Remove Link',
          insertImage: 'Insert Image',
          indent: 'Increase Indent',
          outdent: 'Decrease Indent',
          superscript: 'Superscript',
          subscript: 'Subscript',
          undo: 'Undo',
          redo: 'Redo',
      
          // pupups, forms, others...
          url: 'URL',
          text: 'Text',
          openInNewTab: 'Open in new tab',
          insert: 'Insert',
          altText: 'Alt Text',
          title: 'Title',
          remove: 'Remove',
          enterValidUrl: 'Please enter a valid URL',
        },
      }),
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
