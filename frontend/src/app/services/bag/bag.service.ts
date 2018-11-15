import { Injectable, AfterViewInit } from '@angular/core';
import { BagItemInterface } from 'src/app/interfaces/bagItem.interface';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  private bagItems: Array<BagItemInterface>;
  public onActionBag: Subject<any>;

  constructor(
    private localStorage: LocalStorageService
  ) {
    this.onActionBag = new Subject<any>();
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
    this.onActionBag.next();
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
    this.onActionBag.next();
  }

  getItems() {
    return this.bagItems;
  }
}
