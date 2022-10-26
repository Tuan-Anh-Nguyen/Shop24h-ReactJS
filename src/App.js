import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomepageComponents from './components/Homepage/HomepageComponents';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductCheckout from './components/Checkout/ProductCheckout';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import OrderConfirmation from './components/Confirmation/OrderConfirmation';
import LogIn from './components/LogIn/LogIn';
import TrackingOrder from './components/Tracking/TrackingOrder';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomepageComponents />}></Route>
        <Route exact path='/products' element={<Products />}></Route>
        <Route exact path='/products/:productID' element={<ProductDetails />}></Route>
        <Route exact path='/checkout' element={<ProductCheckout />}></Route>
        <Route exact path='/shoppingCart' element={<ShoppingCart />}></Route>
        <Route exact path='/confirmation' element={<OrderConfirmation />}></Route>
        <Route exact path='/login' element={<LogIn />}></Route>
        <Route exact path='/tracking' element={<TrackingOrder />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
