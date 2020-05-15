import { SortDirection } from '@angular/material/sort'

export interface CollectionParams {
  filter?: string
  sortDirection?: SortDirection
  sortField?: string
  pageIndex?: number
  pageSize?: number
}
