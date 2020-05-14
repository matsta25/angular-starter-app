import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root',
})
export class RouterHistoryService {

  private urls: string[] = []

  public push(url: string): void {
    this.urls.unshift(url)
  }

  public getLatestFrom(patternUrl: string): string | undefined {
    return this.urls.find(url => url.indexOf(patternUrl) === 0)
  }
}
