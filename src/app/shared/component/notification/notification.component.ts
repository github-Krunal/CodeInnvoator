import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Notificer } from './notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NotificationComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, private snackBarRef: MatSnackBarRef<NotificationComponent>) { }

  ngOnInit(): void {
    this.isCheckNotificationType();
  }
  public closedNotification() {
    this.snackBarRef.dismiss();
  }

  private isCheckNotificationType() {
    let notificationType = document.querySelector('#notification-type')?.children[0];
    switch (this.data.snackBarType) {
      case Notificer.Alert:
        notificationType?.classList.add('fa-exclamation-triangle', 'alert-snackbar-icon');
        break;
      case Notificer.Success:
        notificationType?.classList.add('fa-check', 'success-snackbar-icon');
        break;
      case Notificer.Info:
        notificationType?.classList.add('fa-info-circle', 'info-snackbar-icon');
        break;
      case Notificer.Warning:
        notificationType?.classList.add('fa-exclamation', 'warning-snackbar-icon');
        break;
      default: ''
        break;
    }
  }
}
