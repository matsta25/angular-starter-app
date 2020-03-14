import { Component, Inject } from '@angular/core'
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { text: string }, public snackBar: MatSnackBar) {
  }
}
