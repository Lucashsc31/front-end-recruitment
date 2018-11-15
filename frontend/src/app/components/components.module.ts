import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { BagComponent } from './bag/bag.component';
import { BagItemComponent } from './bag-item/bag-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BagIconComponent } from './bag-icon/bag-icon.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    ProductItemComponent,
    BagComponent,
    BagItemComponent,
    BagIconComponent
  ],
  exports: [
    ProductItemComponent,
    BagComponent,
    BagItemComponent,
    BagIconComponent
  ]
})
export class ComponentsModule { }
