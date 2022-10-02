import * as React from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import styled from 'styled-components';
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

const FavoriteWrapper = styled(SharedElement)`
  position: absolute;
  right: 5px;
  top: 5px;
`;
interface CardProps {
  size: string;
  image: {uri: string};
  type: SpecieName;
  name: string;
  id: Pokemon['id'];
  withFavorite?: Boolean;
}

const PokeCard = (props: CardProps) => {
  return (
    <Card size={props.size} color={pokeColor[props.type] || 'white'}>
      {props.withFavorite && (
        <FavoriteWrapper id={`pokemon.${props.id}.favorite`} style={{}}>
          <FavoriteButton id={props.id} />
        </FavoriteWrapper>
      )}
      <SharedElement id={`pokemon.${props.id}.image`}>
        <Image size={props.size} source={props.image} />
      </SharedElement>
      <SharedElement id={`pokemon.${props.id}.name`}>
        <Text class="TITLE">{Capitalize(props.name)}</Text>
      </SharedElement>
    </Card>
  );
};

export default PokeCard;
