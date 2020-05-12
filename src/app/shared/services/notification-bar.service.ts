import { Injectable, NgZone } from '@angular/core'
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'
import { NotificationBarComponent } from '../components/notification-bar/notification-bar.component'
import { defaultSnackBarConfig, errorSnackBarConfig, successSnackBarConfig } from '../models/snackbar.model'


@Injectable({
  providedIn: 'root',
})
export class NotificationBarService {

  constructor(public snackBar: MatSnackBar, private zone: NgZone) {
  }

  public showInfo(message: string, duration?: number): MatSnackBarRef<SimpleSnackBar> {
    return this.show(defaultSnackBarConfig, message, duration)
  }

  public showSuccess(message: string, duration?: number): MatSnackBarRef<SimpleSnackBar> {
    return this.show(successSnackBarConfig, message, duration)
  }

  public showError(message: string, duration?: number): MatSnackBarRef<SimpleSnackBar> {
    return this.show(errorSnackBarConfig, message, duration)
  }

  private show(defaultConfig: MatSnackBarConfig, message: string, duration?: number) {
    const snackBarConfig: MatSnackBarConfig = duration ? {...defaultConfig, duration} : defaultConfig
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
