import { Injectable } from '@angular/core'
import { ApiServiceModel } from '../../../shared/models/api-service.model'
import { User } from '../models/user.model'
import { Observable } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { CollectionParams } from '../../../shared/models/collection-params.model'

const USERS_API_ENDPOINT = '/users'

@Injectable({
  providedIn: 'root',
})
export class UsersApiService implements ApiServiceModel<User> {

  constructor(private http: HttpClient) {
  }

  public readItems(collectionParams: CollectionParams): Observable<object> {
    const params = collectionParams.getCollectionHttpParams()
    return this.http.get(`${environment.baseUrl}${USERS_API_ENDPOINT}`, { params })
  }
}
