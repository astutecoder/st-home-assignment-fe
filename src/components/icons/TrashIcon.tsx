import { FC } from 'react';
import { SVGIconProps } from '~/types/SVGIcons';

const TrashIcon: FC<SVGIconProps> = ({
  size = 20,
  color = '#fff',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5 2.5V3.33333H3.33333V5H4.16667V15.8333C4.16667 16.2754 4.34226 16.6993 4.65482 17.0118C4.96738 17.3244 5.3913 17.5 5.83333 17.5H14.1667C14.6087 17.5 15.0326 17.3244 15.3452 17.0118C15.6577 16.6993 15.8333 16.2754 15.8333 15.8333V5H16.6667V3.33333H12.5V2.5H7.5ZM5.83333 5H14.1667V15.8333H5.83333V5ZM7.5 6.66667V14.1667H9.16667V6.66667H7.5ZM10.8333 6.66667V14.1667H12.5V6.66667H10.8333Z"
        fill={color}
      />
    </svg>
  );
};

export default TrashIcon;
