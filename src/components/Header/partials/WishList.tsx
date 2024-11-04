import Badge from '~/components/Badge';
import WishListIcon from '~/components/icons/WishListIcon';
import { THEME } from '~/utils/constants/theme';
import { BadgeContainer, IconWrapper } from './styledComponents';
import { observer } from 'mobx-react';
import { wishListStore } from '~/store';

const WishList = observer(() => {
  const { total } = wishListStore;

  return (
    <IconWrapper>
      <WishListIcon size={28} color={THEME.COLORS.DARK['700']} />
      {total ? (
        <BadgeContainer>
          <Badge count={total} />
        </BadgeContainer>
      ) : null}
    </IconWrapper>
  );
});

export default WishList;
