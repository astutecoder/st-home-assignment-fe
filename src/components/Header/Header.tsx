import { Container } from '../layout/Container';
import Cart from './partials/Cart';
import {
  Buttons,
  HeaderSection,
  StoreName,
  Wrapper,
} from './partials/styledComponents';
import WishList from './partials/WishList';

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Wrapper>
          <StoreName>AMAZING STORE</StoreName>
          <Buttons>
            <WishList />
            <Cart />
          </Buttons>
        </Wrapper>
      </Container>
    </HeaderSection>
  );
};

export default Header;
