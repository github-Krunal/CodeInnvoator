import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'project-information', pathMatch: 'full' },
  {
    path: 'login', loadChildren: () => import('./component/account/login/login.module').then((login) => login.LoginModule)
  },
  {
    path: 'sign-up', loadChildren: () => import('./component/account/sign-up/sign-up.module').then((signup) => signup.SignUpModule)
  },
  {
    path: 'project-information', loadChildren: () => import('./component/codeInnvoator/project-information/project-information.module').then((project) => project.ProjectInformationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
