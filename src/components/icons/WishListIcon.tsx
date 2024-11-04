import { FC } from 'react';
import { SVGIconProps } from '~/types/SVGIcons';

const WishListIcon: FC<SVGIconProps> = ({
  size = 28,
  color = '#fff',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 9.66103L12.3118 7.37917C11.5072 6.29167 10.2293 5.59928 8.82 5.59928C6.42994 5.59928 4.43334 7.57646 4.43334 10.0942C4.43334 11.2724 4.61864 12.3545 4.94013 13.3594L4.94446 13.3729C5.7185 15.8499 7.32256 17.8959 9.12276 19.4604C10.9152 21.0183 12.7861 21.9969 13.9264 22.3957C13.9323 22.3963 13.9394 22.397 13.9476 22.3975C13.9635 22.3986 13.9812 22.3993 14 22.3993C14.0188 22.3993 14.0365 22.3986 14.0524 22.3975C14.0606 22.397 14.0677 22.3964 14.0736 22.3957C15.2139 21.9969 17.0848 21.0183 18.8772 19.4604C20.6774 17.8959 22.2816 15.8499 23.0556 13.3729L23.0598 13.3594C23.3813 12.3545 23.5667 11.2724 23.5667 10.0942C23.5667 7.57646 21.5701 5.59928 19.18 5.59928C17.7707 5.59928 16.4928 6.29167 15.6882 7.37917L14 9.66103ZM12.4844 4.65577C11.4409 3.92749 10.1762 3.49928 8.82 3.49928C5.23834 3.49928 2.33334 6.44872 2.33334 10.0942C2.33334 11.4982 2.555 12.7959 2.94 13.9993C4.78334 19.8982 10.465 23.4257 13.2767 24.3931C13.6733 24.5347 14.3267 24.5347 14.7233 24.3931C17.535 23.4257 23.2167 19.8982 25.06 13.9993C25.445 12.7959 25.6667 11.4982 25.6667 10.0942C25.6667 6.44872 22.7617 3.49928 19.18 3.49928C17.8238 3.49928 16.5591 3.92749 15.5156 4.65577C14.9343 5.06149 14.4216 5.56035 14 6.13018C13.5784 5.56035 13.0657 5.06149 12.4844 4.65577Z"
        fill={color}
      />
    </svg>
  );
};

export default WishListIcon;
