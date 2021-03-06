import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BagService } from 'src/app/services/bag/bag.service';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bag-icon',
  templateUrl: './bag-icon.component.html',
  styleUrls: ['./bag-icon.component.scss']
})
export class BagIconComponent implements OnInit, OnDestroy {
  @Input() size = 35;

  private subscriptionActionBag: Subscription;

  faShoppingBag = faShoppingBag;

  isAnimate = false;

  constructor(
    private bagService: BagService
  ) { }

  ngOnInit() {
    this.subscriptionActionBag = this.bagService
      .onActionBag.subscribe(() => {
        this.animaBagIcon();
      }
    );
  }

  ngOnDestroy() {
    this.subscriptionActionBag.unsubscribe();
  }

  animaBagIcon() {
    this.isAnimate = true;
    setTimeout(() => {
      this.isAnimate = false;
    }, 250);
  }
}
