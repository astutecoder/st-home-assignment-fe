import { makeAutoObservable } from 'mobx';

class CartStore {
  cart: {
    frequencies: Record<string | number, number>;
    products: Record<string | number, unknown>;
  } = { frequencies: {}, products: {} };

  constructor() {
    makeAutoObservable(this);

    this.updateCart = this.updateCart.bind(this);
  }

  public updateCart({
    productId,
    quantity,
  }: {
    productId: string | number;
    quantity: number;
  }) {
    this.cart.frequencies[productId] = quantity;
  }
}

export const cartStore = new CartStore();
