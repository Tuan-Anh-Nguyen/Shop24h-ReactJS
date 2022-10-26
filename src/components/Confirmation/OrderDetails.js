export default function OrderDetails() {
     return (
          <>
               <section class="order_details section_gap">
                    <div class="container">
                         <h3 class="title_confirmation">Thank you. Your order has been received.</h3>
                         <div class="row order_d_inner">
                              <div class="col-lg-4">
                                   <div class="details_item">
                                        <h4>Order Information</h4>
                                        <ul class="list">
                                             <li><a href="/confirmation"><span>Order number</span> : 23314</a></li>
                                             <li><a href="/confirmation"><span>Date</span> : Oct 11th 2022</a></li>
                                             <li><a href="/confirmation"><span>Total</span> : 3527.00 USD</a></li>
                                             <li><a href="/confirmation"><span>Payment method</span> : via PayPal</a></li>
                                        </ul>
                                   </div>
                              </div>
                              <div class="col-lg-4">
                                   <div class="details_item">
                                        <h4>Billing Address</h4>
                                        <ul class="list">
                                             <li><a href="/confirmation"><span>Street</span> : Nguyen Dinh Hoan</a></li>
                                             <li><a href="/confirmation"><span>City</span> : Ha Noi</a></li>
                                             <li><a href="/confirmation"><span>Country</span> : Vietnam</a></li>
                                             <li><a href="/confirmation"><span>Postcode </span> : 10000</a></li>
                                        </ul>
                                   </div>
                              </div>
                              <div class="col-lg-4">
                                   <div class="details_item">
                                        <h4>Shipping Address</h4>
                                        <ul class="list">
                                             <li><a href="/confirmation"><span>Street</span> : Nguyen Dinh Hoan</a></li>
                                             <li><a href="/confirmation"><span>City</span> : Ha Noi</a></li>
                                             <li><a href="/confirmation"><span>Country</span> : Vietnam</a></li>
                                             <li><a href="/confirmation"><span>Postcode </span> : 10000</a></li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                         <div class="order_details_table">
                              <h2>Order Details</h2>
                              <div class="table-responsive">
                                   <table class="table">
                                        <thead>
                                             <tr>
                                                  <th scope="col">Product</th>
                                                  <th scope="col">Quantity</th>
                                                  <th scope="col">Total</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr>
                                                  <td>
                                                       <p>IPhone 13 Pro Max</p>
                                                  </td>
                                                  <td>
                                                       <h5>x 01</h5>
                                                  </td>
                                                  <td>
                                                       <p>$1399.00</p>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <p>IPhone 14 Pro Max</p>
                                                  </td>
                                                  <td>
                                                       <h5>x 01</h5>
                                                  </td>
                                                  <td>
                                                       <p>$1999.00</p>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <p>Beats Studio Buds</p>
                                                  </td>
                                                  <td>
                                                       <h5>x 01</h5>
                                                  </td>
                                                  <td>
                                                       <p>$79.00</p>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <h4>Subtotal</h4>
                                                  </td>
                                                  <td>
                                                       <h5 style={{display: 'none'}}>ABC</h5>
                                                  </td>
                                                  <td>
                                                       <p>$3477.00</p>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <h4>Shipping</h4>
                                                  </td>
                                                  <td>
                                                       <h5 style={{display: 'none'}}>ABC</h5>
                                                  </td>
                                                  <td>
                                                       <p>Flat rate: $50.00</p>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <h4>Total</h4>
                                                  </td>
                                                  <td>
                                                       <h5 style={{display: 'none'}}>ABC</h5>
                                                  </td>
                                                  <td>
                                                       <p>$3527.00</p>
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