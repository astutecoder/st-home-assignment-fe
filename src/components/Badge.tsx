import { FC } from 'react';
import styled from 'styled-components';

const Badge: FC<{ count: number }> = ({ count }) => {
  return <BadgeContainer>{count}</BadgeContainer>;
};

export default Badge;

const BadgeContainer = styled.div`
  border-radius: 18px;
  background-color: red;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 1;
  padding: 4px;
  width: 18px;
  height: 18px;
`;
