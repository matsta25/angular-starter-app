import { createFeatureSelector, createSelector } from '@ngrx/store'
import { todosAdapter, TodosState } from './todos.state'

const { selectAll } = todosAdapter.getSelectors()
const selectTodosState = createFeatureSelector<TodosState>('todos')

export const selectTodos = createSelector(
  selectTodosState,
  selectAll,
)
