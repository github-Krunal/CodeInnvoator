import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

const task: Routes = [{
  path: '',
  component: KanbanBoardComponent
}]

@NgModule({
  declarations: [
    KanbanBoardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(task),
    AngularMaterialModule
  ]
})
export class TaskModule { }
