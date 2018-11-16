import { IProductItem } from './product-item.interface';

export interface IBagItem {
    productItem: IProductItem;
    amount: number;
}
