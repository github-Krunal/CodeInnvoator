import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStatusComponent } from './project-status.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { PsDetailsComponent } from './ps-details/ps-details.component';
import { PsActivityComponent } from './ps-activity/ps-activity.component';

const projectStatus: Routes = [{
  path: '',
  component: ProjectStatusComponent
}]

@NgModule({
  declarations: [
    ProjectStatusComponent,
    PsDetailsComponent,
    PsActivityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(projectStatus),
    AngularMaterialModule
  ]
})
export class ProjectStatusModule { }
