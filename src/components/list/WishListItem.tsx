import { observer } from 'mobx-react';
import { FC } from 'react';
import styled from 'styled-components';
import { productStore, wishListStore } from '~/store';
import { IProduct } from '~/types/IProduct';
import { THEME } from '~/utils/constants/theme';
import TrashIcon from '../icons/TrashIcon';
import Image from '../Image';

const WishListItem: FC<IProduct> = observer(
  ({ title, brand, id, thumbnail }) => {
    const { removeFromWishList } = wishListStore;
    const { productPrice } = productStore;
    const { currentPrice } = productPrice(id);

    const handleRemoveItem = () => removeFromWishList(id);

    return (
      <Wrapper>
        <Left>
          <Thumbnail>
            <Image src={thumbnail} />
          </Thumbnail>
          <div>
            <MutedText>{brand}</MutedText>
            <Title>{title}</Title>
            <MutedText color={THEME.COLORS.PRIMARY['500']} fontWeight={500}>
              ৳{currentPrice}
            </MutedText>
          </div>
        </Left>
        <Right>
          <Remove
            size={24}
            color={THEME.COLORS.DARK['600']}
            onClick={handleRemoveItem}
          />
        </Right>
      </Wrapper>
    );
  }
);

export default WishListItem;

const Wrapper = styled.div`
  color: ${THEME.COLORS.DARK['600']};
  padding: 20px;
  margin-bottom: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Thumbnail = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

const Right = styled.div``;

const Title = styled.h2`
  color: ${THEME.COLORS.DARK['900']};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
`;
const MutedText = styled.p<{ fontWeight?: number }>`
  font-size: 14px;
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: 24px;
  margin: 0;
  color: ${(props) => props.color || 'inherit'};
`;

const Remove = styled(TrashIcon)`
  cursor: pointer;
  padding: 2px;
`;
