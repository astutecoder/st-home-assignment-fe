import { FC, useCallback, useMemo, useRef } from 'react';
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
import DiscountRibon from './DiscountRibon';

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
  const imageLoadRetries = useRef(5);
  const thumbnailRef = useRef<HTMLImageElement>(null);

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

  const handleImageError = () => {
    if (imageLoadRetries.current > 0) {
      setTimeout(() => {
        if (thumbnailRef.current) {
          thumbnailRef.current.src = thumbnail;
        }
      }, 1000);
      imageLoadRetries.current -= 1;
    } else {
      if (thumbnailRef.current) {
        thumbnailRef.current.src = 'https://fakeimg.pl/300x300/ece7e9/?text=+';
      }
    }
  };

  return (
    <ProductCardContainer>
      <ProductCardMediaContainer className="media-container">
        <ProductThumbnail
          ref={thumbnailRef}
          src={thumbnail}
          className="thumbnail"
          onError={handleImageError}
          loading="lazy"
        />
        <ProductWishListButton id={id} />

        <ActionButtons className="action-btns">
          {stock ? (
            <ProductAddToCart id={id} stock={stock} />
          ) : (
            <GlassButton>Out of Stock</GlassButton>
          )}
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

      {discountPercentage ? (
        <DiscountRibon amount={formatAmount(discountAmount)} />
      ) : null}
    </ProductCardContainer>
  );
};

export default ProductCard;
