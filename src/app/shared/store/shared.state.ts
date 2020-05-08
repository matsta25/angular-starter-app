export interface SharedState {
  isOnline: boolean
  loading: string[]
}

export const initialSharedState: SharedState = {
  isOnline: false,
  loading: [],
}
