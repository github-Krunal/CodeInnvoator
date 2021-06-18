import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStatusComponent } from './project-status.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

const projectStatus: Routes = [{
  path: '',
  component: ProjectStatusComponent
}]

@NgModule({
  declarations: [
    ProjectStatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(projectStatus),
    AngularMaterialModule
  ]
})
export class ProjectStatusModule { }
