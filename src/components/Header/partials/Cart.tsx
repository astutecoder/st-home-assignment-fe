import { observer } from 'mobx-react';
import Badge from '~/components/Badge';
import CartIcon from '~/components/icons/CartIcon';
import { cartStore } from '~/store';
import { THEME } from '~/utils/constants/theme';
import { BadgeContainer, IconWrapper } from './styledComponents';

const Cart = observer(() => {
  const { total } = cartStore;

  return (
    <IconWrapper>
      <CartIcon size={28} color={THEME.COLORS.DARK['700']} />
      {total ? (
        <BadgeContainer>
          <Badge count={total} />
        </BadgeContainer>
      ) : null}
    </IconWrapper>
  );
});

export default Cart;
