import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { User } from '../../models/user.model'
import { UsersState } from '../../store/users.state'
import { select, Store } from '@ngrx/store'
import { readUsers } from '../../store/users.actions'
import { CollectionParams } from '../../../../shared/models/collection-params.model'
import { selectTotalCount, selectUsers } from '../../store/users.selectors'
import { selectLoading } from '../../../../shared/store/shared.selectors'
import { Observable } from 'rxjs'
import { MatSort, Sort } from '@angular/material/sort'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator

  public loading$: Observable<boolean>
  public users$: Observable<User[]>
  public totalCount$: Observable<number>

  public dataSourceForTable: MatTableDataSource<User>
  public displayedColumns: string[] = []

  private defaultSort: Sort = {active: 'id', direction: 'asc'}

  private defaultPageIndex = 0
  private defaultPageSize = 10

  public collectionParams: CollectionParams = {
    filter: '',
    ...{
      sortDirection: this.defaultSort.direction,
      sortField: this.defaultSort.active,
    },
    ...{pageIndex: this.defaultPageIndex},
    ...{pageSize: this.defaultPageSize},
  }

  constructor(
    private store: Store<UsersState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(selectUsers))
    this.loading$ = this.store.pipe(select(selectLoading))
    this.totalCount$ = this.store.pipe(select(selectTotalCount))

    this.users$.subscribe(users => {
      this.dataSourceForTable = new MatTableDataSource(users)
    })

    this.updateCollectionParams(this.activatedRoute.snapshot.queryParams)
    this.updateQueryParamToUrl(this.collectionParams).then(() =>
      this.activatedRoute.queryParams.subscribe((paramsFromUrl: CollectionParams) => {
        this.updateCollectionParams(paramsFromUrl)
        this.loadUsers()
      }),
    )

    this.setDisplayedColumns()
  }

  public onRefresh(): void {
    this.loadUsers()
  }

  public onMatSortChange($event: Sort): void {
    this.updateCollectionParams({
      sortDirection: $event.direction,
      sortField: $event.active,
    })
    this.updateQueryParamToUrl(this.collectionParams)
  }

  public onClear(): void {
    this.onFilterChange('')
  }

  private loadUsers(): void {
    this.store.dispatch(readUsers({
      collectionParams: {...this.collectionParams},
    }))
  }

  private setDisplayedColumns(): void {
    this.displayedColumns = ['id', 'firstName', 'lastName', 'email', 'actions']
  }

  public updateCollectionParams(newCollectionParams: CollectionParams) {
    Object.assign(this.collectionParams, newCollectionParams)
  }

  private updateQueryParamToUrl(params: Params): Promise<boolean> {
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: params,
      queryParamsHandling: 'merge',
    })
  }

  public onPageChange($event: PageEvent): void {
    this.updateCollectionParams({
      pageIndex: $event.pageIndex,
      pageSize: $event.pageSize,
    })
    this.updateQueryParamToUrl(this.collectionParams)
  }

  public onFilterChange($event: string): void {
    this.updateCollectionParams({filter: $event})
    this.updateQueryParamToUrl({filter: $event === '' ? null : $event})
  }

  public onEdit(user: User): void {
    console.log('Clicked: ', user)
  }
}
