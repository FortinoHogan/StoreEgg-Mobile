import axios, {AxiosResponse, all} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {
    fetchProducts,
  fetchProductsError,
  fetchProductsSuccess,
} from '../slices/ProductSlice';
import {getProducts} from '../ProductService';

function* fetchProductsSaga() {
  try {
    const products = getProducts();
    yield put(fetchProductsSuccess(products));
  } catch (e: any) {
    yield put(fetchProductsError(e));
  }
}

export default function* ProductSaga() {
  yield all([takeLatest(fetchProducts.type, fetchProductsSaga)]);
}
