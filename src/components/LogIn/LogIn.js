import FooterComponent from "../Footer-Header/FooterComponent";
import HeaderComponent from "../Footer-Header/HeaderComponent";
import BannerLogin from "./BannerLogin";
import LogInBox from "./LogInBox";

export default function LogIn() {
     return (
          <>
               {/* Header Area */}
               <HeaderComponent />

               {/* Banner Area */}
               <BannerLogin />

               {/* LogIn Box */}
               <LogInBox />

               {/* Footer Area */}
               <FooterComponent />
          </>
     )
}