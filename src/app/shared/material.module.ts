import { NgModule } from '@angular/core'

import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'

const materialModules = [
  MatButtonModule,
  MatSnackBarModule,
  MatIconModule,
  MatToolbarModule
]

@NgModule({
  imports: [
    ...materialModules,
  ],
  exports: [
    ...materialModules,
  ],
})
export class MaterialModule {
}
