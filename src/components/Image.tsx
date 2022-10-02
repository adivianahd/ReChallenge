import styled, {css} from 'styled-components/native';

type Size = 'XS' | 'S' | 'M' | 'L';

const XS = css`
  width: 32px;
  height: 32px;
`;

const S = css`
  width: 75px;
  height: 55px;
`;

const M = css`
  background-image: cover;
  width: 100px;
  height: 115px;
`;

const L = css`
  width: 300px;
  height: 280px;
`;

const sizes = {
  XS,
  S,
  M,
  L,
};

interface ImageProps {
  size: Size;
}

export default styled.Image<ImageProps>`
  margin-right: 5px;
  ${(props: ImageProps) => sizes[props.size] || ''}
`;
