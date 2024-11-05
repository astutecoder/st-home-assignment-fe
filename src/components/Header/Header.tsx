import styled from 'styled-components';
import CartButton from '../buttons/CartButton';
import WishListButton from '../buttons/WishListButton';
import { Container } from '../Container';

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Wrapper>
          <StoreName>AMAZING STORE</StoreName>
          <Buttons>
            <WishListButton />
            <CartButton />
          </Buttons>
        </Wrapper>
      </Container>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.section`
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 2;
`;

const StoreName = styled.div`
  flex: 1;
  font-size: 24px;
  font-weight: 500;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const Buttons = styled(Wrapper)`
  gap: 8px;
  justify-content: flex-end;
`;
