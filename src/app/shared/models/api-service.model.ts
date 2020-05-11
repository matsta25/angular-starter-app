import { Observable } from 'rxjs'

export interface ApiServiceModel {
  createItem?: (item) => Observable<object>,
  readItem?: (id) => Observable<object>,
  readItems?: () => Observable<object>,
  updateItem?: (id, changes) => Observable<object>,
  deleteItem?: (id) => Observable<object>,
}
