import { BagService } from './../../services/bag/bag.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit, OnDestroy {
  private subscriptionToggleBag: Subscription;

  private isOpen = false;

  faShoppingBag = faShoppingBag;
  faTimes = faTimes;

  constructor(
    private bagService: BagService
  ) { }

  ngOnInit() {
    this.subscriptionToggleBag = this.bagService
      .onToggleBag.subscribe(() => {
        this.isOpen = !this.isOpen;
      }
    );
  }

  ngOnDestroy() {
    this.subscriptionToggleBag.unsubscribe();
  }

  getBagItems() {
    return this.bagService.getItems();
  }

  getSubtotal() {
    return this.bagService.getSubtotal();
  }

  getStatus() {
    return !!this.isOpen;
  }

  bagToggle() {
    this.bagService.toggleBag();
  }

}
