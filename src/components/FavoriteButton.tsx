import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../redux';
import {toggleFavorite} from '../redux/actions';
import {getIsFavorite} from '../redux/selectors';
import Image from './Image';

interface Props {
  id: Pokemon['id'];
}

export const FavoriteButton = ({id}: Props) => {
  const isFavorite = useSelector(getIsFavorite(id));
  const dispatch = useAppDispatch();

  const Icon = isFavorite
    ? require('../assets/star-filled-32.png')
    : require('../assets/star-outline-32.png');

  const handleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <TouchableOpacity onPress={handleFavorite}>
      <Image size="XS" source={Icon} />
    </TouchableOpacity>
  );
};
