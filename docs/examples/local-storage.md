## Local Storage {docsify-ignore}

##### Usage

**`app-local-storage-example.component.html`**
```html
exampleValue: {{ exampleValue }}
<button mat-raised-button (click)="setExampleValue()" color="primary">Set exampleValue</button>
<button mat-raised-button (click)="delExampleValue()" color="primary">Del exampleValue</button>
```

**`app-notification-example.component.ts`**
```typescript
import { Component, OnInit } from '@angular/core'
import { LocalStorageService } from '../../../shared/services/local-storage.service'
import { LocalStorageKey } from '../../../shared/models/local-storage-key.model'

@Component({
  selector: 'app-local-storage-example',
  templateUrl: './local-storage-example.component.html',
  styleUrls: ['./local-storage-example.component.scss']
})
export class LocalStorageExampleComponent implements OnInit {

  public exampleValue: string

  constructor(
    private localStorageService: LocalStorageService,
  ) {
  }

  ngOnInit(): void {
    this.getExampleValue()
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
```
