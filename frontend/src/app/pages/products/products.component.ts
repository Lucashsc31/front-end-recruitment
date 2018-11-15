import { Component } from '@angular/core';
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  faShoppingBag = faShoppingBag;
  faTimes = faTimes;
  bagOpen = false;

  bagToggle() {
    this.bagOpen = !this.bagOpen;
  }
}
