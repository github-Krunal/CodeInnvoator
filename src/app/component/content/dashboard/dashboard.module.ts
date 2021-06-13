import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

const dashboard: Routes = [{
	path: '',
	component: DashboardComponent
}]
@NgModule({
	declarations: [
		DashboardComponent
	],
	imports: [
		RouterModule.forChild(dashboard),
		CommonModule,
		AngularMaterialModule
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
		NO_ERRORS_SCHEMA
	]
})
export class DashboardModule { }
