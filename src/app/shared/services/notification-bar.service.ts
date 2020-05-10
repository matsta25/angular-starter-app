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

  public showInfo(message: string, duration?: number): MatSnackBarRef<SimpleSnackBar> {
    const snackBarConfig = duration ? {...defaultSnackBarConfig, duration} : defaultSnackBarConfig
    let ref

    if (message) {
      this.zone.run(() => ref = this.snackBar.openFromComponent(NotificationBarComponent, {
        ...snackBarConfig,
        data: {text: message},
      }))
    }

    return ref
  }

  public showSuccess(message: string, duration?: number): MatSnackBarRef<SimpleSnackBar> {
    const snackBarConfig = duration ? {...successSnackBarConfig, duration} : successSnackBarConfig
    let ref

    if (message) {
      this.zone.run(() => ref = this.snackBar.openFromComponent(NotificationBarComponent, {
        ...snackBarConfig,
        data: {text: message},
      }))
    }

    return ref
  }

  public showError(message: string, duration?: number): MatSnackBarRef<SimpleSnackBar> {
    const snackBarConfig = duration ? {...errorSnackBarConfig, duration} : errorSnackBarConfig
    let ref

    if (message) {
      this.zone.run(() => ref = this.snackBar.openFromComponent(NotificationBarComponent, {
        ...snackBarConfig,
        data: {text: message},
      }))
    }

    return ref
  }

  public dismiss(snackBarRef: MatSnackBarRef<SimpleSnackBar>): void {
    return snackBarRef.dismiss()
  }
}
