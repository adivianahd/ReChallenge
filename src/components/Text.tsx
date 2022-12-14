import styled, {css} from 'styled-components/native';
import {Text as RNText} from 'react-native';

type FontClass = 'TITLE' | 'COMMON' | 'MUTED' | 'STRONG';

const TITLE = css`
  font-size: 30px;
  font-weight: 700;
  color: #333333;
`;

const COMMON = css`
  font-size: 18px;
  font-weight: 400;
  color: #333333;
`;

const MUTED = css`
  font-size: 18px;
  font-weight: 600;
  color: #919191;
`;

const STRONG = css`
  font-weight: 700;
  font-size: 18px;
  color: #333333;
`;

const fontClasses = {
  TITLE,
  COMMON,
  MUTED,
  STRONG,
};

interface TextProps {
  class: FontClass;
}

export default styled(RNText)<TextProps>`
  ${(props: TextProps) => fontClasses[props.class] || ''}
`;
