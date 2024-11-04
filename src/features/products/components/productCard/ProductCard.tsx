import { FC, useCallback, useMemo, useRef, useState } from 'react';
import { PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import GlassButton from '~/components/buttons/GlassButton';
import EyeIcon from '~/components/icons/EyeIcon';
import LoadingIcon from '~/components/icons/LoadingIcon';
import { IProduct } from '~/types/IProduct';
import { THEME } from '~/utils/constants/theme';
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
} from '../styledComponents';
import DiscountRibon from './DiscountRibon';
import ProductAddToCart from './ProductAddToCart';
import ProductWishListButton from './ProductWishListButton';

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
  images,
  brand,
  title,
  price,
  discountPercentage,
  stock,
}) => {
  const [showImages, setShowImages] = useState(false);

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

  const toggleQuickView = () => {
    setShowImages((prev) => !prev);
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
          <GlassButton onClick={toggleQuickView}>
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

      <PhotoSlider
        images={images.map((item) => ({ src: item, key: item }))}
        visible={showImages}
        onClose={() => {
          setShowImages(false);
        }}
        loop={images.length - 1}
        loadingElement={
          <LoadingIcon size={50} fill={THEME.COLORS.PRIMARY['500']} />
        }
      />
    </ProductCardContainer>
  );
};

export default ProductCard;
