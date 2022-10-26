import FooterComponent from "../Footer-Header/FooterComponent";
import HeaderComponent from "../Footer-Header/HeaderComponent";
import BannerTracking from "./BannerTracking";
import TrackingBox from "./TrackingBox";

export default function TrackingOrder() {
     return (
          <>
               {/* Header Area */}
               <HeaderComponent />

               {/* Banner Area */}
               <BannerTracking />

               {/* Tracking Box Area */}
               <TrackingBox />

               {/* Footer Area */}
               <FooterComponent />
          </>
     )
}