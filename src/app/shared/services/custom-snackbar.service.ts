import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Notificer } from '../component/notification/notification';
import { NotificationComponent } from '../component/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbar {
  constructor(private snackbar: MatSnackBar) {

  }
  public snackBar(message: string, type: Notificer) {
    let snackBarType: string = this.checkSnackBarType(type);
    this.snackbar.openFromComponent(NotificationComponent, {
      duration: 1500,
      data: {
        message: message,
        snackBarType: type
      },
      panelClass: [snackBarType]
    })
  }
  private checkSnackBarType(type: Notificer): string {
    switch (type) {
      case Notificer.Alert:
        return 'snackbar-alert'
        break;

      case Notificer.Success:
        return 'snackbar-success'
        break;

      case Notificer.Info:
        return 'snackbar-info'
        break;

      case Notificer.Warning:
        return 'snackbar-warning'
        break;

      default:
        return ''
        break;
    }

  }

}
