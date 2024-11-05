import { FC, PropsWithChildren } from 'react';
import RDrawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import styled from 'styled-components';
import { THEME } from '~/utils/constants/theme';
import CloseIcon from './icons/CloseIcon';

type DrawerProps = {
  isOpen: boolean;
  title?: string;
  size?: string | number;
  onCloseRequest: () => void;
};

const Drawer: FC<PropsWithChildren<DrawerProps>> = ({
  isOpen,
  title = '',
  onCloseRequest,
  children,
  size,
}) => {
  return (
    <RDrawer
      open={isOpen}
      onClose={onCloseRequest}
      direction="right"
      size={size}
      lockBackgroundScroll={true}
    >
      <Wrapper>
        <Header>
          <Title>{title}</Title>
          <Close onClick={onCloseRequest} />
        </Header>
        <DrawerBody>{children}</DrawerBody>
      </Wrapper>
    </RDrawer>
  );
};

export default Drawer;

const Wrapper = styled.div`
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
`;

const Close = styled(CloseIcon).attrs({
  color: THEME.COLORS.DARK['600'],
  size: 22,
})`
  border: 1px solid ${THEME.COLORS.DARK['600']};
  border-radius: 4px;
  cursor: pointer;
  padding: 2px;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const DrawerBody = styled.div`
  overflow-y: auto;
`;
