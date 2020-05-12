import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss'],
})
export class NotificationPageComponent implements OnInit {

  public data: NotificationPageData
  public textCssClass: 'text-success' | 'text-danger' | 'text-primary'

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: NotificationPageData) => {
      this.data = data

      switch (data.type) {
        case 'error': this.textCssClass = 'text-danger'; break
        case 'success': this.textCssClass = 'text-success'; break
        case 'info': this.textCssClass = 'text-primary'; break
      }

      if (!data.icon) {
        switch (data.type) {
          case 'error': data.icon = 'clear'; break
          case 'success': data.icon = 'done'; break
          case 'info': data.icon = 'info'; break
        }
      }
    })
  }
}

export interface NotificationPageData {
  type: 'error' | 'success' | 'info',
  title: string,
  heading: string,
  description?: string,
  icon?: string,
}
