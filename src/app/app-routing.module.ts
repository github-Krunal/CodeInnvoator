import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login', loadChildren: () => import('./component/account/login/login.module').then((login) => login.LoginModule),
    data: { breadcrumb: 'login' },
  },
  {
    path: 'sign-up', loadChildren: () => import('./component/account/sign-up/sign-up.module').then((signup) => signup.SignUpModule),
    data: { breadcrumb: 'sign up' },
  },
  {
    path: 'project-information', loadChildren: () => import('./component/codeInnvoator/project-information/project-information.module').then((project) => project.ProjectInformationModule),
    data: { breadcrumb: 'project information' },
  }, {
    path: 'home',
    loadChildren: () => import('./component/codeInnvoator/home-page/home-page.module').then((home) => home.HomePageModule),
    data: { breadcrumb: 'Home' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
