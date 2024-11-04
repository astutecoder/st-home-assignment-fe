import { FC, HTMLAttributes, MouseEvent, PropsWithChildren } from 'react';
import styled from 'styled-components';
import PrimaryButton from '../buttons/PrimaryButton';
import CartIcon from '../icons/CartIcon';
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';
import TrashIcon from '../icons/TrashIcon';

type AddToCartProps = {
  count: number;
  disableAddMore: boolean;
  handleAdd: (e: MouseEvent) => void;
  handleRemove: (e: MouseEvent) => void;
  buttonComp: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>;
};

const AddToCart: FC<AddToCartProps> = ({
  count,
  handleAdd,
  handleRemove,
  disableAddMore,
  buttonComp: Button,
}) => {
  if (!count) {
    return (
      <Button onClick={handleAdd}>
        <CartIcon />
        <span>Add to cart</span>
      </Button>
    );
  }

  return (
    <PrimaryButton>
      <Container>
        <Left onClick={handleRemove}>
          {count === 1 ? <TrashIcon /> : <MinusIcon />}
        </Left>
        <Text>{count} Added in Cart</Text>
        <Right disabled={disableAddMore}>
          <PlusIcon onClick={handleAdd} />
        </Right>
      </Container>
    </PrimaryButton>
  );
};

export default AddToCart;

const Container = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const Text = styled.span`
  flex: 1;
  text-align: center;
  line-height: 1;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.75;
  transition: opacity 0.25s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
const Right = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.disabled ? 0.3 : 0.75)};
  transition: opacity 0.25s ease-in-out;

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  }
`;
