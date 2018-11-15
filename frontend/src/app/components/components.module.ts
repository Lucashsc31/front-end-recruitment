import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { BagComponent } from './bag/bag.component';
import { BagItemComponent } from './bag-item/bag-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    ProductItemComponent,
    BagComponent,
    BagItemComponent
  ],
  exports: [
    ProductItemComponent,
    BagComponent,
    BagItemComponent
  ]
})
export class ComponentsModule { }
