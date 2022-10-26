import logo from '../../assets/images/logo.png';

export default function HeaderComponent() {
     return (
          <header className="header_area sticky-header">
               <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light main_box fixed-top">
                         <div className="container">
                              {/* Brand and toggle get grouped for better mobile display */}
                              <a className="navbar-brand logo_h" href="/"><img src={logo} alt="logo" /></a>
                              <button className="navbar-toggler" type="button" data-toggle="collapse"
                                   data-target="#navbarSupportedContent"
                                   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                   <span className="icon-bar"></span>
                                   <span className="icon-bar"></span>
                                   <span className="icon-bar"></span>
                              </button>
                              {/* Collect the nav links, forms, and other content for toggling */}
                              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                   <ul className="nav navbar-nav menu_nav ml-auto">
                                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                                        <li className="nav-item submenu dropdown">
                                             <a className="nav-link dropdown-toggle" data-toggle="dropdown"
                                                  role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                                             <ul className="dropdown-menu">
                                                  <li className="nav-item"><a className="nav-link" href="/products">Product Category</a></li>
                                                  <li className="nav-item"><a className="nav-link" href="/shoppingCart">Shopping Cart</a></li>
                                                  <li className="nav-item"><a className="nav-link" href="/checkout">Product Checkout</a></li>
                                                  <li className="nav-item"><a className="nav-link" href="/confirmation">Confirmation</a></li>
                                             </ul>
                                        </li>
                                        <li className="nav-item submenu dropdown">
                                             <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                                  aria-expanded="false">Pages</a>
                                             <ul className="dropdown-menu">
                                                  <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                                                  <li className="nav-item"><a className="nav-link" href="/tracking">Tracking</a></li>
                                             </ul>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                                   </ul>
                                   <ul className="nav navbar-nav navbar-right">
                                        <li className="nav-item"><a href="/shoppingCart" className="cart"><span className="ti-bag"></span></a></li>
                                        <li className="nav-item">
                                             <button className="search"><span className="lnr lnr-magnifier" id="search"></span></button>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </nav>
               </div>
               <div className="search_input" id="search_input_box">
                    <div className="container">
                         <form className="d-flex justify-content-between">
                              <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                              <button type="submit" className="btn"></button>
                              <span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
                         </form>
                    </div>
               </div>
          </header>
     )
}