import BannerComponent from "./BannerComponent";
import BrandComponent from "./BrandComponent";
import ExclusiveDealComponent from "./ExclusiveDealComponent";
import FeaturesComponent from "./FeaturesComponent";
import FooterComponent from "../Footer-Header/FooterComponent";
import HeaderComponent from "../Footer-Header/HeaderComponent";
import ProductsComponent from "./ProductsComponent";
import RelatedProductsComponent from "../RelatedProducts/RelatedProductsComponent";
import '../../assets/scss/main.scss';

export default function HomepageComponents() {
     return (
          <>
               {/* Header Area */}
               <HeaderComponent />

               {/* Banner Area */}
               <BannerComponent />

               {/* Features Area */}
               <FeaturesComponent />

               {/* Product Area */}
               <ProductsComponent />

               {/* Exclusive Deal Area */}
               <ExclusiveDealComponent />

               {/* Brand Area */}
               <BrandComponent />

               {/* Related Products Area */}
               <RelatedProductsComponent />

               {/* Footer Area */}
               <FooterComponent />
          </>
     )
}