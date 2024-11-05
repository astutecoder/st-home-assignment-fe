import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useState } from 'react';
import Badge from '~/components/Badge';
import Drawer from '~/components/Drawer';
import WishListIcon from '~/components/icons/WishListIcon';
import List from '~/components/list/List';
import WishtListItem from '~/components/list/WishListItem';
import { wishListStore } from '~/store';
import { THEME } from '~/utils/constants/theme';
import useScreenResize from '~/utils/hooks/useScreenResize';
import { BadgeContainer, IconWrapper } from './styledComponents';

const WishList = observer(() => {
  const { screenWidth } = useScreenResize();
  const [showDrawer, setShowDrawer] = useState(false);

  const { total, wishList } = wishListStore;

  const handleCloseDrawer = () => {
    setShowDrawer(false);
  };

  const handleIconClick = () => {
    setShowDrawer(true);
  };

  return (
    <>
      <IconWrapper onClick={handleIconClick}>
        <WishListIcon size={28} color={THEME.COLORS.DARK['700']} />
        {total ? (
          <BadgeContainer>
            <Badge count={total} />
          </BadgeContainer>
        ) : null}
      </IconWrapper>

      <Drawer
        isOpen={showDrawer}
        onCloseRequest={handleCloseDrawer}
        title="Wish List"
        size={screenWidth < 992 ? '80vw' : '40vw'}
      >
        <List items={toJS(wishList)} itemRenderer={WishtListItem} />
      </Drawer>
    </>
  );
});

export default WishList;
