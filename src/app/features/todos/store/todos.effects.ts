import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { ApiService } from '../services/api.service'
import {
  createTodosItem, createTodosItemFail, createTodosItemSuccess, deleteTodosItem, deleteTodosItemFail, deleteTodosItemSuccess,
  readTodos,
  readTodosFail,
  readTodosSuccess,
  updateTodosItem,
  updateTodosItemFail,
  updateTodosItemSuccess
} from './todos.actions'
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators'
import { Todo } from '../todo'
import { of } from 'rxjs'

@Injectable()
export class TodosEffects {
  constructor(private readonly actions: Actions, private todosService: ApiService) {
  }

  createTodosItem$ = createEffect(() =>
    this.actions.pipe(
      ofType(createTodosItem.type),
      mergeMap(({todo}: {todo: Todo}) =>
        this.todosService.addItem(todo).pipe(
          map((response: Todo) => ({
            type: createTodosItemSuccess.type,
            todo: response,
          })),
          catchError(() => of({type: createTodosItemFail.type})),
        ),
      ),
    ),
  )

  readTodosItems$ = createEffect(() =>
    this.actions.pipe(
      ofType(readTodos.type),
      switchMap(() => this.todosService.fetchAll().pipe(
        map((response: Todo[]) => ({
          type: readTodosSuccess.type,
          todos: response,
        })),
        catchError(() => of({type: readTodosFail.type})),
      )),
    ),
  )

  updateTodosItem$ = createEffect(() =>
    this.actions.pipe(
      ofType(updateTodosItem.type),
      mergeMap(({updateTodo}: {updateTodo: {id: string, changes: Todo}}) =>
        this.todosService.updateItem(updateTodo.id, updateTodo.changes).pipe(
          map(() => ({type: updateTodosItemSuccess.type})),
          catchError(() => of({type: updateTodosItemFail.type})),
        )
      ),
    ),
  )

  deleteTodosItem$ = createEffect(() =>
    this.actions.pipe(
      ofType(deleteTodosItem.type),
      mergeMap(({todoId}: {todoId: string}) =>
        this.todosService.daleteItem(todoId).pipe(
          map(() => ({type: deleteTodosItemSuccess.type})),
          catchError(() => of({type: deleteTodosItemFail.type})),
        ),
      ),
    ),
  )
}
