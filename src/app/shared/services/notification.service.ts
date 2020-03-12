import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
  }
)
export class NotificationService {

  private defaultDuration = 99999;

  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone
  ) {
  }

  public openSuccess(message, action = 'close', duration = this.defaultDuration) {
    this.zone.run(() =>
      this.snackBar.open(message, action, {
        duration,
        panelClass: ['snackbar--success']
      })
    );
  }

  public openDanger(message, action = 'close', duration = this.defaultDuration) {
    this.zone.run(() =>
      this.snackBar.open(message, action, {
        duration,
        panelClass: ['snackbar--danger']
      })
    );
  }

  public dismiss() {
    this.zone.run(() =>
      this.snackBar.dismiss()
    );
  }

}
