import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { User } from '../../models/user.model'
import { UsersState } from '../../store/users.state'
import { select, Store } from '@ngrx/store'
import { readUsers } from '../../store/users.actions'
import { CollectionParams } from '../../../../shared/models/collection-params.model'
import { selectUsers } from '../../store/users.selectors'
import { selectLoading } from '../../../../shared/store/shared.selectors'
import { Observable } from 'rxjs'
import { MatSort, Sort } from '@angular/material/sort'
import { filter } from 'rxjs/operators'
import { MatPaginator } from '@angular/material/paginator'

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

  public defaultSort: Sort = { active: 'id', direction: 'asc' }

  @ViewChild(MatSort, { static: false }) sort: MatSort
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator
  public isOnRefresh = false

  constructor(
      private store: Store<UsersState>,
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(selectUsers))
    this.store.pipe(select(selectLoading)).subscribe( loading => {
      if (loading && !this.isOnRefresh) {
        this.dataSourceForTable = new MatTableDataSource([])
      }
      this.loading = loading
    })

    this.displayedColumns = this.setDisplayedColumns()
    this.users$.subscribe(users => this.initializeData(users))
    this.loadUsers()
  }

  ngAfterViewInit(): void {
    // this.loadUsers()

  }

  private loadUsers() {
    const collectionParams = new CollectionParams()
    this.store.dispatch(readUsers({collectionParams}))
  }

  private initializeData(users: User[]): void {
    this.dataSourceForTable = new MatTableDataSource(users)
  }

  private setDisplayedColumns() {
    return ['id', 'firstName', 'lastName', 'email']
  }

  public onRefresh(): void {
    this.isOnRefresh = true
    this.loadUsers()
  }
}
