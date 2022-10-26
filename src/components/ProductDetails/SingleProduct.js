export default function SingleProduct({ detailsProp }) {
     const onBtnIncreaseClick = () => {
          var result = document.getElementById('sst');
          var sst = result.value;
          if (!isNaN(sst)) {
               result.value++;
               return false;
          }
     }

     const onBtnReduceClick = () => {
          var result = document.getElementById('sst');
          var sst = result.value;
          if (!isNaN(sst) && sst > 0) {
               result.value--;
               return false;
          }
     }

     return (
          <>
               <div className="product_image_area">
                    <div className="container">
                         <div className="row s_product_inner">
                              <div className="col-lg-5">
                                   <div className="s_Product_carousel">
                                        <div className="single-prd-item">
                                             <img className="img-fluid w-75" src={detailsProp.imageUrl} alt="" />
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-5 offset-lg-1">
                                   <div className="s_product_text" style={{marginTop: '-2rem'}}>
                                        <h3>{detailsProp.name}</h3>
                                        <h2>${detailsProp.promotionPrice}.00</h2>
                                        <ul className="list">
                                             <li><a>Availability: In Stock</a></li>
                                        </ul>
                                        <p>{detailsProp.description}</p>
                                        <div className="product_count">
                                             <label>Quantity:</label>
                                             <input type="text" name="qty" id="sst" maxLength="12" value="1" title="Quantity:" className="input-text qty" />
                                             <button onClick={onBtnIncreaseClick} className="increase items-count"
                                                  type="button"><i className="lnr lnr-chevron-up"></i></button>
                                             <button onClick={onBtnReduceClick} className="reduced items-count"
                                                  type="button"><i className="lnr lnr-chevron-down"></i></button>
                                        </div>
                                        <div className="card_area d-flex align-items-center">
                                             <a className="primary-btn" href="/">Add to Cart</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}