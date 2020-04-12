import { Action, createReducer, on } from '@ngrx/store'
import { initialTodosState, todosAdapter, TodosState } from './todos.state'
import { createTodosItemSuccess, deleteTodosItem, readTodosSuccess, updateTodosItem } from './todos.actions'

const reducer = createReducer(
  initialTodosState,
  on(createTodosItemSuccess, (state, { todo }) => todosAdapter.addOne(todo, state)),
  on(readTodosSuccess, (state, { todos }) => todosAdapter.setAll(todos, state)),
  on(updateTodosItem, (state, { updateTodo }) => todosAdapter.updateOne(updateTodo, state)),
  on(deleteTodosItem, (state, { todoId }) => todosAdapter.removeOne(todoId, state)),
)

export function todosReducer(state: TodosState, action: Action) {
  return reducer(state, action)
}
