import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Items } from './items/items.component'

@NgModule({
  declarations: [Items],
  imports: [CommonModule, RouterModule],
  exports: [Items],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
