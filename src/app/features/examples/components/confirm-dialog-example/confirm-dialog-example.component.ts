/*
  This will be deleted after execute ./cleanup.sh script.
*/

import { Component, OnInit } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component'
import { DialogDataModel } from '../../../../shared/models/dialog-data.model'

@Component({
  selector: 'app-confirm-dialog-example',
  templateUrl: './confirm-dialog-example.component.html',
  styleUrls: ['./confirm-dialog-example.component.scss'],
})
export class ConfirmDialogExampleComponent implements OnInit {

  private dialogRef: MatDialogRef<ConfirmDialogComponent, boolean>
  public dialogResult: boolean

  constructor(private dialog: MatDialog) {
  }

  openConfirmDialog() {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '280px',
      data: ({
        title: 'Confirm Dialog',
        message: 'Custom message here...',
      } as DialogDataModel),
    })

    this.dialogRef.afterClosed().subscribe(result => this.dialogResult = result)
  }

  ngOnInit(): void {
    // this.dialogRef.afterClosed().subscribe(result => this.dialogResult = result)
  }
}
