import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IProduct} from '../../interfaces/IProduct';

type MyProductState = {
  products: IProduct[];
};

const initialState: MyProductState = {
  products: [],
};

export const MyProductSlice = createSlice({
  name: 'myProduct',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<{ id: number }>) => {
        const index = state.products.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
          state.products.splice(index, 1);
        }
      },
  },
});

export const {addProduct, removeProduct} = MyProductSlice.actions;

const MyProductReducer = MyProductSlice.reducer;
export default MyProductReducer;
