import anh9 from '../../assets/images/phones/AppleAirPods2.png';
import anh11 from '../../assets/images/phones/AppleAirPodsPro.png';
import anh15 from '../../assets/images/phones/ApplePowerbeatsPro.png';
import anh16 from '../../assets/images/phones/BeatsStudioBuds.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAPIProducts } from '../../actions/ProductsActions';
import { useNavigate } from 'react-router-dom';

export default function ProductsComponent() {
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const { products } = useSelector((reduxData) => reduxData.ProductsReducers);

     useEffect(() => {
          dispatch(fetchAPIProducts(8));
     }, [])

     const onBtnDetailsClick = (id) => {
          navigate(`/products/${id}`);
     }

     const onBtnAir2DetailsClick = (id) => {
          navigate(`/products/${id}`);
     }

     const onBtnBeatsBudsDetailsClick = (id) => {
          navigate(`/products/${id}`);
     }

     const onBtnAirProDetailsClick = (id) => {
          navigate(`/products/${id}`);
     }

     const onBtnPowerbeatsDetailsClick = (id) => {
          navigate(`/products/${id}`);
     }

     return (
          <>
               {/* start product Area */}
               <section className="owl-carousel active-product-area section_gap pt-0">
                    {/* single product slide */}
                    <div className="single-product-slider">
                         <div className="container">
                              <div className="row justify-content-center">
                                   <div className="col-lg-6 text-center">
                                        <div className="section-title">
                                             <h1>Best Sellers</h1>
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   {/* single product */}
                                   {
                                        products.map((product) => {
                                             return <>
                                                  <div className="col-lg-3 col-md-6">
                                                       <div className="single-product">
                                                            <img className="img-fluid" src={product.imageUrl} alt="" />
                                                            <div className="product-details ps-4">
                                                                 <h6>{product.name}</h6>
                                                                 <div className="price">
                                                                      <h6>${product.promotionPrice}.00</h6>
                                                                      <h6 className="l-through">${product.buyPrice}.00</h6>
                                                                 </div>
                                                                 <div className="prd-bottom">
                                                                      <a href="/" className="social-info">
                                                                           <span className="ti-bag"></span>
                                                                           <p className="hover-text">Add To Bag</p>
                                                                      </a>
                                                                      <a className="social-info"
                                                                           onClick={() => onBtnDetailsClick(product._id)}
                                                                           style={{ cursor: 'pointer' }}>
                                                                           <span className="lnr lnr-sync"></span>
                                                                           <p className="hover-text">details</p>
                                                                      </a>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </>
                                        })
                                   }
                              </div>
                         </div>
                    </div>
                    {/* single product slide */}
                    <div className="single-product-slider">
                         <div className="container">
                              <div className="row justify-content-center">
                                   <div className="col-lg-6 text-center">
                                        <div className="section-title">
                                             <h1>Coming Products</h1>
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   {/* single product */}
                                   <div className="col-lg-3 col-md-6">
                                        <div className="single-product">
                                             <img className="img-fluid" src={anh9} alt="" />
                                             <div className="product-details ps-4">
                                                  <h6>Apple AirPods 2</h6>
                                                  <div className="price">
                                                       <h6>$89.00</h6>
                                                       <h6 className="l-through">$99.00</h6>
                                                  </div>
                                                  <div className="prd-bottom">
                                                       <a href="/" className="social-info">
                                                            <span className="ti-bag"></span>
                                                            <p className="hover-text">Add To Bag</p>
                                                       </a>
                                                       <a className="social-info"
                                                            onClick={() => onBtnAir2DetailsClick("6335d263e06b91e37eca9207")}
                                                            style={{ cursor: 'pointer' }}>
                                                            <span className="lnr lnr-sync"></span>
                                                            <p className="hover-text">Details</p>
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   {/* single product */}
                                   <div className="col-lg-3 col-md-6">
                                        <div className="single-product">
                                             <img className="img-fluid" src={anh16} alt="" />
                                             <div className="product-details ps-4">
                                                  <h6>Beats Studio Buds</h6>
                                                  <div className="price">
                                                       <h6>$79.00</h6>
                                                       <h6 className="l-through">$89.00</h6>
                                                  </div>
                                                  <div className="prd-bottom">
                                                       <a href="/" className="social-info">
                                                            <span className="ti-bag"></span>
                                                            <p className="hover-text">Add To Bag</p>
                                                       </a>
                                                       <a className="social-info"
                                                            onClick={() => onBtnBeatsBudsDetailsClick("6335d318e06b91e37eca9215")}
                                                            style={{ cursor: 'pointer' }}>
                                                            <span className="lnr lnr-sync"></span>
                                                            <p className="hover-text">Details</p>
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   {/* single product */}
                                   <div className="col-lg-3 col-md-6">
                                        <div className="single-product">
                                             <img className="img-fluid" src={anh11} alt="" />
                                             <div className="product-details ps-4">
                                                  <h6>Apple AirPods Pro</h6>
                                                  <div className="price">
                                                       <h6>$209.00</h6>
                                                       <h6 className="l-through">$219.00</h6>
                                                  </div>
                                                  <div className="prd-bottom">
                                                       <a href="/" className="social-info">
                                                            <span className="ti-bag"></span>
                                                            <p className="hover-text">Add To Bag</p>
                                                       </a>
                                                       <a className="social-info"
                                                            onClick={() => onBtnAirProDetailsClick("6335d28be06b91e37eca920b")}
                                                            style={{ cursor: 'pointer' }}>
                                                            <span className="lnr lnr-sync"></span>
                                                            <p className="hover-text">Details</p>
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   {/* single product */}
                                   <div className="col-lg-3 col-md-6">
                                        <div className="single-product">
                                             <img className="img-fluid" src={anh15} alt="" />
                                             <div className="product-details ps-4">
                                                  <h6>Apple Powerbeats Pro</h6>
                                                  <div className="price">
                                                       <h6>$209.00</h6>
                                                       <h6 className="l-through">$219.00</h6>
                                                  </div>
                                                  <div className="prd-bottom">
                                                       <a href="/" className="social-info">
                                                            <span className="ti-bag"></span>
                                                            <p className="hover-text">Add To Bag</p>
                                                       </a>
                                                       <a className="social-info"
                                                            onClick={() => onBtnPowerbeatsDetailsClick("6335d2ffe06b91e37eca9213")}
                                                            style={{ cursor: 'pointer' }}>
                                                            <span className="lnr lnr-sync"></span>
                                                            <p className="hover-text">Details</p>
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}