import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

const materialModules = [
  MatButtonModule
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
