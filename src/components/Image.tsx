import styled, {css} from 'styled-components/native';

type Size = 'S' | 'M' | 'L';
const S = css`
  width: 80px;
  height: 55px;
`;

const M = css`
  background-image: cover;
  width: 150px;
  height: 115px;
`;

const L = css`
  width: 300px;
  height: 280px;
`;

const sizes = {
  S,
  M,
  L,
};

interface ImageProps {
  size: Size;
}

export default styled.Image<ImageProps>`
  ${(props: ImageProps) => sizes[props.size] || ''}
`;
