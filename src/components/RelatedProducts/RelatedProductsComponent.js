import c5 from '../../assets/images/category/c5.jpg';
import anh1 from '../../assets/images/phones/SamsungGalaxyBuds2.png';
import anh2 from '../../assets/images/phones/AppleBeatsFitProTrueWireless.png';
import { useNavigate } from 'react-router-dom';

export default function RelatedProductsComponent() {
     const navigate = useNavigate();

     const onBtnProduct1Click = (id) => {
          navigate(`/products/${id}`);
     }

     const onBtnProduct2Click = (id) => {
          navigate(`/products/${id}`);
     }

     return (
          <>
               {/* Start related-product Area */}
               <section className="related-product-area section_gap_bottom">
                    <div className="container">
                         <div className="row justify-content-center">
                              <div className="col-lg-6 text-center">
                                   <div className="section-title">
                                        <h1>Deals of the Week</h1>
                                        <h6>These deals will help you to make up your mind easily!</h6>
                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              <div className="col-lg-9">
                                   <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-20">
                                             <div className="single-related-product d-flex justify-content-center">
                                                  <img src={anh1} alt="" />
                                                  <div className="desc d-flex align-items-center">
                                                       <a className="title"
                                                            onClick={() => onBtnProduct2Click("6335d34be06b91e37eca9217")}
                                                            style={{cursor: 'pointer'}}>
                                                            Samsung Galaxy Buds 2</a>
                                                       <div className="price">
                                                            <h6>$109.00</h6>
                                                            <h6 className="l-through">$119.00</h6>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-20">
                                             <div className="single-related-product d-flex justify-content-center">
                                                  <img src={anh2} alt="" />
                                                  <div className="desc d-flex align-items-center">
                                                       <a className="title"
                                                            onClick={() => onBtnProduct1Click("6335d2a6e06b91e37eca920d")}
                                                            style={{cursor: 'pointer'}}>
                                                            Apple Beats Fit Pro True Wireless</a>
                                                       <div className="price">
                                                            <h6>$239.00</h6>
                                                            <h6 className="l-through">$249.00</h6>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-3">
                                   <div className="ctg-right">
                                        <a href="/" target="_blank">
                                             <img className="img-fluid d-block mx-auto" src={c5} alt="" />
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}