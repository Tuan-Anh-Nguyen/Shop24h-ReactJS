import anh1 from '../../assets/images/phones/iPhone13ProMax.png';
import anh2 from '../../assets/images/phones/iPhone14ProMax.png';
import anh3 from '../../assets/images/phones/BeatsStudioBuds.png';

export default function CartArea() {
     const onBtnIncreaseClick1 = () => {
          var result = document.getElementById('sst1');
          var sst = result.value;
          if (!isNaN(sst)) {
               result.value++;
               return false;
          }
     }

     const onBtnReduceClick1 = () => {
          var result = document.getElementById('sst1');
          var sst = result.value;
          if (!isNaN(sst) && sst > 0) {
               result.value--;
               return false;
          }
     }

     const onBtnIncreaseClick2 = () => {
          var result = document.getElementById('sst2');
          var sst = result.value;
          if (!isNaN(sst)) {
               result.value++;
               return false;
          }
     }

     const onBtnReduceClick2 = () => {
          var result = document.getElementById('sst2');
          var sst = result.value;
          if (!isNaN(sst) && sst > 0) {
               result.value--;
               return false;
          }
     }

     const onBtnIncreaseClick3 = () => {
          var result = document.getElementById('sst3');
          var sst = result.value;
          if (!isNaN(sst)) {
               result.value++;
               return false;
          }
     }

     const onBtnReduceClick3 = () => {
          var result = document.getElementById('sst3');
          var sst = result.value;
          if (!isNaN(sst) && sst > 0) {
               result.value--;
               return false;
          }
     }

     return (
          <>
               <section className="cart_area">
                    <div className="container">
                         <div className="cart_inner">
                              <div className="table-responsive">
                                   <table className="table">
                                        <thead>
                                             <tr>
                                                  <th scope="col">Product</th>
                                                  <th scope="col">Price</th>
                                                  <th scope="col">Quantity</th>
                                                  <th scope="col">Total</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr>
                                                  <td>
                                                       <div className="media">
                                                            <div className="d-flex">
                                                                 <img className='w-50' src={anh1} alt="" />
                                                            </div>
                                                            <div className="media-body">
                                                                 <p>iPhone 13 Pro Max</p>
                                                            </div>
                                                       </div>
                                                  </td>
                                                  <td>
                                                       <h5>$1399.00</h5>
                                                  </td>
                                                  <td>
                                                       <div className="product_count">
                                                            <input type="text" name="qty" id="sst1" maxLength="12" value="1"
                                                                 title="Quantity:" className="input-text qty" />
                                                            <button onClick={onBtnIncreaseClick1} className="increase items-count"
                                                                 type="button"><i className="lnr lnr-chevron-up"></i></button>
                                                            <button onClick={onBtnReduceClick1} className="reduced items-count"
                                                                 type="button"><i className="lnr lnr-chevron-down"></i></button>
                                                       </div>
                                                  </td>
                                                  <td>
                                                       <h5>$1399.00</h5>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <div className="media">
                                                            <div className="d-flex">
                                                                 <img className='w-50' src={anh2} alt="" />
                                                            </div>
                                                            <div className="media-body">
                                                                 <p>iPhone 14 Pro Max</p>
                                                            </div>
                                                       </div>
                                                  </td>
                                                  <td>
                                                       <h5>$1999.00</h5>
                                                  </td>
                                                  <td>
                                                       <div className="product_count">
                                                            <input type="text" name="qty" id="sst2" maxLength="12" value="1"
                                                                 title="Quantity:" className="input-text qty" />
                                                            <button onClick={onBtnIncreaseClick2} className="increase items-count"
                                                                 type="button"><i className="lnr lnr-chevron-up"></i></button>
                                                            <button onClick={onBtnReduceClick2} className="reduced items-count"
                                                                 type="button"><i className="lnr lnr-chevron-down"></i></button>
                                                       </div>
                                                  </td>
                                                  <td>
                                                       <h5>$1999.00</h5>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <div className="media">
                                                            <div className="d-flex">
                                                                 <img className='w-50' src={anh3} alt="" />
                                                            </div>
                                                            <div className="media-body">
                                                                 <p>Beats Studio Buds</p>
                                                            </div>
                                                       </div>
                                                  </td>
                                                  <td>
                                                       <h5>$79.00</h5>
                                                  </td>
                                                  <td>
                                                       <div className="product_count">
                                                            <input type="text" name="qty" id="sst3" maxLength="12" value="1"
                                                                 title="Quantity:" className="input-text qty" />
                                                            <button onClick={onBtnIncreaseClick3} className="increase items-count"
                                                                 type="button"><i className="lnr lnr-chevron-up"></i></button>
                                                            <button onClick={onBtnReduceClick3} className="reduced items-count"
                                                                 type="button"><i className="lnr lnr-chevron-down"></i></button>
                                                       </div>
                                                  </td>
                                                  <td>
                                                       <h5>$79.00</h5>
                                                  </td>
                                             </tr>
                                             <tr className="bottom_button">
                                                  <td>
                                                       <a className="gray_btn" href="/shoppingCart">Update Cart</a>
                                                  </td>
                                                  <td>

                                                  </td>
                                                  <td>

                                                  </td>
                                                  <td>
                                                       <div className="cupon_text d-flex align-items-center">
                                                            <input type="text" placeholder="Coupon Code" />
                                                            <a className="primary-btn" href="/shoppingCart">Apply</a>
                                                            <a className="gray_btn" href="/shoppingCart">Close Coupon</a>
                                                       </div>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>

                                                  </td>
                                                  <td>

                                                  </td>
                                                  <td>
                                                       <h5>Subtotal</h5>
                                                  </td>
                                                  <td>
                                                       <h5>$3477.00</h5>
                                                  </td>
                                             </tr>
                                             <tr className="shipping_area">
                                                  <td>

                                                  </td>
                                                  <td>

                                                  </td>
                                                  <td>
                                                       <h5>Shipping</h5>
                                                  </td>
                                                  <td>
                                                       <div className="shipping_box">
                                                            <ul className="list">
                                                                 <li><a href="/shoppingCart">Flat Rate: $50.00</a></li>
                                                                 <li><a href="/shoppingCart">Free Shipping</a></li>
                                                                 <li className="active"><a href="/shoppingCart">Local Delivery: $2.00</a></li>
                                                            </ul>
                                                            <h6>Calculate Shipping <i className="fa fa-caret-down" aria-hidden="true"></i></h6>
                                                            <input type="text" placeholder="Country" />
                                                            <input type="text" placeholder="State" />
                                                            <input type="text" placeholder="Postcode/Zipcode" />
                                                            <a className="gray_btn" href="/shoppingCart">Update Details</a>
                                                       </div>
                                                  </td>
                                             </tr>
                                             <tr className="out_button_area">
                                                  <td>

                                                  </td>
                                                  <td>

                                                  </td>
                                                  <td>

                                                  </td>
                                                  <td>
                                                       <div className="checkout_btn_inner d-flex align-items-center">
                                                            <a className="gray_btn" href="/">Continue Shopping</a>
                                                            <a className="primary-btn" href="/checkout">Proceed to checkout</a>
                                                       </div>
                                                  </td>
                                             </tr>
                                        </tbody>
                                   </table>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}