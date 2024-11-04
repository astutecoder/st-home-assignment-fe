import { FC } from 'react';
import { SVGIconProps } from '~/types/SVGIcons';

const MinusIcon: FC<SVGIconProps> = ({
  size = 20,
  color = '#fff',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"></path>
    </svg>
  );
};

export default MinusIcon;
