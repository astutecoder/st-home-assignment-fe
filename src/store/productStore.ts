import { makeAutoObservable } from 'mobx';
import { IProduct } from '~/types/IProduct';

class ProductStore {
  private _products: Map<string | number, IProduct> = new Map();

  constructor() {
    makeAutoObservable(this);

    this.appendProducts = this.appendProducts.bind(this);
  }

  get products() {
    return Array.from(this._products.values());
  }

  get total() {
    return this._products.size;
  }

  appendProducts(products: IProduct[]) {
    for (const product of products) {
      this._products.set(product.id, product);
    }
  }
}

export const productStore = new ProductStore();