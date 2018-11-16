import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public onLoadProducts: Subject<any>;

  constructor(
    private http: HttpClient
  ) {
    this.onLoadProducts = new Subject<any>();
    this.loadItems();
  }

  loadItems() {
    this.http.get(`${environment.apiUrl}/products`)
      .subscribe((data: any) => {
        this.onLoadProducts.next(data.products);
      }
    );
  }

}
