import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { addProductToStockRequest, addProductToStockSuccess, removeProductFromStockSuccess, removeProductFromStockRequest } from './actions';
import { ActionTypes } from './types';

type CheckProductStockRequest = ReturnType<typeof addProductToStockRequest>;
type CheckIfProductExistsRequest = ReturnType<typeof removeProductFromStockRequest>;

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  yield put(addProductToStockSuccess(product));
}

function* checkIfProductExists({ payload }: CheckIfProductExistsRequest) {
  const { productId } = payload;

  yield call(api.delete, `products/${productId}`);

  yield put(removeProductFromStockSuccess(productId));
}

export default all([
  takeLatest(ActionTypes.addProductToStockRequest, checkProductStock),
  takeLatest(ActionTypes.removeProductFromStockRequest, checkIfProductExists),
]);