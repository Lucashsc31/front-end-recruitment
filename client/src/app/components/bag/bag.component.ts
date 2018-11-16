import { BagService } from './../../services/bag/bag.service';
import { Component, Input } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent {
  @Input() isOpen = false;

  faShoppingBag = faShoppingBag;

  constructor(
    private bagService: BagService
  ) { }

  getBagItems() {
    return this.bagService.getItems();
  }


}
