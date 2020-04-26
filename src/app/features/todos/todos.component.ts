import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { TodosState } from './store/todos.state'
import { createTodosItem, deleteTodosItem, readTodos, updateTodosItem } from './store/todos.actions'
import { selectTodos } from './store/todos.selectors'
import { Todo } from './models/todo'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos$: Observable<Todo[]>
  public newTodoName: string

  constructor(private store: Store<TodosState>) {
    store.dispatch(readTodos())
  }

  ngOnInit(): void {
    this.todos$ = this.store.pipe(select(selectTodos))
  }

  public onSubmit(form: NgForm): void {
    this.store.dispatch(createTodosItem({todo: {name: this.newTodoName}}))
    form.resetForm()
  }

  public onDelete(item: Todo): void {
    this.store.dispatch(deleteTodosItem({todoId: item.id}))
  }

  public onChange(item: Todo, newDoneStatus: boolean): void {
    this.store.dispatch(updateTodosItem({updateTodo: {id: item.id, changes: {...item, done: newDoneStatus}}}))
  }
}
