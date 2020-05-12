import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'


@Component({
  selector: 'app-page-header-back',
  templateUrl: './page-header-back.component.html',
  styleUrls: ['./page-header-back.component.scss'],
})
export class PageHeaderBackComponent {

  @Input() link: string
  @Input() ariaLabel: string

  constructor(private router: Router) {
  }

  onBackClick() {
    this.router.navigate([this.link])
  }
}
