import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductsComponent } from './products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FontAwesomeModule
  ],
  declarations: [
    ProductsComponent,
  ],
  exports: []
})
export class ProductsModule { }
