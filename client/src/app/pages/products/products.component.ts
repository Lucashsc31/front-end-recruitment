import { ProductsService } from './../../services/products/products.service';
import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  faTimes = faTimes;
  bagOpen = false;

  constructor(
    public productsService: ProductsService
  ) {}

  bagToggle() {
    this.bagOpen = !this.bagOpen;
  }
}
