# Examples

Below you can find usage examples for features

## Mock Api

##### Description

To mock api [json-server](https://github.com/typicode/json-server) has been used.
Also [faker](https://github.com/Marak/faker.js) is used to seed fake data. 
To get more faker methods checkout [api-methods](https://github.com/Marak/faker.js#api-methods)

To run mock:
 
```bash
npm run mock
```

Then mock will be server on http://localhost:3000/posts.

##### Add endpoint

Added new `/books` endpoint example:

**`mock/index.js`**
```javascript
const faker = require('faker');

module.exports = () => {
  const data = {
    posts: [],
    books: []
  };

  for (let i = 0; i < 10; i++) {
    data.posts.push({
      userId: faker.random.uuid(),
      id: faker.random.uuid(),
      title: faker.name.title(),
      body: faker.lorem.paragraph()
    })
  }

  for (let i = 0; i < 10; i++) {
    data.books.push({
      id: i,
      title: faker.name.title()
    })
  }

  return data
};
``` 

Then new endpoint is available on http://localhost:3000/books.

## Notifications

##### Description

Project notifications are create with [Angular Material Snackbar](https://material.angular.io/components/snack-bar/overview).

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

## Local Storage

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
 
