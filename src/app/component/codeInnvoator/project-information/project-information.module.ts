import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInformationComponent } from './project-information.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

const projectInformation: Routes = [{
  path: '',
  component:ProjectInformationComponent
}]

@NgModule({
  declarations: [
    ProjectInformationComponent
  ],
  imports: [
    RouterModule.forChild(projectInformation),
    CommonModule,
    AngularMaterialModule
  ]
})
export class ProjectInformationModule { }
