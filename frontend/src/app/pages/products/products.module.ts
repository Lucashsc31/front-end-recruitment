import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    ProductsComponent,
  ],
  exports: []
})
export class ProductsModule { }
