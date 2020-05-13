import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { User } from '../../models/user.model'
import { UsersState } from '../../store/users.state'
import { select, Store } from '@ngrx/store'
import { readUsers } from '../../store/users.actions'
import { CollectionParams } from '../../../../shared/models/collection-params.model'
import { selectUsers } from '../../store/users.selectors'
import { selectLoading } from '../../../../shared/store/shared.selectors'
import { merge, Observable, Subject, Subscription } from 'rxjs'
import { MatSort, Sort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator'
import { ActivatedRoute, Router } from '@angular/router'
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  public loading$: Observable<boolean>
  public users$: Observable<User[]>

  public dataSourceForTable: MatTableDataSource<User>
  public displayedColumns: string[] = []
  public currentSort: Sort
  private collectionParams: CollectionParams
  public isOnRefreshOrEmptyResponse = false

  constructor(
      private store: Store<UsersState>,
      private activatedRoute: ActivatedRoute,
      private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(selectUsers))
    this.loading$ = this.store.pipe(select(selectLoading))

    this.loading$.subscribe( loading => {
      if (loading && !this.isOnRefreshOrEmptyResponse) {
        this.dataSourceForTable = new MatTableDataSource([])
      }
    })

    this.users$.subscribe(users => {
      this.dataSourceForTable = new MatTableDataSource(users)
      this.isOnRefreshOrEmptyResponse = false
    })

    this.setDisplayedColumns()
    this.setCurrentSort()
    this.getCollectionParamsFromUrl()
    this.loadUsers()
  }

  ngAfterViewInit(): void {
    this.setCollectionParamsToComponents()
  }

  private loadUsers() {
    this.store.dispatch(readUsers({collectionParams: this.collectionParams}))
  }

  private setDisplayedColumns() {
    this.displayedColumns = ['id', 'firstName', 'lastName', 'email']
  }

  private setCurrentSort(): void {
    this.currentSort = { active: 'id', direction: 'asc' }
  }

  public onRefresh(): void {
    this.isOnRefreshOrEmptyResponse = true
    this.loadUsers()
  }

  private getCollectionParamsFromUrl() {
    this.activatedRoute.params.subscribe(params  => {
      this.collectionParams = new CollectionParams(
          params.filters,
          params.sortDirection,
          params.sortField,
          params.pageIndex,
          params.pageSize,
      )
    })
  }

  private setCollectionParamsToComponents() {
  }

  private setCollectionParamsToUrl() {
    this.router.navigate([], {
      queryParams: this.collectionParams,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    })
  }
}
