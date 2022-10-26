import FooterComponent from "../Footer-Header/FooterComponent";
import HeaderComponent from "../Footer-Header/HeaderComponent";
import RelatedProductsComponent from "../RelatedProducts/RelatedProductsComponent";
import BannerProducts from "./BannerProducts";
import FilterProduct from "./FilterProducts";

export default function Products() {
     return (
          <>
               {/* Header Area */}
               <HeaderComponent />

               {/* Banner Area */}
               <BannerProducts />

               {/* Filter Products */}
               <FilterProduct />

               {/* Related Products Area */}
               <RelatedProductsComponent />

               {/* Footer Area */}
               <FooterComponent />
          </>
     )
}