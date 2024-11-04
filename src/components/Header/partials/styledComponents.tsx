import styled from 'styled-components';

export const HeaderSection = styled.section`
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const StoreName = styled.div`
  flex: 1;
  font-size: 24px;
  font-weight: 500;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const Buttons = styled(Wrapper)`
  gap: 8px;
  justify-content: flex-end;
`;

export const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const BadgeContainer = styled.div`
  position: absolute;
  top: -10px;
  right: -5px;
`;
