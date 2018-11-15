import { Component, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BagService } from 'src/app/services/bag/bag.service';

@Component({
  selector: 'app-bag-item',
  templateUrl: './bag-item.component.html',
  styleUrls: ['./bag-item.component.scss']
})
export class BagItemComponent {
  @Input() id;
  @Input() amount;
  @Input() photo: string;
  @Input() title: string;
  @Input() price: number;
  @Input() installments: number;
  @Input() currencyFormat: string;
  faTimes = faTimes;

  constructor(
    private bagService: BagService
  ) {}

  removeItem() {
    this.bagService.removeItem(this.id);
  }
}
