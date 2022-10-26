import FooterComponent from "../Footer-Header/FooterComponent";
import HeaderComponent from "../Footer-Header/HeaderComponent";
import BannerCheckout from "./BannerCheckout";
import CheckoutArea from "./CheckoutArea";

export default function ProductCheckout() {
     return (
          <>
               {/* Header Area */}
               <HeaderComponent />

               {/* Banner Area */}
               <BannerCheckout />

               {/* Checkout Area */}
               <CheckoutArea />

               {/* Footer Area */}
               <FooterComponent />
          </>
     )
}