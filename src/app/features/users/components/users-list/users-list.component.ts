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

  public loading: boolean
  public users$: Observable<User[]>

  public displayedColumns: string[] = []
  public dataSourceForTable: MatTableDataSource<User>

  public defaultSort: Sort

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  public isOnRefreshOrEmptyResponse = false
  private collectionParams: CollectionParams


  public filterSubject = new Subject<string>()

  private filter = ''
  private subscription: Subscription = new Subscription()


  constructor(
      private store: Store<UsersState>,
      private activatedRoute: ActivatedRoute,
      private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(selectUsers))
    this.store.pipe(select(selectLoading)).subscribe( loading => {
      if (loading && !this.isOnRefreshOrEmptyResponse) {
        this.dataSourceForTable = new MatTableDataSource([])
      }
      this.loading = loading
    })
    this.users$.subscribe(users => this.initializeData(users))
    this.setDisplayedColumns()
    this.setDefaultSort()
    this.getCollectionParamsFromUrl()
    this.loadUsers()
  }

  ngAfterViewInit(): void {
    this.setCollectionParamsToComponents()
    this.setCollectionParamsToUrl()
  }

  private loadUsers() {
    this.store.dispatch(readUsers({collectionParams: this.collectionParams}))
  }

  private initializeData(users: User[]): void {
    this.dataSourceForTable = new MatTableDataSource(users)
    this.isOnRefreshOrEmptyResponse = false
  }

  private setDisplayedColumns() {
    this.displayedColumns = ['id', 'firstName', 'lastName', 'email']
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
    console.log(this.collectionParams)
    const filter$ = this.filterSubject.pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap((value: string) => {
          this.paginator.pageIndex = 0
          this.filter = value
        }),
    )

    const sort$ = this.sort.sortChange.pipe(tap(() => this.paginator.pageIndex = 0))

    this.subscription.add(merge(filter$, sort$, this.paginator.page).pipe(
        tap(() => {
          this.isOnRefreshOrEmptyResponse = true
          this.loadUsers()
        }),
    ).subscribe())
  }

  private setDefaultSort(): void {
     this.defaultSort = { active: 'id', direction: 'asc' }
  }

  private setCollectionParamsToUrl() {
    this.router.navigate([], {
      queryParams: this.collectionParams,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    })
  }
}
