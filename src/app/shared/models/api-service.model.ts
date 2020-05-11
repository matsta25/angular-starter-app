import { Observable } from 'rxjs'

export interface ApiServiceModel<T> {
  createItem?: (item: T) => Observable<object>,
  readItem?: (id) => Observable<object>,
  readItems?: () => Observable<object>,
  updateItem?: (id, changes: Partial<T>) => Observable<object>,
  deleteItem?: (id) => Observable<object>,
}
