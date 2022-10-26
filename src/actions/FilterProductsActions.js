import {
     FILTER_MAX_PRICE,
     FILTER_MIN_PRICE,
     FILTER_PRODUCT_NAME,
     FILTER_PRODUCT_TYPE
} from "../constants/FilterProductsActionTypes";

export function FilterProductName(value) {
     return {
          type: FILTER_PRODUCT_NAME,
          payload: value
     }
}

export function FilterMinPrice(value) {
     return {
          type: FILTER_MIN_PRICE,
          payload: value
     }
}

export function FilterMaxPrice(value) {
     return {
          type: FILTER_MAX_PRICE,
          payload: value
     }
}

export function FilterProductType(value) {
     return {
          type: FILTER_PRODUCT_TYPE,
          payload: value
     }
}