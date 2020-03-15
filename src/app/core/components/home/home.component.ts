import { Component, OnInit } from '@angular/core'
import { LocalStorageService } from '../../../shared/services/local-storage.service'
import { LocalStorageKey } from '../../../shared/models/local-storage-key.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.localStorageService.set(LocalStorageKey.EXAMPLE_KEY, 'EXAMPLE_VALUE')
  }
}
