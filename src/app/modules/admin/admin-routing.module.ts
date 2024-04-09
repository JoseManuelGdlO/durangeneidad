import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { HomePage } from './pages/home/home.page';
import { PostPage } from './pages/post/post.page';

const routes: Routes = [
    {
        path: '',
        component: LoginPage
    },
    {
        path: 'home',
        component: HomePage
    },
    {
      path: 'post',
      component: PostPage
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
