import { IReactionDisposer, makeAutoObservable, reaction, toJS } from 'mobx';
import { IProduct } from '~/types/IProduct';

const WISH_LIST_STORAGE_KEY = 'SHARE_TRIP_FE_WISH_LIST';

class WishListStore {
  disposers: IReactionDisposer[] = [];
  private _wishList: Map<string | number, IProduct> = new Map();

  constructor() {
    makeAutoObservable(this);

    this.loadFromStorage();

    this.addToWishList = this.addToWishList.bind(this);
    this.removeFromWishList = this.removeFromWishList.bind(this);
    this.isInWishList = this.isInWishList.bind(this);

    this.disposers.push(
      reaction(
        () => toJS(this.wishList),
        (wishList) => {
          localStorage.setItem(WISH_LIST_STORAGE_KEY, JSON.stringify(wishList));
        }
      )
    );
  }

  get wishList() {
    return Array.from(this._wishList.values());
  }

  get total() {
    return this._wishList.size;
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

  private loadFromStorage(): void {
    const data = localStorage.getItem(WISH_LIST_STORAGE_KEY);

    this.hydrateStore(JSON.parse(data || '[]'));
  }

  private hydrateStore(wishList: IProduct[]): void {
    for (const product of wishList) {
      this._wishList.set(product.id, product);
    }
  }

  dispose() {
    this.disposers.forEach((disposer) => disposer());
  }
}

export const wishListStore = new WishListStore();
