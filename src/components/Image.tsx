import { FC, ImgHTMLAttributes, useRef } from 'react';
import styled from 'styled-components';

const Image: FC<
  { src: string; retries?: number } & ImgHTMLAttributes<HTMLImageElement>
> = ({ src, retries = 3, ...props }) => {
  const ref = useRef<HTMLImageElement>(null);
  const imageLoadRetries = useRef(retries);

  const handleImageError = () => {
    if (imageLoadRetries.current > 0) {
      setTimeout(() => {
        if (ref.current) {
          ref.current.src = src;
        }
      }, 1000);
      imageLoadRetries.current -= 1;
    } else {
      if (ref.current) {
        ref.current.src = 'https://fakeimg.pl/300x300/ece7e9/?text=+';
      }
    }
  };

  return <Img ref={ref} src={src} onError={handleImageError} {...props} />;
};

export default Image;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
