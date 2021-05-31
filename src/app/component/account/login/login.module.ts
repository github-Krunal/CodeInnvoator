import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

const login: Routes = [{
  path: '',
  component:LoginComponent
},{
  path: '/:id',
  component:LoginComponent
}]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(login),
    AngularMaterialModule
  ]
})
export class LoginModule { }
