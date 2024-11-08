import { IReactionDisposer, makeAutoObservable, reaction, toJS } from 'mobx';
import { IProduct } from '~/types/IProduct';
import { formatNumbers } from '~/utils/numbers';

const PRODUCT_STORAGE_KEY = 'SHARE_TRIP_FE_PRODUCTS';
const PRODUCT_FETCH_META_STORAGE_KEY = 'SHARE_TRIP_FE_PRODUCTS_FETCH_META';
const INITIAL_FETCH_META = {
  shouldFetchMore: true,
  currentPage: 0,
  productsPerPage: 30,
};

class ProductStore {
  disposers: IReactionDisposer[] = [];

  private _products: Map<string | number, IProduct> = new Map();

  isFetching: boolean = true;
  meta: {
    shouldFetchMore: boolean;
    currentPage: number;
    productsPerPage: number;
  } = INITIAL_FETCH_META;

  constructor() {
    makeAutoObservable(this);

    this.loadFromStorage();
    this.appendProducts = this.appendProducts.bind(this);
    this.findProduct = this.findProduct.bind(this);
    this.productPrice = this.productPrice.bind(this);
    this.updateFetchMeta = this.updateFetchMeta.bind(this);
    this.updateFetchingStatus = this.updateFetchingStatus.bind(this);

    this.disposers.push(
      reaction(
        () => toJS(this.products),
        (products) => {
          localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(products));
        }
      )
    );
    this.disposers.push(
      reaction(
        () => toJS(this.meta),
        (meta) => {
          localStorage.setItem(
            PRODUCT_FETCH_META_STORAGE_KEY,
            JSON.stringify(meta)
          );
        }
      )
    );
  }

  get products() {
    return Array.from(this._products.values());
  }

  get total() {
    return this._products.size;
  }

  updateFetchingStatus(status: boolean) {
    this.isFetching = status;
  }

  findProduct(id: string | number) {
    return this._products.get(id);
  }

  appendProducts(products: IProduct[]): void {
    for (const product of products) {
      if (!this._products.has(product.id)) {
        this._products.set(product.id, product);
      }
    }
  }

  productPrice(productId: string | number) {
    const { discountAmount, currentPrice } = this.calcItemPrice(productId);

    return {
      discountAmount: formatNumbers(discountAmount),
      currentPrice: formatNumbers(currentPrice),
    };
  }

  private calcItemPrice(productId: string | number) {
    const product = this._products.get(productId);

    if (!product)
      return {
        discountAmount: 0,
        currentPrice: 0,
      };

    const discountAmount = Number(
      ((product.price * product.discountPercentage) / 100).toFixed(2)
    );
    const currentPrice = product.price - discountAmount;

    return { discountAmount, currentPrice };
  }

  private loadFromStorage(): void {
    const products = localStorage.getItem(PRODUCT_STORAGE_KEY);
    const meta = localStorage.getItem(PRODUCT_FETCH_META_STORAGE_KEY);

    this.hydrateStore({
      products: JSON.parse(products || '[]'),
      meta: JSON.parse(meta || JSON.stringify(INITIAL_FETCH_META)),
    });
  }

  private hydrateStore({
    products,
    meta,
  }: {
    products: IProduct[];
    meta: typeof INITIAL_FETCH_META;
  }): void {
    this.appendProducts(products);
    this.meta = meta;
  }

  updateFetchMeta(data: Partial<typeof INITIAL_FETCH_META>) {
    this.meta = { ...this.meta, ...data };
  }

  dispose() {
    this.disposers.forEach((disposer) => disposer());
  }
}

export const productStore = new ProductStore();
