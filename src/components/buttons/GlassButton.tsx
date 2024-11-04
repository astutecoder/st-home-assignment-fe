import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

const GlassButton: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

export default GlassButton;

const Container = styled.div`
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  color: #fff;
  display: flex;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 475;
  line-height: 18px;
  padding: 6px 16px;
  transition: background-color 0.25s ease-in-out;
  user-select: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
