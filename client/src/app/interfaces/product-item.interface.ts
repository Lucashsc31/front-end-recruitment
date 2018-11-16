export interface IProductItem {
    id: number;
    sku: number;
    title: string;
    description: string;
    availableSizes: Array<string>;
    style: string;
    price: number;
    installments: number;
    currencyId: string;
    currencyFormat: string;
    isFreeShipping: boolean;
}
