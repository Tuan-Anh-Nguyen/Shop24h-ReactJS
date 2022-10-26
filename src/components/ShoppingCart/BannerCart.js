export default function BannerCart() {
     return (
          <>
               <section className="banner-area organic-breadcrumb">
                    <div className="container">
                         <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                              <div className="col-first">
                                   <h1>Shopping Cart</h1>
                                   <nav className="d-flex align-items-center">
                                        <a href="/">Home<span className="lnr lnr-arrow-right"></span></a>
                                        <a href="/shoppingCart">Cart</a>
                                   </nav>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}