import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type CoinState = {
  amount: number;
};

const initialState: CoinState = {
  amount: 1000,
};

export const CoinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    addCoin: (state, action: PayloadAction<number>) => {
      state.amount += action.payload;
    },
    subtractCoin: (state, action: PayloadAction<number>) => {
      state.amount -= action.payload;
    },
  },
});

export const {addCoin, subtractCoin} = CoinSlice.actions;

const CoinReducer = CoinSlice.reducer;
export default CoinReducer;