import { IReactionDisposer, makeAutoObservable, reaction, toJS } from 'mobx';
import { IProduct } from '~/types/IProduct';

const PRODUCT_STORAGE_KEY = 'SHARE_TRIP_FE_PRODUCTS';
const PRODUCT_FETCH_META_STORAGE_KEY = 'SHARE_TRIP_FE_PRODUCTS_FETCH_META';
const INITIAL_FETCH_META = {
  shouldFetchMore: true,
  currentPage: 0,
  productsPerPage: 30,
};

class ProductStore {
  private _products: Map<string | number, IProduct> = new Map();
  disposers: IReactionDisposer[] = [];

  meta: {
    shouldFetchMore: boolean;
    currentPage: number;
    productsPerPage: number;
  } = INITIAL_FETCH_META;

  constructor() {
    makeAutoObservable(this);

    this.loadFromStorage();
    this.appendProducts = this.appendProducts.bind(this);

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

  dispose() {
    this.disposers.forEach((disposer) => disposer());
  }
}

export const productStore = new ProductStore();
