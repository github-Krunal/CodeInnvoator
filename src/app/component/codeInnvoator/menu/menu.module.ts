import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { MenuContentComponent } from '../menu-content/menu-content.component';
import { DashboardComponent } from '../../content/dashboard/dashboard.component';

const appMenu: Routes =
  [
    {
      path: '', component: MenuComponent,
      children: [
        { path: 'Dashboard', component: DashboardComponent, outlet: 'side' }
      ]
    }
  ]
@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    MenuContentComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(appMenu),
    CommonModule,
    AngularMaterialModule
  ]
})
export class MenuModule { }
