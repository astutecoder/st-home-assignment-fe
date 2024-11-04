import { FC, useCallback, useMemo } from 'react';
import GlassButton from '~/components/buttons/GlassButton';
import EyeIcon from '~/components/icons/EyeIcon';
import { IProduct } from '~/types/IProduct';
import ProductAddToCart from './ProductAddToCart';
import ProductWishListButton from './ProductWishListButton';
import {
  ActionButtons,
  ComparedPrice,
  CurrentPrice,
  PriceContainer,
  ProductBrand,
  ProductCardContainer,
  ProductCardMediaContainer,
  ProductInfoContainer,
  ProductNameContainer,
  ProductThumbnail,
  ProductTitle,
} from './styledComponents';

type ProductCardProps = Pick<
  IProduct,
  | 'id'
  | 'thumbnail'
  | 'images'
  | 'brand'
  | 'title'
  | 'price'
  | 'discountPercentage'
  | 'stock'
>;

const ProductCard: FC<ProductCardProps> = ({
  id,
  thumbnail,
  brand,
  title,
  price,
  discountPercentage,
  stock,
}) => {
  const discountAmount = useMemo(
    () => (price * discountPercentage) / 100,
    [price, discountPercentage]
  );

  const currentPrice = useMemo(
    () => price - Number(discountAmount || '0'),
    [discountAmount, price]
  );

  const formatAmount = useCallback(
    (amount: number) =>
      amount.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      }),
    []
  );

  return (
    <ProductCardContainer>
      <ProductCardMediaContainer className="media-container">
        <ProductThumbnail src={thumbnail} className="thumbnail" />

        <ProductWishListButton id={id} />

        <ActionButtons className="action-btns">
          <ProductAddToCart id={id} stock={stock} />
          <GlassButton>
            <EyeIcon />
            <span>Quick view</span>
          </GlassButton>
        </ActionButtons>
      </ProductCardMediaContainer>

      <ProductInfoContainer>
        <ProductNameContainer>
          {brand ? <ProductBrand>{brand}</ProductBrand> : null}
          <ProductTitle>{title}</ProductTitle>
        </ProductNameContainer>

        <PriceContainer>
          <CurrentPrice>
            <span className="fw-525">৳</span>
            <span className="fw-475">{formatAmount(currentPrice)}</span>
          </CurrentPrice>
          <ComparedPrice>৳ {formatAmount(price)}</ComparedPrice>
        </PriceContainer>
      </ProductInfoContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
