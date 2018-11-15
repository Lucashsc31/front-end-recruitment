import { Injectable, AfterViewInit } from '@angular/core';
import { BagItemInterface } from 'src/app/interfaces/bagItem.interface';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  private bagItems: Array<BagItemInterface>;

  constructor(
    private localStorage: LocalStorageService
  ) {
    this.initBag();
  }

  initBag() {
    const localBag = this.localStorage.getLocalStorage('bag');
    this.bagItems = localBag ? localBag : new Array<BagItemInterface>();
  }

  updateBag() {
    this.localStorage.setLocalStorage('bag', this.bagItems);
  }

  addItem(itemId) {
    const bagItemIndex = this.bagItems.findIndex((bagItem) => {
      return bagItem.id === itemId;
    });
    if (bagItemIndex === -1) {
      this.bagItems.push({
        id: itemId,
        amount: 1
      });
    } else {
      this.bagItems[bagItemIndex].amount += 1;
    }
    this.updateBag();
  }

  removeItem(itemId) {
    const bagItemIndex = this.bagItems.findIndex((bagItem) => {
      return bagItem.id === itemId;
    });
    if (bagItemIndex === -1) {
      return false;
    }
    this.bagItems.splice(bagItemIndex, 1);
    this.updateBag();
  }

  getItems() {
    return this.bagItems;
  }
}
