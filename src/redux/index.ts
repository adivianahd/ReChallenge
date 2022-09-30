import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {pokemonReducer} from './reducers';

export const store = configureStore({
  reducer: {
    pokemonReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 3600},
      serializableCheck: {warnAfter: 3600},
    }),
});

export const useAppDispatch: () => AppDispatch = useDispatch;

declare global {
  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;
  type Action = (
    dispatch: AppDispatch,
    getState: () => RootState,
  ) => Promise<void>;
}
