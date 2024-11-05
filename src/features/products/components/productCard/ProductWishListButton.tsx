import { observer } from 'mobx-react';
import { FC } from 'react';
import WishListIcon from '~/components/icons/WishListIcon';
import { productStore, wishListStore } from '~/store';
import { IProduct } from '~/types/IProduct';
import { WishlistIconWrapper } from '../styledComponents';

const ProductWishListButton: FC<Pick<IProduct, 'id'>> = observer(({ id }) => {
  const { isInWishList, addToWishList, removeFromWishList } = wishListStore;
  const { findProduct } = productStore;

  const handleToggleWishList = () => {
    const product = findProduct(id);
    if (!isInWishList(id) && product) {
      addToWishList(product);
    } else {
      removeFromWishList(id);
    }
  };

  return (
    <WishlistIconWrapper
      className="wishlist-icon-wrapper"
      onClick={handleToggleWishList}
    >
      {!isInWishList(id) ? <WishListIcon /> : <WishListIcon color="red" />}
    </WishlistIconWrapper>
  );
});

export default ProductWishListButton;
