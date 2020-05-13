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
import { ActivatedRoute, Router } from '@angular/router'

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
  public currentSort: Sort = {active: 'id', direction: 'desc'}

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
      console.log(paramsFromUrl)
      if (paramsFromUrl?.sortField && paramsFromUrl?.sortDirection) {
        this.setCurrentSort({
          direction: paramsFromUrl?.sortDirection,
          active: paramsFromUrl?.sortField,
        })
      }
    })

    this.setDisplayedColumns()
    this.setCurrentSort(this.currentSort)
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
    this.addQueryParamToUrl('sortField', sort.active).then(
      () => this.addQueryParamToUrl('sortDirection', sort.direction),
    )
  }

  private addQueryParamToUrl(key: string, value: string) {
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        [key]: value,
      },
      queryParamsHandling: 'merge',
    })
  }

  onClear() {
    this.setCurrentSort({active: 'id', direction: 'desc'})
    const sortHeader = this.sort.sortables.get('id')
    // @ts-ignore https://github.com/angular/components/issues/15715#issuecomment-493074168
    sortHeader._handleClick()
    this.loadUsers()
  }
}
