import { Component, OnInit, Input } from '@angular/core';
import { BagService } from 'src/app/services/bag/bag.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() id: string;
  @Input() photo: string;
  @Input() title: string;
  @Input() price: number;
  @Input() installments: number;
  @Input() currencyFormat: string;
  installmentValue: number;

  constructor(
    private bagService: BagService
  ) { }

  ngOnInit() {
    this.installmentValue = this.price / this.installments;
  }

  addItemOnBag() {
    this.bagService.addItem(this.id);
  }

}
