import * as React from 'react';
import {Card, Text, Image} from './index';

interface CardProps {
  size: string;
  image: {uri: string};
  type: string;
  name: string;
}

const pokeColor = {
  water: 'BLUE',
  ice: 'BLUE',
  grass: 'GREEN',
  bug: 'GREEN',
  electric: 'YELLOW',
  ground: 'YELLOW',
  normal: 'WHITE',
  stell: 'WHITE',
  fire: 'ORANGE',
  psychic: 'PINK',
  fairy: 'PINK',
  flying: 'PINK',
  fighting: 'RED',
  poison: 'VIOLET',
  dragon: 'VIOLET',
  ghost: 'VIOLET',
  rock: 'BROWN',
  dark: 'BROWN',
};

const PokeCard = (props: CardProps) => {
  return (
    <Card size={props.size} color={pokeColor[props.type] || 'white'}>
      <Image size={props.size} source={props.image} />
      <Text class="TITLE">{props.name}</Text>
    </Card>
  );
};

export default PokeCard;
