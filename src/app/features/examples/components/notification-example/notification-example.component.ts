/*
  This will be deleted after execute ./cleanup.sh script.
*/

import { Component } from '@angular/core'
import { NotificationBarService } from '../../../../shared/services/notification-bar.service'

@Component({
  selector: 'app-notification-example',
  templateUrl: './notification-example.component.html',
  styleUrls: ['./notification-example.component.scss'],
})
export class NotificationExampleComponent {

  constructor(
    private notificationService: NotificationBarService,
  ) {
  }

  showSuccessNotification() {
    this.notificationService.showSuccess('Example success notification.')
  }

  showErrorNotification() {
    this.notificationService.showError('Example error notification.')
  }

  showInfoNotification() {
    this.notificationService.showInfo('Example info notification.')
  }
}
