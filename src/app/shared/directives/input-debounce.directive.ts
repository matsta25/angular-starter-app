import { Directive, ElementRef, OnInit, EventEmitter, Output } from '@angular/core'
import { fromEvent } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators'

@Directive({
  selector: '[appInput]',
})
export class InputDebounceDirective implements OnInit {

  @Output() delayedInput: EventEmitter<string>

  constructor(private elementRef: ElementRef) {
    this.delayedInput = new EventEmitter()
  }

  ngOnInit(): void {
    fromEvent(this.elementRef.nativeElement, 'input')
      .pipe(
        map(() => this.elementRef.nativeElement.value),
        debounceTime(800),
      )
      .subscribe((input: string) => this.delayedInput.next(input))
  }
}
