import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-error-handler-example',
  templateUrl: './error-handler-example.component.html',
  styleUrls: ['./error-handler-example.component.scss']
})
export class ErrorHandlerExampleComponent {

  constructor(
    private http: HttpClient
  ) {
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
