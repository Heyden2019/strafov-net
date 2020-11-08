import { FineType } from './../types';
import { createSlice } from "@reduxjs/toolkit";
import { finesAPI } from "../api/api";

type InitialStateType = {
  fine: FineType | null
  isLoading: boolean
  ui: string | null
}

const initialState: InitialStateType = {
    fine: null,
    isLoading: false,
    ui: null
};

export const fineSlice = createSlice({
  name: 'fines',
  initialState,
  reducers: {
    setFine: (state, action) => {
      state.fine = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setUI: (state, action) => {
      state.ui = action.payload
    },
  },
});

export const { setFine, setIsLoading, setUI } = fineSlice.actions;

export const getFine = (ui: string) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true))
        dispatch(setUI(ui))
        const fine = await finesAPI.getFine(ui)
        dispatch(setFine(fine))
        dispatch(setIsLoading(false))
    }
}

export default fineSlice.reducer;