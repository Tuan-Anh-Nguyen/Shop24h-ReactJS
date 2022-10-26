import FooterComponent from "../Footer-Header/FooterComponent";
import HeaderComponent from "../Footer-Header/HeaderComponent";
import BannerConfirmation from "./BannerConfirmation";
import OrderDetails from "./OrderDetails";

export default function OrderConfirmation() {
     return (
          <>
               {/* Header Area */}
               <HeaderComponent />

               {/* Banner Area */}
               <BannerConfirmation />

               {/* Order Details Area */}
               <OrderDetails />

               {/* Footer Area */}
               <FooterComponent />
          </>
     )
}