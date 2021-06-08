import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { MenuContentComponent } from '../menu-content/menu-content.component';

const appMenu: Routes = [{
  path: '',
  component: MenuComponent
}]

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    MenuContentComponent
  ],
  imports: [
    RouterModule.forChild(appMenu),
    CommonModule,
    AngularMaterialModule
  ]
})
export class MenuModule { }
