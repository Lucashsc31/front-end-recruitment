import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BagService } from 'src/app/services/bag/bag.service';
import { environment } from 'src/environments/environment';
import { IBagItem } from 'src/app/interfaces/bag-item.interface';

@Component({
  selector: 'app-bag-item',
  templateUrl: './bag-item.component.html',
  styleUrls: ['./bag-item.component.scss']
})
export class BagItemComponent implements OnInit {
  @Input() bagItem: IBagItem;
  photo: string;
  faTimes = faTimes;

  constructor(
    private bagService: BagService
  ) {}

  ngOnInit() {
    this.photo = this.generateUrlImage(this.bagItem.productItem.sku);
  }

  removeItem() {
    this.bagService.removeItem(this.bagItem.productItem.id);
  }

  generateUrlImage(sku) {
    return `${environment.imageUrl}/${sku}.jpg`;
  }
}
