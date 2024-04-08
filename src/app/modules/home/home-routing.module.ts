import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { BiografiaPage } from './pages/Biografia/biografia.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
      path: 'biografia',
      component: BiografiaPage
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }