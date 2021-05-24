import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    AngularMaterialModule,
  ],
  providers:[Location]
})
export class BreadcumModule { }