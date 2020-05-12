import { Observable } from 'rxjs'
import { CollectionParams } from './collection-params.model'

export interface ApiServiceModel<T> {
  createItem?(item: T): Observable<object>,
  readItem?(id): Observable<object>,
  readItems?(collectionParams?: CollectionParams): Observable<object>,
  updateItem?(id, changes: Partial<T>): Observable<object>,
  deleteItem?(id): Observable<object>,
}
