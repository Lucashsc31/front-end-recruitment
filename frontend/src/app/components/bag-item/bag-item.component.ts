import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bag-item',
  templateUrl: './bag-item.component.html',
  styleUrls: ['./bag-item.component.scss']
})
export class BagItemComponent implements OnInit {
  faTimes = faTimes;

  constructor() { }

  ngOnInit() {
  }

}
