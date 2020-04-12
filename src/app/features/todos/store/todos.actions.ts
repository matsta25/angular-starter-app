import { createAction, props } from '@ngrx/store'
import { Update } from '@ngrx/entity'
import { Todo } from '../models/todo'

export const createTodosItem = createAction('[Todos/API] Add Item', props<{ todo: Partial<Todo> }>())
export const createTodosItemSuccess = createAction('[Todos/API] Add Item Success', props<{ todo: Todo }>())
export const createTodosItemFail = createAction('[Todos/API] Add Item FAIL')

export const readTodos = createAction('[Todos/API] Fetch All')
export const readTodosSuccess = createAction('[Todos/API] Fetch All Success', props<{ todos: Todo[] }>())
export const readTodosFail = createAction('[Todos/API] Fetch All FAIL')

export const updateTodosItem = createAction('[Todos/API] Update Item', props<{ updateTodo: Update<Todo> }>())
export const updateTodosItemSuccess = createAction('[Todos/API] Update Item Success')
export const updateTodosItemFail = createAction('[Todos/API] Update Item FAIL')

export const deleteTodosItem = createAction('[Todos/API] Delete Item', props<{ todoId: string }>())
export const deleteTodosItemSuccess = createAction('[Todos/API] Delete Item Success')
export const deleteTodosItemFail = createAction('[Todos/API] Delete Item FAIL')
