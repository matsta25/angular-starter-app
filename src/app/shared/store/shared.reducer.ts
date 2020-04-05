import { createReducer, on } from '@ngrx/store'
import { initialSharedState } from './shared.state'
import { checkIsOnline, loadingOff, loadingOn, setIsOnline } from './shared.actions'

export const sharedReducer = createReducer(
  initialSharedState,
  on(checkIsOnline, (state) => ({
    ...state,
    isOnline: false
  })),
  on(setIsOnline, (state, {isOnline}) => ({
    ...state,
    isOnline
  })),
  on(loadingOn, (state, {url}) => ({
    ...state,
    loading: pushUnique(state.loading, url)
  })),
  on(loadingOff, (state, {url}) => ({
    ...state,
    loading: removeItem(state.loading, url)
  }))
)

function pushUnique(input: string[], newItem: string) {
  const arr = [...input]
  if (!arr.includes(newItem)) {
    arr.push(newItem)
  }
  return arr
}

function removeItem(input: string[], item: string) {
  const arr = [...input]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1)
    }
  }
  return arr
}
