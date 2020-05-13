import { CanDeactivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable, of } from 'rxjs'
import { CanDeactivateComponentModel } from '../models/can-deactivate-component.model'
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component'
import { DialogDataModel } from '../models/dialog-data.model'


@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<CanDeactivateComponentModel> {

  constructor(private dialog: MatDialog) {
  }

  canDeactivate(component: CanDeactivateComponentModel): Observable<boolean> {

    if (component.canDeactivate()) {
      return of(true)
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: ({
        title: 'Confirm Navigation',
        message: 'You have unsaved changes. Are you sure you want to leave this page?',
        btnCancel: 'Stay on this Page',
        btnOk: 'Leave this Page',
      } as DialogDataModel),
    })

    return dialogRef.afterClosed()
  }
}
