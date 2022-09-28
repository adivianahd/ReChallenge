import styled, {css} from 'styled-components/native';

type FontClass = 'XL' | 'XXL';

const XXL = css`
  font-size: 30px;
  color: #0f0;
`;

const XL = css`
  font-size: 25px;
  color: #f00;
`;

const fontClasses = {
  XL,
  XXL,
};

interface TextProps {
  class: FontClass;
}

export default styled.Text<TextProps>`
  font-weight: 800;
  ${(props: TextProps) => fontClasses[props.class] || ''}
`;
