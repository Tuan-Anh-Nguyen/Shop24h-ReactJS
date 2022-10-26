import anh1 from '../../assets/images/footer/i1.jpg';
import anh2 from '../../assets/images/footer/i2.jpg';
import anh3 from '../../assets/images/footer/i3.jpg';
import anh4 from '../../assets/images/footer/i4.jpg';
import anh5 from '../../assets/images/footer/i5.jpg';
import anh6 from '../../assets/images/footer/i6.jpg';
import anh7 from '../../assets/images/footer/i7.jpg';
import anh8 from '../../assets/images/footer/i8.jpg';

export default function FooterComponent() {
     return (
          <>
               {/* start footer Area */}
               <footer className="footer-area section_gap">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-3  col-md-6 col-sm-6">
                                   <div className="single-footer-widget">
                                        <h6>About Us</h6>
                                        <p>Our shop always wants to provide our customers the best services, products and experience.</p>
                                   </div>
                              </div>
                              <div className="col-lg-4  col-md-6 col-sm-6">
                                   <div className="single-footer-widget">
                                        <h6>Newsletter</h6>
                                        <p>Stay update with our latest</p>
                                        <div className="" id="mc_embed_signup">
                                             <form target="_blank" noValidate={true}
                                                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                                  method="get" className="form-inline">
                                                  <div className="d-flex flex-row">
                                                       <input className="form-control" name="EMAIL"
                                                            placeholder="Enter Email"
                                                            required="" type="email" />
                                                       <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                                       <div style={{position: 'absolute', left: '-5000px'}}>
                                                            <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1" type="text" />
                                                       </div>
                                                  </div>
                                                  <div className="info"></div>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-3  col-md-6 col-sm-6">
                                   <div className="single-footer-widget mail-chimp">
                                        <h6 className="mb-20">Instagram Feed</h6>
                                        <ul className="instafeed d-flex flex-wrap">
                                             <li><img src={anh1} alt="" /></li>
                                             <li><img src={anh2} alt="" /></li>
                                             <li><img src={anh3} alt="" /></li>
                                             <li><img src={anh4} alt="" /></li>
                                             <li><img src={anh5} alt="" /></li>
                                             <li><img src={anh6} alt="" /></li>
                                             <li><img src={anh7} alt="" /></li>
                                             <li><img src={anh8} alt="" /></li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-lg-2 col-md-6 col-sm-6">
                                   <div className="single-footer-widget">
                                        <h6>Follow Us</h6>
                                        <p>Let us be social</p>
                                        <div className="footer-social d-flex align-items-center">
                                             <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
                                             <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                             <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                             <a href="/"><i className="fa-brands fa-behance"></i></a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                              <p className="footer-text m-0">
                                   Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                                   All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp;
                                   by Tuan Anh Nguyen
                              </p>
                         </div>
                    </div>
               </footer>
          </>
     )
}