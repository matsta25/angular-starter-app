## Notifications {docsify-ignore}

##### Description

Project notifications has been created with [Angular Material Snackbar](https://material.angular.io/components/snack-bar/overview).

##### Usage

**`app-notification-example.component.html`**
```html
<button mat-raised-button (click)="showSuccessNotification()" color="primary">Success</button>
<button mat-raised-button (click)="showErrorNotification()" color="primary">Error</button>
<button mat-raised-button (click)="showInfoNotification()" color="primary">Info</button>
```

**`app-notification-example.component.ts`**
```typescript
import { Component } from '@angular/core'
import { NotificationService } from '../../../shared/services/notification.service'

@Component({
  selector: 'app-notification-example',
  templateUrl: './notification-example.component.html',
  styleUrls: ['./notification-example.component.scss']
})
export class NotificationExampleComponent {

  constructor(
    private notificationService: NotificationService
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
```
