import { ActionTypes, IProduct } from "./types";

export function addProductToStockRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToStockRequest,
    payload: {
      product,
    }
  }
}

export function addProductToStockSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToStockSuccess,
    payload: {
      product,
    }
  }
}

export function addProductToStockFailure(productId: number) {
  return {
    type: ActionTypes.addProductToStockFailure,
    payload: {
      productId,
    }
  }
}

export function removeProductFromStockRequest(productId: number) {
  return {
    type: ActionTypes.removeProductFromStockRequest,
    payload: {
      productId,
    }
  }
}

export function removeProductFromStockSuccess(productId: number) {
  return {
    type: ActionTypes.removeProductFromStockSuccess,
    payload: {
      productId,
    }
  }
}

export function removeProductFromStockFailure(productId: number) {
  return {
    type: ActionTypes.removeProductFromStockFailure,
    payload: {
      productId,
    }
  }
}