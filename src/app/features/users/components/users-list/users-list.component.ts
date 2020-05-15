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
export class UsersListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator

  public loading$: Observable<boolean>
  public users$: Observable<User[]>
  public totalCount$: Observable<number>

  public dataSourceForTable: MatTableDataSource<User>
  public displayedColumns: string[] = []

  public currentSort: Sort
  private readonly defaultSort: Sort = {active: 'id', direction: 'desc'}

  private readonly defaultPageIndex: number = 0
  private readonly defaultPageSize: number = 10
  public currentPageIndex
  public currentPageSize

  public currentFilter = null

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

    this.activatedRoute.queryParams.subscribe((paramsFromUrl: CollectionParams) => {
      if (paramsFromUrl?.sortField && paramsFromUrl?.sortDirection) {
        this.currentSort = {
          active: paramsFromUrl.sortField,
          direction: paramsFromUrl.sortDirection,
        }
      } else {
        this.setCurrentSort(this.defaultSort)
      }

      if (paramsFromUrl?.pageIndex && paramsFromUrl?.pageSize) {
        this.currentPageIndex = paramsFromUrl.pageIndex
        this.currentPageSize= paramsFromUrl.pageSize
      } else {
        this.setCurrentPageIndexAndSize(this.defaultPageIndex, this.defaultPageSize)
      }

      if (paramsFromUrl?.filter) {
        this.currentFilter = paramsFromUrl.filter
      }

      this.loadUsers()
    })

    this.setDisplayedColumns()
    this.loadUsers()
  }

  ngAfterViewInit(): void {
  }

  public onRefresh(): void {
    this.loadUsers()
  }

  public onMatSortChange($event: Sort): void {
    this.setCurrentSort($event)
  }

  onClear() {
    this.onFilterChange('')
    this.loadUsers()
  }

  private loadUsers() {
    this.store.dispatch(readUsers({
      collectionParams: {
        filter: this.currentFilter,
        sortDirection: this.currentSort.direction,
        sortField: this.currentSort.active,
        pageIndex: this.currentPageIndex,
        pageSize: this.currentPageSize,
      },
    }))
  }

  private setDisplayedColumns() {
    this.displayedColumns = ['id', 'firstName', 'lastName', 'email']
  }

  private setCurrentSort(sort: Sort): void {
    this.currentSort = sort
    this.updateQueryParamToUrl({sortField: sort.active, sortDirection: sort.direction})
  }

  private updateQueryParamToUrl(params: Params) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: params,
      queryParamsHandling: 'merge',
    })
  }

  private setCurrentPageIndexAndSize(pageIndex: number, pageSize: number): void {
    this.currentPageIndex = pageIndex
    this.currentPageSize= pageSize
    this.updateQueryParamToUrl({pageIndex, pageSize})
  }

  onPageChange($event: PageEvent) {
    this.setCurrentPageIndexAndSize($event.pageIndex, $event.pageSize)
  }

  onFilterChange($event: string) {
    this.currentFilter = $event
    if($event === '') {
      this.updateQueryParamToUrl({filter: null})
    } else {
      this.updateQueryParamToUrl({filter: $event})
    }
  }
}
