import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

const materialModules = [
  MatButtonModule,
  MatSnackBarModule,
  MatIconModule
];

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
