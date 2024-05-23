import {createSlice} from '@reduxjs/toolkit';
import {IProduct} from '../../interfaces/IProduct';

type ProductState = {
  products: IProduct[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProducts: state => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {fetchProducts, fetchProductsSuccess, fetchProductsError} =
  ProductSlice.actions;

export default ProductSlice.reducer;
