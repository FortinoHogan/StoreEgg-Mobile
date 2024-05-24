import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchProducts,
  fetchProductsError,
  fetchProductsSuccess,
} from '../slices/ProductSlice';
import { getProducts } from '../ProductService';
import { IProduct } from '../../interfaces/IProduct';

function* fetchProductsSaga() {
  try {
    const products: IProduct[] = yield call(getProducts);
    yield put(fetchProductsSuccess(products));
  } catch (e: any) {
    yield put(fetchProductsError(e.message));
  }
}

export default function* ProductSaga() {
  yield takeLatest(fetchProducts.type, fetchProductsSaga);
}
