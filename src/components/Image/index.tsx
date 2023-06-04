import { CSSProperties } from 'react';
import styled from 'styled-components';

import { Text } from 'components';

import { color } from 'constants/common';
import { CombineElementPropsWithoutRef } from 'types/utils';

interface ImageBaseProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  radius: CSSProperties['borderRadius'];
  image?: string;
}

const Component = styled.img<ImageBaseProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.radius}px;
`;

const ImageFallback = styled.div<ImageBaseProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.radius}px;
  background-color: ${color.skeleton};
  display: flex;
  justify-content: center;
  align-items: center;
`;

type ImageProps = CombineElementPropsWithoutRef<'img', ImageBaseProps>;

function Image({ width, height, image, radius, ...props }: ImageProps) {
  return image ? (
    <Component src={image} width={width} height={height} radius={radius} {...props} />
  ) : (
    <ImageFallback width={width} height={height} radius={radius}>
      <Text as="div">No image</Text>
    </ImageFallback>
  );
}

export default Image;
