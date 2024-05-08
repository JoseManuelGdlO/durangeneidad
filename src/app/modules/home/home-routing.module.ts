import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { BiografiaPage } from './pages/Biografia/biografia.page';
import { DetailPage } from './pages/detail/detail.page';
import { ContactoPage } from './pages/contacto/contacto.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
      path: 'biografia',
      component: BiografiaPage
    },
    {
      path: 'detail/:id',
      component: DetailPage
    },
    {
      path: 'contact',
      component: ContactoPage
    },
    {
      path: ':tag',
      component: HomePage
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }