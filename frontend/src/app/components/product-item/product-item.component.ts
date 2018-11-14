import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() photo: string;
  @Input() title: string;
  @Input() price: number;
  @Input() installments: number;
  @Input() currencyFormat: string;

  installmentValue: number;

  ngOnInit() {
    this.installmentValue = this.price / this.installments;
  }

}
