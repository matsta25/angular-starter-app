import { Component, OnInit } from '@angular/core'
import { LocalStorageService } from '../../../shared/services/local-storage.service'
import { LocalStorageKey } from '../../../shared/models/local-storage-key.model'
import { NotificationService } from '../../../shared/services/notification.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public exampleValue: string

  constructor(private localStorageService: LocalStorageService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.getExampleValue()
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

  setExampleValue() {
    this.localStorageService.set(LocalStorageKey.EXAMPLE_KEY, 'EXAMPLE_VALUE')
    this.getExampleValue()
  }

  getExampleValue() {
    this.exampleValue = this.localStorageService.get(LocalStorageKey.EXAMPLE_KEY)
  }

  delExampleValue() {
    this.localStorageService.del(LocalStorageKey.EXAMPLE_KEY)
    this.getExampleValue()
  }
}
