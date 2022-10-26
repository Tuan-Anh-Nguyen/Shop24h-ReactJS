import FooterComponent from "../Footer-Header/FooterComponent";
import HeaderComponent from "../Footer-Header/HeaderComponent";
import BannerCart from "./BannerCart";
import CartArea from "./CartArea";

export default function ShoppingCart() {
     return (
          <>
               {/* Header Area */}
               <HeaderComponent />

               {/* Banner Area */}
               <BannerCart />

               {/* Cart Area */}
               <CartArea />

               {/* Footer Area */}
               <FooterComponent />
          </>
     )
}