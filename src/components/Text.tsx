import styled, {css} from 'styled-components/native';

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
  font-weight: 800;
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

export default styled.Text<TextProps>`
  ${(props: TextProps) => fontClasses[props.class] || ''}
`;
