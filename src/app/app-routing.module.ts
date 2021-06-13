import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/account/login/login.component';
import { DashboardComponent } from './component/content/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./component/content/dashboard/dashboard.module').then((dash) => dash.DashboardModule),
    data: { breadcrumb: 'Dashboard' },
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
