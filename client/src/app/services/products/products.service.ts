import { Injectable } from '@angular/core';
import { IProductItem } from 'src/app/interfaces/product-item.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productItems: Array<IProductItem>;

  constructor(
    private http: HttpClient
  ) {
    this.loadItems();
  }

  loadItems() {
    this.http.get(`${environment.apiUrl}/products`)
      .subscribe((data: any) => {
        this.productItems = data.products;
      }
    );
  }

  getItems() {
    if (!this.productItems) {
      return [];
    } else {
      return [...this.productItems];
    }
  }
  
}
