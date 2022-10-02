import * as React from 'react';
import {Capitalize} from '../helpers/utils';
import {FavoriteButton} from './FavoriteButton';
import {Card, Text, Image} from './index';

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

interface CardProps {
  size: string;
  image: {uri: string};
  type: SpecieName;
  name: string;
  id: Pokemon['id'];
}

const PokeCard = (props: CardProps) => {
  return (
    <Card size={props.size} color={pokeColor[props.type] || 'white'}>
      <FavoriteButton id={props.id} />
      <Image size={props.size} source={props.image} />
      <Text class="TITLE">{Capitalize(props.name)}</Text>
    </Card>
  );
};

export default PokeCard;
