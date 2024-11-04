import styled from 'styled-components';
import { THEME } from '~/utils/constants/theme';

export const ProductCardContainer = styled.div`
  /* width: 300px; */
  max-width: 100%;
  padding: 4px;
  border-radius: 8px;
  transition: box-shadow 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);

    .media-container::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.33);
    }

    .thumbnail {
      transform: scale(1.1);
    }

    .wishlist-icon-wrapper {
      display: block;
      z-index: 1;
    }

    .action-btns {
      display: flex;
    }
  }
`;

export const ProductCardMediaContainer = styled.div`
  background-color: #ece7e9;
  border-radius: 8px;
  position: relative;
  width: 100%;
  /* height: 300px; */
  overflow: hidden;

  @media screen and (max-width: 576px) {
    height: 150px;
    display: flex;
    justify-content: center;
  }
`;

export const ProductThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 3s 0.5s ease-in-out;

  @media screen and (max-width: 576px) {
    height: 150px;
    width: fit-content;
  }
`;

export const WishlistIconWrapper = styled.div`
  content: '';
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0.7;
  transition: opacity 0.25s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const ActionButtons = styled.div`
  display: none;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  z-index: 1;
`;

export const ProductInfoContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
`;

export const ProductNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ProductBrand = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${THEME.COLORS.DARK[700]};
`;

export const ProductTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 525;
  line-height: 22px;
  font-weight: 500;
  color: ${THEME.COLORS.DARK[900]};
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;

export const CurrentPrice = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
  line-height: 22px;
  color: ${THEME.COLORS.PRIMARY[500]};

  display: flex;
  gap: 3px;
  align-items: center;

  .fw-525 {
    font-weight: 525;
  }
  .fw-475 {
    font-weight: 475;
  }
`;

export const ComparedPrice = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -1px;
  color: ${THEME.COLORS.DARK[600]};
  white-space: nowrap;
  position: relative;

  &::after {
    content: '';

    position: absolute;
    top: 58%;
    left: -2px;
    right: -2px;
    height: 1px;
    background-color: ${THEME.COLORS.DARK[600]};
  }
`;
