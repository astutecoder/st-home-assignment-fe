import { FC } from 'react';
import styled from 'styled-components';

const DiscountRibon: FC<{ amount: string }> = ({ amount }) => {
  return <Ribon>- ৳ {amount}</Ribon>;
};

export default DiscountRibon;

const Ribon = styled.div`
  border-top-left-radius: 4px;
  background: linear-gradient(272.89deg, #ffa03b 0%, #f27d00 100%);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Murecho;
  font-size: 12px;
  font-weight: 525;
  line-height: 14px;
  letter-spacing: -0.02em;
  text-align: center;
  padding: 4px 6px 4px 8px;
  position: absolute;
  top: 16px;
  left: -4px;
  transition: left 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 12px;
    height: 12px;
    background: url('/images/ribonConnector.svg') no-repeat;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 100%;
    width: 12px;
    background: url('/images/ribonTail.svg') no-repeat;
  }
`;
