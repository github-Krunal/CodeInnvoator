import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

const homepage: Routes = [{
  path: '',
  component: HomePageComponent
}]

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    RouterModule.forChild(homepage),
    CommonModule,
    AngularMaterialModule
  ]
})
export class HomePageModule { }
