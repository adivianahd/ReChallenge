import * as React from 'react';
import styled from 'styled-components/native';
import {Capitalize} from '../helpers/utils';
import {Text} from './index';

interface DetailProps {
  label: string;
  detail: string;
}

const Detail = styled.View`
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  padding: 12px;
  background-color: #ffffff;
  border-color: #e4e4e4;
  flex-direction: row;
  margin: 8px 24px;

  &.strong: {
    background-color: ·f00;
  }
`;

const PokeDetail = (props: DetailProps) => {
  return (
    <Detail>
      <Text class="STRONG">{Capitalize(props.label)}: </Text>
      <Text class="COMMON">{Capitalize(props.detail)}</Text>
    </Detail>
  );
};

export default PokeDetail;
