import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { BiografiaPage } from './pages/Biografia/biografia.page';
import { DetailPage } from './pages/detail/detail.page';
import { ContactoPage } from './pages/contacto/contacto.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { LibraryPage } from './pages/library/library.page';
import { BookDetailPage } from './pages/library/book-detail/book-detail.page';

const routes: Routes = [
    {
        path: '',
        component: DashboardPage,
        children: [
            {
                path: '',
                component: HomePage
            },
            {
              path: 'biografia',
              component: BiografiaPage
            },
            {
              path: 'noticia/:id/:title/:rdn',
              component: DetailPage
            },
            {
              path: 'contact',
              component: ContactoPage
            },
            {
              path: 'library',
              component: LibraryPage
            },
            {
              path: 'book/:id',
              component: BookDetailPage
            },
            {
              path: ':tag/:type',
              component: HomePage
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }