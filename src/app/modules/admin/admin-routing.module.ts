import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { HomePage } from './pages/home/home.page';
import { PostPage } from './pages/post/post.page';
import { ArticlesPage } from './pages/articles/articles.page';
import { SettingsPage } from './pages/settings/settings.page';
import { BiographyPage } from './pages/biography/biography.page';
import { LibraryPage } from './pages/library/library.page';
import { AddBookPage } from './pages/add-book/add-book.page';
import { AdvicesPage } from './pages/advices/advices.page';
import { CategoriesPage } from './pages/categories/categories.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'post/:id',
        component: PostPage,
      },
      {
        path: 'post',
        component: PostPage,
      },
      {
        path: 'categories',
        component: CategoriesPage,
      },
      {
        path: 'advices',
        component: AdvicesPage,
      },
      {
        path: 'articles',
        component: ArticlesPage,
      },
      {
        path: 'biography',
        component: BiographyPage,
      },
      {
        path: 'settings',
        component: SettingsPage,
      },
      {
        path: 'library',
        component: LibraryPage,
      },
      {
        path: 'add-book/:id',
        component: AddBookPage,
      },
      {
        path: 'add-book',
        component: AddBookPage,
      },
    ],
  },
  {
    path: 'post',
    component: PostPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
