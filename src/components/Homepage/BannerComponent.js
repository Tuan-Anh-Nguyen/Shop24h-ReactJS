import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPIProducts } from '../../actions/ProductsActions';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BannerComponent() {
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          centerMode: true
     };

     const dispatch = useDispatch();
     const navigate = useNavigate();

     const { products } = useSelector((reduxData) => reduxData.ProductsReducers);

     useEffect(() => {
          dispatch(fetchAPIProducts(8));
     }, [])

     const onBtnShopNowClick = (id) => {
          navigate(`/products/${id}`);
     }

     return (
          <>
               {/* Start banner area */}
               <section className="banner-area">
                    <Slider {...settings}>
                         {
                              products.map((product) => {
                                   return <>
                                        <div className="container">
                                             <div className="row carousel-slider">
                                                  <div className="col-12">
                                                       <div className="row">
                                                            <div className="col-sm-6 item-slider">
                                                                 <div className="row">
                                                                      <div className="col-sm-12">
                                                                           <h2><strong>{product.name}</strong></h2>
                                                                           <p>Discount $50 when paying via QRCode</p>
                                                                           <button className="primary-btn mt-4"
                                                                                style={{ border: 'none' }}
                                                                                onClick={() => onBtnShopNowClick(product._id)}>SHOP NOW</button>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                 <img className="img-slider" src={product.imageUrl} alt="First slide" />
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </>
                              })
                         }
                    </Slider>
               </section>
          </>
     )
}

export default BannerComponent;