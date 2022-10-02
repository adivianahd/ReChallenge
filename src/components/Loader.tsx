import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 10px;
  align-items: center;
  justify-content: center;
`;

const Loader = () => (
  <Wrapper>
    <ActivityIndicator />
  </Wrapper>
);

export default Loader;
