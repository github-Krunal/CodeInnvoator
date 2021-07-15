import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Notificer } from 'src/app/shared/component/notification/notification';
import { ApiCall } from 'src/app/shared/modal/sample-modal';
import { ApicallService } from 'src/app/shared/services/apicall.service';
import { CustomSnackbar } from 'src/app/shared/services/custom-snackbar.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  campaignOne: FormGroup;
  campaignTwo: FormGroup;
  public sampleData: ApiCall[] = [];

  constructor(private ApicallService: ApicallService) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19))
    });
  }

  ngOnInit(): void {
    this.getApiCall();
  }
  getApiCall() {
    this.ApicallService.freeApiMethod().subscribe((api: any) => {
      this.sampleData = api;
    })
  }
}
