import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { THEME } from '~/utils/constants/theme';

const PrimaryButton: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

export default PrimaryButton;

const Container = styled.div`
  border-radius: 6px;
  background-color: ${THEME.COLORS.GREEN[500]};
  border: 2px solid ${THEME.COLORS.GREEN[500]};
  color: #fff;
  display: flex;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 475;
  line-height: 18px;
  padding: 6px;
  position: relative;
  user-select: none;
`;
