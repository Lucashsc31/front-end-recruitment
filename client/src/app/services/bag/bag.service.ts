import { Injectable } from '@angular/core';
import { IBagItem } from 'src/app/interfaces/bag-item.interface';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Subject } from 'rxjs';
import { IProductItem } from 'src/app/interfaces/product-item.interface';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  private bagItems: Array<IBagItem>;
  public onActionBag: Subject<any>;
  public onToggleBag: Subject<any>;

  constructor(
    private localStorage: LocalStorageService
  ) {
    this.onActionBag = new Subject<any>();
    this.onToggleBag = new Subject<any>();
    this.initBag();
  }

  initBag() {
    const localBag = this.localStorage.get('bag');
    this.bagItems = localBag ? localBag : new Array<IBagItem>();
  }

  saveBag() {
    this.localStorage.set('bag', this.bagItems);
  }

  toggleBag() {
    this.onToggleBag.next();
  }

  addItem(productItem: IProductItem) {
    const bagItemIndex = this.bagItems.findIndex(bagItem => bagItem.productItem.id === productItem.id);
    if (bagItemIndex === -1) {
      this.bagItems.push({
        productItem,
        amount: 1
      });
    } else {
      this.bagItems[bagItemIndex].amount += 1;
    }
    this.saveBag();
    this.onActionBag.next();
  }

  removeItem(itemId) {
    const bagItemIndex = this.bagItems.findIndex(bagItem => bagItem.productItem.id === itemId);
    if (bagItemIndex === -1) {
      return false;
    }
    this.bagItems.splice(bagItemIndex, 1);
    this.saveBag();
    this.onActionBag.next();
  }

  getItems() {
    if (!this.bagItems) {
      return [];
    } else {
      return [...this.bagItems];
    }
  }

  getSubtotal() {
    let subtotal = 0;
    this.bagItems.forEach((bagItem) => {
      subtotal += bagItem.productItem.price * bagItem.amount;
    });
    return subtotal;
  }

}
