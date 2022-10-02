import styled, {css} from 'styled-components/native';

type Size = 'XS' | 'S' | 'M' | 'L';

const XS = css`
  width: 32px;
  height: 32px;
`;

const S = css`
  width: 72px;
  height: 72px;
`;

const M = css`
  width: 96px;
  height: 96px;
`;

const L = css`
  width: 288px;
  height: 288px;
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
  ${(props: ImageProps) => sizes[props.size] || ''}
`;
