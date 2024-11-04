import { IReactionDisposer, makeAutoObservable, reaction, toJS } from 'mobx';

const CART_STORAGE_KEY = 'SHARE_TRIP_FE_CART';
const INITIAL_CART = { frequencies: {}, products: {} };

class CartStore {
  disposers: IReactionDisposer[] = [];
  cart: {
    frequencies: Record<string | number, number>;
    products: Record<string | number, unknown>;
  } = INITIAL_CART;

  constructor() {
    makeAutoObservable(this);

    this.updateCart = this.updateCart.bind(this);
    this.loadFromStorage();

    this.disposers.push(
      reaction(
        () => toJS(this.cart),
        (cart) => {
          localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        }
      )
    );
  }

  get total() {
    return Object.keys(this.cart.frequencies).reduce(
      (acc, current) => +(this.cart.frequencies[current] || 0) + acc,
      0
    );
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

  loadFromStorage(): void {
    const cart = localStorage.getItem(CART_STORAGE_KEY);

    this.hydrateStore(JSON.parse(cart || JSON.stringify(INITIAL_CART)));
  }

  hydrateStore(cart: typeof INITIAL_CART): void {
    this.cart = cart;
  }

  dispose() {
    this.disposers.forEach((disposer) => disposer());
  }
}

export const cartStore = new CartStore();
