import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/account/login/login.component';
import { DashboardComponent } from './component/content/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'task', pathMatch: 'full' },
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
  },
  {
    path: 'task',
    loadChildren: () => import('./component/content/task/task.module').then((task) => task.TaskModule),
    data: { breadcrumb: 'task' },
  },
  {
    path: 'project-status',
    loadChildren: () => import('./component/content/project-status/project-status.module').then((status) => status.ProjectStatusModule),
    data: { breadcrumb: 'Project Status' },
  },

  {
    path: 'member-details',
    loadChildren: () => import('./component/content/member-details/member-details.module').then((member) => member.MemberDetailsModule),
    data: { breadcrumb: 'Member Details' },
  },




  // (top,  #f21a3e 12 %,#565551 49 %);












  {
    path: '**',
    loadChildren: () => import('./component/codeInnvoator/page-not-found/page-not-found.module').then((notFound) => notFound.PageNotFoundModule),
    data: { breadcrumb: 'Page Not Found' },
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
