import { Component, OnInit } from '@angular/core'
import { LocalStorageService } from '../../../shared/services/local-storage.service'
import { LocalStorageKey } from '../../../shared/models/local-storage-key.model'
import { NotificationService } from '../../../shared/services/notification.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public exampleValue: string

  constructor(private localStorageService: LocalStorageService, private notificationService: NotificationService, private http: HttpClient) {
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

  runClientSiteErr404() {
    console.log('asd')
    this.http.get('http://localhost:4200/error').subscribe()
  }

  runServerSiteErr401() {
    this.http.get('http://getstatuscode.com/401').subscribe()
  }

  runServerSiteErr500() {
    this.http.get('http://getstatuscode.com/500').subscribe()
  }
}
