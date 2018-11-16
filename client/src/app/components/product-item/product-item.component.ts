import { Component, OnInit, Input } from '@angular/core';
import { BagService } from 'src/app/services/bag/bag.service';
import { IProductItem } from 'src/app/interfaces/product-item.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: IProductItem;
  installmentValue: number;
  photo: string;

  constructor(
    private bagService: BagService
  ) { }

  ngOnInit() {
    this.installmentValue = this.productItem.price / this.productItem.installments;
    this.photo = this.generateUrlImage(this.productItem.sku);
  }

  addItemOnBag() {
    this.bagService.addItem(this.productItem);
  }

  generateUrlImage(sku) {
    return `${environment.imageUrl}/${sku}.jpg`;
  }

}
