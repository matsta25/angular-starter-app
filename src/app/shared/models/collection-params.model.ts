import { HttpParams } from '@angular/common/http'
import { Params } from '@angular/router'

export class Filter {
    [key: string]: any
}

export class CollectionParams {
    filters: Filter
    sortDirection: 'asc' | 'desc' | ''
    sortField: string
    pageIndex: number
    pageSize: number

    constructor(
        filters: Filter = {},
        sortDirection: 'asc' | 'desc' | '' = '',
        sortField: string = '',
        pageIndex: number = 1,
        pageSize: number = 10,
    ) {
        this.filters = filters
        this.sortDirection = sortDirection
        this.sortField = sortField
        this.pageIndex = pageIndex
        this.pageSize = pageSize
    }

    public getCollectionHttpParams(): HttpParams {
        const params = new HttpParams()

        Object.entries(this.filters).forEach(
            ([key, value]) => {
                params.append(key, value.toString())
            },
        )

        params
            .set('sortDirection', this.sortDirection)
            .set('sortField', this.sortField)
            .set('pageIndex', this.pageIndex.toString())
            .set('pageSize', this.pageSize.toString())

        return params
    }

}
