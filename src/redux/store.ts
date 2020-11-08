import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import fineReducer from './fine-reducer';

export const store = configureStore({
  reducer: {
    fines: fineReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>