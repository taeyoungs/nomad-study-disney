import { CSSProperties, PropsWithChildren, ElementType } from 'react';
import styled from 'styled-components';

import { color } from 'constants/common';

import { FontSize, LineHeight } from './contants';

type Typography = keyof typeof FontSize;

type FontWeightType = 400 | 500 | 600 | 700;

interface TextBaseProps {
  display?: CSSProperties['display'];
  lineHeight?: CSSProperties['lineHeight'];
  letterSpacing?: CSSProperties['letterSpacing'];
  weight?: FontWeightType;
  size?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  align?: CSSProperties['textAlign'];
  whiteSpace?: CSSProperties['whiteSpace'];
  wordBreak?: CSSProperties['wordBreak'];
  typography?: Typography;
  as?: ElementType;
  className?: string;
}

const Component = styled.p<TextBaseProps>`
  display: ${(props) => props.display};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  margin: 0;
  font-family: 'Dancing Script', cursive;
  white-space: ${(props) => props.whiteSpace};
  word-break: ${(props) => props.wordBreak};
`;

const Text = ({
  lineHeight: lineHeightProp,
  size: sizeProp,
  color: colorProp = color.black,
  as = 'p',
  typography = 'regular',
  children,
  ...props
}: PropsWithChildren<TextBaseProps>) => {
  const size = sizeProp ?? FontSize[typography];
  const lineHeight = lineHeightProp ?? LineHeight[typography];

  return (
    <Component as={as} size={size} lineHeight={lineHeight} color={colorProp} {...props}>
      {children}
    </Component>
  );
};

export default Text;
