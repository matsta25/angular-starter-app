import { CanDeactivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { CanDeactivateComponentModel } from '../models/can-deactivate-component.model'


@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<CanDeactivateComponentModel> {

  canDeactivate(component: CanDeactivateComponentModel): boolean {
    return component.canDeactivate() || window.confirm('You have unsaved changes. Are you sure you want to leave this page?')
  }
}
