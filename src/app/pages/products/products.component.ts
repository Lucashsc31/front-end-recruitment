
import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { BagService } from 'src/app/services/bag/bag.service';
import { IProductItem } from 'src/app/interfaces/product-item.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsPageComponent implements OnInit {
  private subscriptionLoadProducts: Subscription;
  private productItems: Array<IProductItem>;

  constructor(
    public productsService: ProductsService,
    public bagService: BagService
  ) {}

  ngOnInit() {
    this.subscriptionLoadProducts = this.productsService
      .onLoadProducts.subscribe((data) => {
        this.productItems = data;
      }
    );
  }

  bagToggle() {
    this.bagService.toggleBag();
  }

  addItemOnBag(productItem) {
    this.bagService.addItem(productItem);
  }
}
