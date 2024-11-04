import { makeAutoObservable } from 'mobx';
import { IProduct } from '~/types/IProduct';

class WishListStore {
  private _wishList: Map<string | number, IProduct> = new Map();

  constructor() {
    makeAutoObservable(this);

    this.addToWishList = this.addToWishList.bind(this);
    this.removeFromWishList = this.removeFromWishList.bind(this);
    this.isInWishList = this.isInWishList.bind(this);
  }

  get wishList() {
    return Array.from(this._wishList.values());
  }

  addToWishList(product: IProduct) {
    this._wishList.set(product.id, product);
  }

  removeFromWishList(productId: IProduct['id']) {
    this._wishList.delete(productId);
  }

  isInWishList(productId: IProduct['id']) {
    return this._wishList.has(productId);
  }
}

export const wishListStore = new WishListStore();
