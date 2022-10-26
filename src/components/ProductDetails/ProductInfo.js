import anh1 from '../../assets/images/product/review-1.png';
import anh2 from '../../assets/images/product/review-2.png';
import anh3 from '../../assets/images/product/review-3.png';

export default function ProductInfo() {
     return (
          <>
               <section className="product_description_area">
                    <div className="container">
                         <ul className="nav nav-tabs" id="myTab" role="tablist">
                              <li className="nav-item">
                                   <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                                        aria-selected="true">Introduction</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                                        aria-selected="false">Specification</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
                                        aria-selected="false">Comments</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
                                        aria-selected="false">Reviews</a>
                              </li>
                         </ul>
                         <div className="tab-content" id="myTabContent">
                              <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                   <p>Online shopping through app has become very popular these days because people find it
                                        convenient and easy to shop from their home or office. People can save their time and
                                        energy by purchasing products online with some discounts. The offers on the internet
                                        can be easily compared, and the buyer can buy the product according to their favorable
                                        conditions like price, quality and other discounts for their individual needs. The next
                                        generation of mobile phone “SMART Phones”, has opened the new paths of using specially
                                        designed apps. We have most of the companies making use of this trend of getting their
                                        company products available on their website for sale, to be accessed via the app. They
                                        are also coming out with some great offers to attract customers to download and use
                                        their apps more rather than accessing their website.</p>
                              </div>
                              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                   <div className="table-responsive">
                                        <table className="table">
                                             <tbody>
                                                  <tr>
                                                       <td>
                                                            <h5>Width</h5>
                                                       </td>
                                                       <td>
                                                            <h5>3.05 inches (77.6mm)</h5>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                       <td>
                                                            <h5>Height</h5>
                                                       </td>
                                                       <td>
                                                            <h5>6.33 inches (160.7mm)</h5>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                       <td>
                                                            <h5>Depth</h5>
                                                       </td>
                                                       <td>
                                                            <h5>0.31 inches (7.85mm)</h5>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                       <td>
                                                            <h5>Weight</h5>
                                                       </td>
                                                       <td>
                                                            <h5>240gr</h5>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                       <td>
                                                            <h5>Display</h5>
                                                       </td>
                                                       <td>
                                                            <h5>6.7 inches all‑screen OLED display, Super Retina XDR display</h5>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                       <td>
                                                            <h5>Chip</h5>
                                                       </td>
                                                       <td>
                                                            <h5>A16 Bionic Chip</h5>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                       <td>
                                                            <h5>Camera</h5>
                                                       </td>
                                                       <td>
                                                            <h5>Pro Camera System</h5>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                       <td>
                                                            <h5>Video Recording</h5>
                                                       </td>
                                                       <td>
                                                            <h5>4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps</h5>
                                                       </td>
                                                  </tr>
                                             </tbody>
                                        </table>
                                   </div>
                              </div>
                              <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                   <div className="row">
                                        <div className="col-lg-6">
                                             <div className="comment_list">
                                                  <div className="review_item">
                                                       <div className="media">
                                                            <div className="d-flex">
                                                                 <img src={anh1} alt="" />
                                                            </div>
                                                            <div className="media-body">
                                                                 <h4>Stephen Curry</h4>
                                                                 <h5>11th Oct, 2022 at 03:23pm</h5>
                                                                 <a className="reply_btn" href="/productDetails">Reply</a>
                                                            </div>
                                                       </div>
                                                       <p>If you already have an iPad and Mac the iPhone is really a no brainer.
                                                            The solid ecosystem is what makes apple products so great and all the
                                                            products work very well together. You’ll also benefit greatly from
                                                            the large screen and really great battery life of the Max and the
                                                            cameras are awesome too.</p>
                                                  </div>
                                                  <div className="review_item reply">
                                                       <div className="media">
                                                            <div className="d-flex">
                                                                 <img src={anh2} alt="" />
                                                            </div>
                                                            <div className="media-body">
                                                                 <h4>Klay Thompson</h4>
                                                                 <h5>11th Oct, 2022 at 03:23pm</h5>
                                                                 <a className="reply_btn" href="/productDetails">Reply</a>
                                                            </div>
                                                       </div>
                                                       <p>Cameras are insane. In the late 2010’s, someone out there would have
                                                            paid $2,000 just for the camera.</p>
                                                  </div>
                                                  <div className="review_item">
                                                       <div className="media">
                                                            <div className="d-flex">
                                                                 <img src={anh3} alt="" />
                                                            </div>
                                                            <div className="media-body">
                                                                 <h4>Luka Doncic</h4>
                                                                 <h5>11th Oct, 2022 at 03:23pm</h5>
                                                                 <a className="reply_btn" href="/productDetails">Reply</a>
                                                            </div>
                                                       </div>
                                                       <p>I came from an S22 Ultra. The iPhone 14 PM sweeps it under the rug,
                                                            but that is always going to be a matter of preference.</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-6">
                                             <div className="review_box">
                                                  <h4>Post a comment</h4>
                                                  <form className="row contact_form" id="contactForm" noValidate="novalidate">
                                                       <div className="col-md-12">
                                                            <div className="form-group">
                                                                 <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
                                                            </div>
                                                       </div>
                                                       <div className="col-md-12">
                                                            <div className="form-group">
                                                                 <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
                                                            </div>
                                                       </div>
                                                       <div className="col-md-12">
                                                            <div className="form-group">
                                                                 <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
                                                            </div>
                                                       </div>
                                                       <div className="col-md-12">
                                                            <div className="form-group">
                                                                 <textarea className="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
                                                            </div>
                                                       </div>
                                                       <div className="col-md-12 text-right">
                                                            <button type="submit" value="submit" className="btn primary-btn">Submit Now</button>
                                                       </div>
                                                  </form>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                                   <div className="row">
                                        <div className="col-lg-6">
                                             <div className="row total_rate">
                                                  <div className="col-6">
                                                       <div className="box_total">
                                                            <h5>Overall</h5>
                                                            <h4>5.0</h4>
                                                            <h6>(03 Reviews)</h6>
                                                       </div>
                                                  </div>
                                                  <div className="col-6">
                                                       <div className="rating_list">
                                                            <h3>Based on 3 Reviews</h3>
                                                            <ul className="list">
                                                                 <li><a href="/productDetails">5 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                                      className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
                                                                 <li><a href="/productDetails">4 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                                      className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
                                                                 <li><a href="/productDetails">3 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                                      className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
                                                                 <li><a href="/productDetails">2 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                                      className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
                                                                 <li><a href="/productDetails">1 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                                      className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
                                                            </ul>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="review_list">
                                                  <div className="review_item">
                                                       <div className="media">
                                                            <div className="d-flex">
                                                                 <img src={anh1} alt="" />
                                                            </div>
                                                            <div className="media-body">
                                                                 <h4>Stephen Curry</h4>
                                                                 <i className="fa fa-star"></i>
                                                                 <i className="fa fa-star"></i>
                                                                 <i className="fa fa-star"></i>
                                                                 <i className="fa fa-star"></i>
                                                                 <i className="fa fa-star"></i>
                                                            </div>
                                                       </div>
                                                       <p>If you already have an iPad and Mac the iPhone is really a no brainer.
                                                            The solid ecosystem is what makes apple products so great and all the
                                                            products work very well together. You’ll also benefit greatly from
                                                            the large screen and really great battery life of the Max and the
                                                            cameras are awesome too.</p>
                                                  </div>
                                                  <div className="review_item">
                                                       <div className="media">
                                                            <div className="d-flex">
                                                                 <img src={anh2} alt="" />
                                                            </div>
                                                            <div className="media-body">
                                                                 <h4>Klay Thompson</h4>
                                                                 <i className="fa fa-star"></i>
                                                                 <i className="fa fa-star"></i>
                                                                 <i className="fa fa-star"></i>
                                                                 <i className="fa fa-star"></i>
                                                                 <i className="fa fa-star"></i>
                                                            </div>
                                                       </div>
                                                       <p>Cameras are insane. In the late 2010’s, someone out there would have
                                                            paid $2,000 just for the camera.</p>
                                                  </div>
                                                  <div className="review_item">
                                                       <div className="media">
                                                            <div className="d-flex">
                                                                 <img src={anh3} alt="" />
                                                            </div>
                                                            <div className="media-body">
                                                                 <h4>Luka Doncic</h4>
                                                                 <i className="fa fa-star"></i>
                                                                 <i className="fa fa-star"></i>
                                                                 <i className="fa fa-star"></i>
                                                                 <i className="fa fa-star"></i>
                                                                 <i className="fa fa-star"></i>
                                                            </div>
                                                       </div>
                                                       <p>I came from an S22 Ultra. The iPhone 14 PM sweeps it under the rug,
                                                            but that is always going to be a matter of preference.</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-6">
                                             <div className="review_box">
                                                  <h4>Add a Review</h4>
                                                  <p>Your Rating:</p>
                                                  <ul className="list">
                                                       <li><a href="/productDetails"><i className="fa fa-star"></i></a></li>
                                                       <li><a href="/productDetails"><i className="fa fa-star"></i></a></li>
                                                       <li><a href="/productDetails"><i className="fa fa-star"></i></a></li>
                                                       <li><a href="/productDetails"><i className="fa fa-star"></i></a></li>
                                                       <li><a href="/productDetails"><i className="fa fa-star"></i></a></li>
                                                  </ul>
                                                  <p>Outstanding</p>
                                                  <form className="row contact_form" id="contactForm" noValidate="novalidate">
                                                       <div className="col-md-12">
                                                            <div className="form-group">
                                                                 <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
                                                            </div>
                                                       </div>
                                                       <div className="col-md-12">
                                                            <div className="form-group">
                                                                 <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
                                                            </div>
                                                       </div>
                                                       <div className="col-md-12">
                                                            <div className="form-group">
                                                                 <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
                                                            </div>
                                                       </div>
                                                       <div className="col-md-12">
                                                            <div className="form-group">
                                                                 <textarea className="form-control" name="message" id="message" rows="1"></textarea>
                                                            </div>
                                                       </div>
                                                       <div className="col-md-12 text-right">
                                                            <button type="submit" value="submit" className="primary-btn">Submit Now</button>
                                                       </div>
                                                  </form>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section >
          </>
     )
}