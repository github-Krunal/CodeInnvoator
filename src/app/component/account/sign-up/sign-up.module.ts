import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

const signup: Routes = [{
  path: '',
  component:SignUpComponent
}]

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    RouterModule.forChild(signup),
    CommonModule,
    AngularMaterialModule
  ]
})
export class SignUpModule { }
