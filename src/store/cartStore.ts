import { IReactionDisposer, makeAutoObservable, reaction, toJS } from 'mobx';
import { IProduct } from '~/types/IProduct';
import { productStore } from './productStore';
import { formatNumbers } from '~/utils/numbers';

const CART_STORAGE_KEY = 'SHARE_TRIP_FE_CART';
const INITIAL_CART = { frequencies: {}, products: {} };

class CartStore {
  disposers: IReactionDisposer[] = [];
  cart: {
    frequencies: Record<string | number, number>;
    products: Record<string | number, IProduct>;
  } = INITIAL_CART;

  constructor() {
    makeAutoObservable(this);

    this.loadFromStorage();
    this.updateCart = this.updateCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.cartItemPrice = this.cartItemPrice.bind(this);
    this.calcItemPrice = this.calcItemPrice.bind(this);

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

  updateCart({
    productId,
    quantity,
  }: {
    productId: string | number;
    quantity: number;
  }) {
    const product = productStore.findProduct(productId);

    if (product) {
      this.cart.frequencies[productId] = quantity;
      this.cart.products[productId] = product;
    }
  }

  removeItem(productId: string | number) {
    delete this.cart.frequencies[productId];
    delete this.cart.products[productId];
  }

  clearCart() {
    this.cart = INITIAL_CART;
  }

  cartItemPrice(productId: string | number) {
    const { discountAmount, currentPrice, itemTotal } =
      this.calcItemPrice(productId);

    return {
      discountAmount: formatNumbers(discountAmount),
      currentPrice: formatNumbers(currentPrice),
      itemTotalPrice: formatNumbers(itemTotal),
    };
  }

  private calcItemPrice(productId: string | number) {
    const product = productStore.findProduct(productId);

    if (!product)
      return {
        discountAmount: 0,
        currentPrice: 0,
        itemTotal: 0,
      };

    const discountAmount = Number(
      ((product.price * product.discountPercentage) / 100).toFixed(2)
    );
    const currentPrice = product.price - discountAmount;
    const itemTotal =
      this.cart.frequencies[productId] * Number(currentPrice.toFixed(2));

    return { discountAmount, currentPrice, itemTotal };
  }

  private loadFromStorage(): void {
    const cart = localStorage.getItem(CART_STORAGE_KEY);

    this.hydrateStore(JSON.parse(cart || JSON.stringify(INITIAL_CART)));
  }

  private hydrateStore(cart: typeof INITIAL_CART): void {
    this.cart = cart;
  }

  dispose() {
    this.disposers.forEach((disposer) => disposer());
  }
}

export const cartStore = new CartStore();
