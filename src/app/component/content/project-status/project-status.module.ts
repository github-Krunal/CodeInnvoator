import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStatusComponent } from './project-status.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { PsDetailsComponent } from './ps-details/ps-details.component';
import { PsActivityComponent } from './ps-activity/ps-activity.component';
import { PsOverallStatusComponent } from './ps-overall-status/ps-overall-status.component';

const projectStatus: Routes = [{
  path: '',
  component: ProjectStatusComponent
}]

@NgModule({
  declarations: [
    ProjectStatusComponent,
    PsDetailsComponent,
    PsActivityComponent,
    PsOverallStatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(projectStatus),
    AngularMaterialModule
  ]
})
export class ProjectStatusModule { }
