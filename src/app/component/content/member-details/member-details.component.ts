import { Component, OnInit } from '@angular/core';
import { Notificer } from 'src/app/shared/component/notification/notification';
import { CustomSnackbar } from 'src/app/shared/services/custom-snackbar.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  public Notificer = Notificer;

  constructor(private customSnackbar: CustomSnackbar) { }

  ngOnInit(): void {
  }
  public getSnackbar(notify: Notificer) {
    this.customSnackbar.snackBar('Notification !', notify);
  }

}
