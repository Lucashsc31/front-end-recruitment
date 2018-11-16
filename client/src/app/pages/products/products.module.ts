import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductsPageComponent } from './products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FontAwesomeModule
  ],
  declarations: [
    ProductsPageComponent,
  ],
  exports: []
})
export class ProductsModule { }
