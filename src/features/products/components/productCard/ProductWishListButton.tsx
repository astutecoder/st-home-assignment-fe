import WishListIcon from '~/components/icons/WishListIcon';
import { WishlistIconWrapper } from './styledComponents';
import { FC } from 'react';
import { IProduct } from '~/types/IProduct';
import { observer } from 'mobx-react';
import { wishListStore } from '~/store';

const ProductWishListButton: FC<Pick<IProduct, 'id'>> = observer(({ id }) => {
  const { isInWishList, addToWishList, removeFromWishList } = wishListStore;

  const handleToggleWishList = () => {
    if (!isInWishList(id)) {
      addToWishList({ id } as IProduct);
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
