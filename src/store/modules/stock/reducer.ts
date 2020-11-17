import { Reducer } from "redux";
import produce from 'immer';

import { ActionTypes, IStockState } from "./types";

const INITIAL_STATE: IStockState = {
  items: [],
  failedStockCheck: [],
}

const stock: Reducer<IStockState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addProductToStockSuccess: {
        const { product } = action.payload;

        const productInStockIndex = draft.items.findIndex(item => 
          item.product.id === product.id,  
        );

        if (productInStockIndex >= 0) {
          draft.items[productInStockIndex].product = product;
        } else {
          draft.items.push({
            product,
          });
        }

        break;
      }
      case ActionTypes.addProductToStockFailure: {
        draft.failedStockCheck.push(action.payload.productId);

        break;
      }
      case ActionTypes.removeProductFromStockSuccess: {
        const { productId } = action.payload;

        draft.items = draft.items.filter(item => item.product.id !== productId);

        break;
      }
      default: {
        return draft;
      }
    }
  });
}

export default stock;