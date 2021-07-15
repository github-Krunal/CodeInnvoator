import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDetailsComponent } from './member-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomSnackbar } from 'src/app/shared/services/custom-snackbar.service';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ApicallService } from 'src/app/shared/services/apicall.service';
import { TabularMemberDetailsComponent } from './tabular-member-details/tabular-member-details.component';

const memberDetails: Routes = [{
  path: '',
  component: MemberDetailsComponent
}]

@NgModule({
  declarations: [
    MemberDetailsComponent,
    TabularMemberDetailsComponent
  ],
  imports: [
    RouterModule.forChild(memberDetails),
    CommonModule,
    AngularMaterialModule
  ],
  providers: [CustomSnackbar, ApicallService]
})
export class MemberDetailsModule { }
