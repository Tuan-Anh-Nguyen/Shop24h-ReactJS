import FooterComponent from "../Footer-Header/FooterComponent";
import HeaderComponent from "../Footer-Header/HeaderComponent";
import RelatedProductsComponent from "../RelatedProducts/RelatedProductsComponent";
import ProductInfo from "./ProductInfo";
import BannerProductDetails from "./BannerProductDetails";
import SingleProduct from "./SingleProduct";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID } from "../../actions/ProductsActions";

export default function ProductDetails() {
     const dispatch = useDispatch();

     const { productID } = useParams();

     const { productDetails } = useSelector((data) => data.ProductsReducers);

     useEffect(() => {
          dispatch(getProductByID(productID));
          window.scrollTo(0, 0);
     }, [productID])

     return (
          <>
               {/* Header Area */}
               <HeaderComponent />

               {/* Banner Area */}
               <BannerProductDetails />

               {/* Single Product Area */}
               <SingleProduct detailsProp={productDetails} />

               {/* Product Info */}
               <ProductInfo />

               {/* Related Products Area */}
               <RelatedProductsComponent />

               {/* Footer Area */}
               <FooterComponent />

          </>
     )
}