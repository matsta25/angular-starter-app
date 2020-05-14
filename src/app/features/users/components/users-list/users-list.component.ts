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
import { MatPaginator } from '@angular/material/paginator'
import { ActivatedRoute, Params, Router } from '@angular/router'

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
  public totalCount$: Observable<number>

  public dataSourceForTable: MatTableDataSource<User>
  public displayedColumns: string[] = []
  private readonly defaultSort: Sort = {active: 'id', direction: 'desc'}
  public currentSort: Sort

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

  private loadUsers() {
    this.store.dispatch(readUsers({
      collectionParams: {
        sortDirection: this.currentSort.direction,
        sortField: this.currentSort.active,
      },
    }))
  }

  private setDisplayedColumns() {
    this.displayedColumns = ['id', 'firstName', 'lastName', 'email']
  }

  private setCurrentSort(sort: Sort): void {
    this.currentSort = sort
    this.addQueryParamToUrl({sortField: sort.active, sortDirection: sort.direction})
  }

  private addQueryParamToUrl(params: Params) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: params,
      queryParamsHandling: 'merge',
    })
  }

  onClear() {
    // TODO: clear "search" not sorting
    this.loadUsers()
  }
}
