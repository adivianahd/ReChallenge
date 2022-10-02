import React from 'react';
import styled from 'styled-components/native';
import {Capitalize} from '../helpers/utils';
import {Text} from './index';

const Detail = styled.View`
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  padding: 12px;
  background-color: #ffffff;
  border-color: #e4e4e4;
  margin-vertical: 8px;
`;

const Row = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  border-bottom-width: 0.5px;
  padding-bottom: 10px;
  border-color: #ddd;
`;

interface Props {
  pokemon: Pokemon;
}

const PokeDetail = ({pokemon}: Props) => {
  const keyValue = [
    {title: 'id', value: pokemon.id.toString()},
    {title: 'name', value: pokemon.name},
    {
      title: 'abilities',
      value: pokemon.abilities.map(a => a.ability.name).join(', '),
    },
    {title: 'height', value: `${pokemon.height / 10}mt`},
    {title: 'Base Experience', value: pokemon.base_experience.toString()},
    {title: 'type', value: pokemon.types[0].type.name},
    {title: 'weight', value: `${pokemon.weight / 10}Kg`},
  ];
  return (
    <Detail>
      {keyValue.map(({title, value}) => (
        <Row>
          <Text class="STRONG">{Capitalize(title)}: </Text>
          <Text class="COMMON">{Capitalize(value)}</Text>
        </Row>
      ))}
    </Detail>
  );
};

export default PokeDetail;
