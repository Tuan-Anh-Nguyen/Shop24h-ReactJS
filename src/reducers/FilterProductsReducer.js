import {
     FILTER_MAX_PRICE,
     FILTER_MIN_PRICE,
     FILTER_PRODUCT_NAME,
     FILTER_PRODUCT_TYPE
} from "../constants/FilterProductsActionTypes";

const initialState = {
     productName: "",
     minPrice: "",
     maxPrice: "",
     productType: []
}

export function FilterProductsReducer(state = initialState, action) {
     switch (action.type) {
          case FILTER_PRODUCT_NAME:
               return {
                    ...state,
                    productName: action.payload
               }
          case FILTER_MAX_PRICE:
               return {
                    ...state,
                    maxPrice: action.payload
               }
          case FILTER_MIN_PRICE:
               return {
                    ...state,
                    minPrice: action.payload
               }
          case FILTER_PRODUCT_TYPE:
               return {
                    ...state,
                    productType: action.payload
               }
          default:
               return state;
     }
}