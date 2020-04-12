import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { Todo } from '../models/todo'

export interface TodosState extends EntityState<Todo> {
}

export const todosAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  selectId: (item: Todo) => item.id,
  sortComparer: false,
})

export const initialTodosState: TodosState = todosAdapter.getInitialState({
})
