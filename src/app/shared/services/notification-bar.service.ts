import { Injectable, NgZone } from '@angular/core'
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar'
import { NotificationBarComponent } from '../components/notification-bar/notification-bar.component'
import { defaultSnackBarConfig, errorSnackBarConfig, successSnackBarConfig } from '../models/snackbar.model'

@Injectable({
  providedIn: 'root',
})
export class NotificationBarService {

  constructor(public snackBar: MatSnackBar, private zone: NgZone) {
  }

  public showInfo(message: string, duration: number = 2000): MatSnackBarRef<SimpleSnackBar> {
    let ref

    if (message) {
      this.zone.run(() => ref = this.snackBar.openFromComponent(NotificationBarComponent, {
        ...defaultSnackBarConfig, ...{duration},
        data: {text: message},
      }))
    }

    return ref
  }

  public showSuccess(message: string, duration: number = 2000): MatSnackBarRef<SimpleSnackBar> {
    let ref

    if (message) {
      this.zone.run(() => ref = this.snackBar.openFromComponent(NotificationBarComponent, {
        ...successSnackBarConfig, ...{duration},
        data: {text: message},
      }))
    }

    return ref
  }

  public showError(message: string, duration: number = 10000): MatSnackBarRef<SimpleSnackBar> {
    let ref

    if (message) {
      this.zone.run(() => ref = this.snackBar.openFromComponent(NotificationBarComponent, {
        ...errorSnackBarConfig, ...{duration},
        data: {text: message},
      }))
    }

    return ref
  }

  public dismiss(snackBarRef: MatSnackBarRef<SimpleSnackBar>): void {
    return snackBarRef.dismiss()
  }
}
