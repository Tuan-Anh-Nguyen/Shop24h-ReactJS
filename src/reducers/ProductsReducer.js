import {
     FETCH_API_PRODUCTS_ERROR,
     FETCH_API_PRODUCTS_PENDING,
     FETCH_API_PRODUCTS_SUCCESS,
     GET_PRODUCTS_FILTER,
     GET_PRODUCTS_TYPES,
     GET_PRODUCT_BY_ID,
     PAGINATION_CHANGE
} from "../constants/ProductsActionTypes";

const initialState = {
     products: [],
     productsCategory: [],
     productDetails: [],
     totalPage: 0,
     currentPage: 1,
     types: [],
     pending: false,
     error: null
}

const productsNumber = 6;

export default function ProductsReducers(state = initialState, action) {
     switch (action.type) {
          case FETCH_API_PRODUCTS_PENDING:
               return {
                    ...state,
                    pending: true
               }
          case FETCH_API_PRODUCTS_SUCCESS:
               return {
                    ...state,
                    products: action.data,
                    productsCategory: action.data.slice((state.currentPage - 1) * productsNumber, state.currentPage * productsNumber),
                    totalPage: Math.ceil(action.data.length / productsNumber),
                    pending: false
               }
          case FETCH_API_PRODUCTS_ERROR:
               return {
                    ...state,
                    error: action.error,
                    pending: false
               }
          case PAGINATION_CHANGE:
               return {
                    ...state,
                    currentPage: action.payload
               }
          case GET_PRODUCT_BY_ID:
               return {
                    ...state,
                    productDetails: action.data.product
               }
          case GET_PRODUCTS_FILTER:
               return {
                    ...state,
                    productsCategory: action.data.slice((state.currentPage - 1) * productsNumber, state.currentPage * productsNumber),
                    totalPage: Math.ceil(action.data.length / productsNumber)
               }
          case GET_PRODUCTS_TYPES:
               return {
                    ...state,
                    types: action.data
               }
          default:
               return state;
     }
}