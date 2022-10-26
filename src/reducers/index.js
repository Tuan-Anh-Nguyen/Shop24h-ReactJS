import { combineReducers } from "redux";
import ProductsReducers from "./ProductsReducer";
import { FilterProductsReducer } from "./FilterProductsReducer";

const rootReducers = combineReducers({
     ProductsReducers,
     FilterProductsReducer
})

export default rootReducers;