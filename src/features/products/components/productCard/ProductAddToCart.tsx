import { observer } from 'mobx-react';
import { FC, MouseEvent } from 'react';
import GlassButton from '~/components/buttons/GlassButton';
import PrimaryButton from '~/components/buttons/PrimaryButton';
import AddToCart from '~/components/buttons/AddToCart';
import { cartStore } from '~/store';
import { IProduct } from '~/types/IProduct';

const ProductAddToCart: FC<Pick<IProduct, 'id' | 'stock'>> = observer(
  ({ id, stock }) => {
    const { cart, updateCart, removeItem } = cartStore;
    const itemsInCart = cart?.frequencies?.[id] || 0;

    const handleAddToCart = (e: MouseEvent) => {
      e.preventDefault();
      if (itemsInCart >= stock) return;

      updateCart({ productId: id, quantity: itemsInCart + 1 });
    };

    const handleRemoveFromCart = (e: MouseEvent) => {
      e.preventDefault();

      if (itemsInCart <= 1) {
        removeItem(id);
        return;
      }
      updateCart({ productId: id, quantity: itemsInCart - 1 });
    };

    return (
      <AddToCart
        count={itemsInCart}
        disableAddMore={itemsInCart >= stock}
        handleAdd={handleAddToCart}
        handleRemove={handleRemoveFromCart}
        buttonComp={itemsInCart < 1 ? GlassButton : PrimaryButton}
      />
    );
  }
);

export default ProductAddToCart;
