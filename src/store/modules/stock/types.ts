export enum ActionTypes {
  addProductToStockRequest = 'ADD_PRODUCT_TO_STOCK_REQUEST',
  addProductToStockSuccess = 'ADD_PRODUCT_TO_STOCK_SUCCESS',
  addProductToStockFailure = 'ADD_PRODUCT_TO_STOCK_FAILURE',
  removeProductFromStockRequest = 'REMOVE_PRODUCT_FROM_STOCK_REQUEST',
  removeProductFromStockSuccess = 'REMOVE_PRODUCT_FROM_STOCK_SUCCESS',
  removeProductFromStockFailure = 'REMOVE_PRODUCT_FROM_STOCK_FAILURE',
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface IStockItem {
  product: IProduct;
}

export interface IStockState {
  items: IStockItem[];
  failedStockCheck: number[];
}