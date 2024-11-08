import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useState } from 'react';
import styled from 'styled-components';
import Badge from '~/components/Badge';
import Drawer from '~/components/Drawer';
import CartIcon from '~/components/icons/CartIcon';
import CartLineItem from '~/components/list/CartLineItem';
import List from '~/components/list/List';
import { cartStore } from '~/store';
import { THEME } from '~/utils/constants/theme';
import useScreenResize from '~/utils/hooks/useScreenResize';

const CartButton = observer(() => {
  const { total, cart } = cartStore;
  const [showDrawer, setShowDrawer] = useState(false);
  const { screenWidth } = useScreenResize();

  const handleCloseDrawer = () => {
    setShowDrawer(false);
  };

  const handleCartClick = () => {
    setShowDrawer(true);
  };

  return (
    <>
      <IconWrapper onClick={handleCartClick}>
        <CartIcon size={28} color={THEME.COLORS.DARK['700']} />
        {total ? (
          <BadgeContainer>
            <Badge count={total} />
          </BadgeContainer>
        ) : null}
      </IconWrapper>

      <Drawer
        isOpen={showDrawer}
        onCloseRequest={handleCloseDrawer}
        title="Cart"
        size={screenWidth < 992 ? '80vw' : '40vw'}
      >
        <List
          items={Object.values(toJS(cart.products))}
          itemRenderer={CartLineItem}
        />
      </Drawer>
    </>
  );
});

export default CartButton;

const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const BadgeContainer = styled.div`
  position: absolute;
  top: -10px;
  right: -5px;
`;
