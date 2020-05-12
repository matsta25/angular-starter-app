import { Component, Inject } from '@angular/core'
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar'


@Component({
  selector: 'app-notification',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss'],
})
export class NotificationBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { text: string }, public snackBar: MatSnackBar) {
  }
}
