import card from '../../assets/images/product/card.jpg';

export default function CheckoutArea() {
     return (
          <>
               <section className="checkout_area section_gap">
                    <div className="container">
                         <div className="returning_customer">
                              <div className="check_title">
                                   <h2>Returning Customer? <a href="/checkout">Click here to login</a></h2>
                              </div>
                              <p>If you have shopped with us before, please enter your details in the boxes below. If you are a
                                   new customer, please proceed to the Billing & Shipping section.</p>
                              <form className="row contact_form" noValidate="novalidate">
                                   <div className="col-md-6 form-group p_star">
                                        <input type="text" className="form-control" id="name" name="name" placeholder='Username or Email' />
                                   </div>
                                   <div className="col-md-6 form-group p_star">
                                        <input type="password" className="form-control" id="password" name="password" placeholder='Password' />
                                   </div>
                                   <div className="col-md-12 form-group">
                                        <button type="submit" value="submit" className="primary-btn">login</button>
                                        <div className="creat_account">
                                             <input type="checkbox" id="f-option" name="selector" />
                                             <label>Remember me</label>
                                        </div>
                                        <a className="lost_pass" href="/checkout">Lost your password?</a>
                                   </div>
                              </form>
                         </div>
                         <div className="cupon_area">
                              <div className="check_title">
                                   <h2>Have a coupon? <a href="/checkout">Click here to enter your code</a></h2>
                              </div>
                              <input type="text" placeholder="Enter coupon code" />
                              <a className="tp_btn" href="/checkout">Apply Coupon</a>
                         </div>
                         <div className="billing_details">
                              <div className="row">
                                   <div className="col-lg-8">
                                        <h3>Billing Details</h3>
                                        <form className="row contact_form" noValidate="novalidate">
                                             <div className="col-md-6 form-group p_star">
                                                  <input type="text" className="form-control" id="first" name="name" placeholder='First Name' />
                                             </div>
                                             <div className="col-md-6 form-group p_star">
                                                  <input type="text" className="form-control" id="last" name="name" placeholder='Last Name' />
                                             </div>
                                             <div className="col-md-12 form-group">
                                                  <input type="text" className="form-control" id="company" name="company" placeholder="Company Name" />
                                             </div>
                                             <div className="col-md-6 form-group p_star">
                                                  <input type="text" className="form-control" id="number" name="number" placeholder='Phone Number' />
                                             </div>
                                             <div className="col-md-6 form-group p_star">
                                                  <input type="text" className="form-control" id="email" name="compemailany" placeholder='Email Address' />
                                             </div>
                                             <div className="col-md-12 form-group p_star">
                                                  <select className="nice-select country_select">
                                                       <option value="select">Select Country</option>
                                                       <option value="VN">Vietnam</option>
                                                       <option value="USA">USA</option>
                                                       <option value="UK">United Kingdom</option>
                                                  </select>
                                             </div>
                                             <div className="col-md-12 form-group p_star">
                                                  <input type="text" className="form-control" id="add1" name="add1" placeholder='Address Line 01' />
                                             </div>
                                             <div className="col-md-12 form-group p_star">
                                                  <input type="text" className="form-control" id="add2" name="add2" placeholder='Address Line 02' />
                                             </div>
                                             <div className="col-md-12 form-group p_star">
                                                  <input type="text" className="form-control" id="city" name="city" placeholder='District' />
                                             </div>
                                             <div className="col-md-12 form-group p_star">
                                                  <input type="text" className="form-control" id="city" name="city" placeholder='Town/City' />
                                             </div>
                                             <div className="col-md-12 form-group">
                                                  <input type="text" className="form-control" id="zip" name="zip"
                                                       placeholder="Postcode/ZIP" />
                                             </div>
                                             <div className="col-md-12 form-group">
                                                  <div className="creat_account">
                                                       <input type="checkbox" id="f-option2" name="selector" />
                                                       <label>Create an account?</label>
                                                  </div>
                                             </div>
                                             <div className="col-md-12 form-group">
                                                  <div className="creat_account">
                                                       <h3>Shipping Details</h3>
                                                       <input type="checkbox" id="f-option3" name="selector" />
                                                       <label>Ship to a different address?</label>
                                                  </div>
                                                  <textarea className="form-control" name="message" id="message" rows="1"
                                                       placeholder="Order Notes"></textarea>
                                             </div>
                                        </form>
                                   </div>
                                   <div className="col-lg-4">
                                        <div className="order_box">
                                             <h2>Your Order</h2>
                                             <ul className="list mb-4">
                                                  <li><a href="/checkout">Product <span>Total</span></a></li>
                                                  <li><a href="/checkout">IPhone 14 Pro Max <span className="middle">x 01</span> <span className="last">$1999.00</span></a></li>
                                                  <li><a href="/checkout">IPhone 13 Pro Max <span className="middle">x 01</span> <span className="last">$1399.00</span></a></li>
                                                  <li><a href="/checkout">Beats Studio Buds<span className="middle">x 01</span> <span className="last">$79.00</span></a></li>
                                             </ul>
                                             <ul className="list list_2 mb-4">
                                                  <li><a href="/checkout">Subtotal <span>$3477.00</span></a></li>
                                                  <li><a href="/checkout">Shipping <span>Flat rate: $50.00</span></a></li>
                                                  <li><a href="/checkout">Total <span>$3527.00</span></a></li>
                                             </ul>
                                             <div className="payment_item mb-4">
                                                  <div className="radion_btn">
                                                       <input type="radio" id="f-option5" name="selector" />
                                                       <label>Check payments</label>
                                                       <div className="check"></div>
                                                  </div>
                                                  <p>Please send a check to Store Name, Store Street, Store Town, Store State
                                                       / County, Store Postcode.</p>
                                             </div>
                                             <div className="payment_item active mb-4">
                                                  <div className="radion_btn">
                                                       <input type="radio" id="f-option6" name="selector" />
                                                       <label>Paypal </label>
                                                       <img src={card} alt="" />
                                                       <br />
                                                       <div className="check"></div>
                                                       <div>
                                                            <p>Pay via PayPal; you can pay with your credit card if you don’t
                                                                 have a PayPal account.</p>
                                                       </div>
                                                       <a className="primary-btn" href="/checkout">Proceed to Paypal</a>
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