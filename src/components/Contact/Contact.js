import FooterComponent from "../Footer-Header/FooterComponent";
import HeaderComponent from "../Footer-Header/HeaderComponent";
import BannerContact from "./BannerContact";
import ContactArea from "./ContactArea";

export default function Contact() {
     return (
          <>
               {/* Header Area */}
               <HeaderComponent />

               {/* Banner Area */}
               <BannerContact />

               {/* Contact Area */}
               <ContactArea />

               {/* Footer Area */}
               <FooterComponent />
          </>
     )
}