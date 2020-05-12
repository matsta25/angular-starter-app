import { CanDeactivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { FormComponentModel } from '../models/form-component.model'


@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<FormComponentModel> {

  canDeactivate(component: FormComponentModel) {
    if (component.form.dirty) {
      return window.confirm('You have unsaved changes. Are you sure you want to leave this page?')
    } else {
      return true
    }
  }
}
