import styled, {css} from 'styled-components/native';

type Size = 'S' | 'M';
type Color = 'BLUE' | 'GREEN' | 'YELLOW' | 'WHITE' | 'ORANGE';

const S = css`
  flex-direction: row;
`;

const M = css`
  flex-direction: row;
`;

const BLUE = css`
  background-color: #e7f0ff;
  border-color: #0250c9;
`;

const GREEN = css`
  background-color: #f3fbf0;
  border-color: #036002;
`;

const YELLOW = css`
  background-color: #fafaf0;
  border-color: #ffcc00;
`;

const WHITE = css`
  background-color: #ffffff;
  border-color: #e4e4e4;
`;

const ORANGE = css`
  background-color: #fff5df;
  border-color: #c6480c;
`;

const sizes = {
  S,
  M,
};

const colors = {
  BLUE,
  GREEN,
  YELLOW,
  WHITE,
  ORANGE,
};

interface CardProps {
  size: Size;
  color: Color;
}

export default styled.View<CardProps>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  padding: 12px;
  ${(props: CardProps) => sizes[props.size] || ''}
  ${(props: CardProps) => colors[props.color] || WHITE}
`;
