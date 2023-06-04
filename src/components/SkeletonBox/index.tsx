import { CSSProperties } from 'react';
import styled, { keyframes } from 'styled-components';

import { color } from 'constants/common';

const shimmer = keyframes`
 100% {
    transform: translateX(100%);
  }
`;

interface SkeletonBoxProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  radius?: CSSProperties['borderRadius'];
  className?: string;
}

const Component = styled.div<SkeletonBoxProps>`
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-color: ${color.skeleton};
  border-radius: ${(props) => props.radius};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: ${shimmer} 2.5s infinite;
    content: '';
  }
`;

function SkeletonBox({
  width,
  height,
  radius = '10px',
  className: classNameProp,
  ...props
}: SkeletonBoxProps) {
  return (
    <Component {...props} width={width} height={height} radius={radius} className={classNameProp} />
  );
}

export default SkeletonBox;
