import { FC } from 'react';
import { SVGIconProps } from '~/types/SVGIcons';

const PlusIcon: FC<SVGIconProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3.24999C9.5449 3.24999 9.17595 3.61894 9.17595 4.07407V9.17592H4.0741C3.61897 9.17592 3.25002 9.54487 3.25002 9.99999C3.25002 10.4551 3.61897 10.8241 4.0741 10.8241H9.17595V15.9259C9.17595 16.381 9.5449 16.75 10 16.75C10.4551 16.75 10.8241 16.381 10.8241 15.9259V10.8241H15.926C16.3811 10.8241 16.75 10.4551 16.75 9.99999C16.75 9.54487 16.3811 9.17592 15.926 9.17592H10.8241V4.07407C10.8241 3.61894 10.4551 3.24999 10 3.24999Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusIcon;
