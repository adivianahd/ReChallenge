import styled, {css} from 'styled-components/native';

type Size = 'S' | 'M';
type Color =
  | 'BLUE'
  | 'GREEN'
  | 'YELLOW'
  | 'WHITE'
  | 'ORANGE'
  | 'PINK'
  | 'RED'
  | 'VIOLET'
  | 'BROWN';

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

const PINK = css`
  background-color: #ffeaf1;
  border-color: #c40f4d;
`;

const RED = css`
  background-color: #ffeceb;
  border-color: #b40d15;
`;

const VIOLET = css`
  background-color: #eaebff;
  border-color: #00027d;
`;

const BROWN = css`
  background-color: #ffeedb;
  border-color: #683502;
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
  PINK,
  RED,
  VIOLET,
  BROWN,
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
