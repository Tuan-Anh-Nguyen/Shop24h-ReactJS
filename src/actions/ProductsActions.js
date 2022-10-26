import {
     FETCH_API_PRODUCTS_ERROR,
     FETCH_API_PRODUCTS_PENDING,
     FETCH_API_PRODUCTS_SUCCESS,
     GET_PRODUCTS_FILTER,
     GET_PRODUCTS_TYPES,
     GET_PRODUCT_BY_ID,
     PAGINATION_CHANGE
} from "../constants/ProductsActionTypes"

export function paginationAction(value) {
     return {
          type: PAGINATION_CHANGE,
          payload: value
     }
}

export const fetchAPIProducts = (limit) => async dispatch => {
     var requestOptions = {
          method: 'GET',
          redirect: 'follow'
     }
     await dispatch({
          type: FETCH_API_PRODUCTS_PENDING
     });
     try {
          const res = await fetch("http://localhost:8000/products/?limit=" + limit, requestOptions);
          const data = await res.json();
          // console.log(data);
          return dispatch({
               type: FETCH_API_PRODUCTS_SUCCESS,
               data: data.products
          })
     }
     catch (err) {
          return dispatch({
               type: FETCH_API_PRODUCTS_ERROR,
               error: err
          })
     }
}

export const getProductByID = (id) => async dispatch => {
     var requestOptions = {
          method: 'GET',
          redirect: 'follow'
     }

     try {
          const response = await fetch("http://localhost:8000/products/" + id, requestOptions);
          const data = await response.json();
          console.log(data);
          return dispatch({
               type: GET_PRODUCT_BY_ID,
               data: data
          });
     } catch (err) {
          console.log(err);
     }
}

export const getProductsFilter = (productName, minPrice, maxPrice, checkbox) => async dispatch => {
     var requestOptions = {
          method: 'GET',
          redirect: 'follow'
     }
     try {
          const res = await fetch(
               `http://localhost:8000/products/?productName=${productName}&minPromoPrice=${minPrice}&maxPromoPrice=${maxPrice}&type=${checkbox}`, requestOptions
          )
          const data = await res.json();
          // console.log(data.products);
          if (checkbox === "undefined" || checkbox.length === 0) {
               return dispatch({
                    type: GET_PRODUCTS_FILTER,
                    data: data.products
               })
          } else {
               return dispatch({
                    type: GET_PRODUCTS_FILTER,
                    data: data.products.filter(items => checkbox.includes(items.type))
               })
          }
     } catch (err) {
          console.log(err);
     }
}

export const fetchAPIProductTypes = () => async dispatch => {
     var requestOptions = {
          method: 'GET',
          redirect: 'follow'
     }
     try {
          const res = await fetch("http://localhost:8000/productType", requestOptions);
          const data = await res.json();
          // console.log(data.productTypes);
          return dispatch({
               type: GET_PRODUCTS_TYPES,
               data: data.productTypes
          })
     } catch (err) {
          console.log(err);
     }
}