export interface SharedState {
  isOnline: boolean
  loading: boolean
}

export const initialSharedState: SharedState = {
  isOnline: false,
  loading: false,
}
