import brand1 from '../../assets/images/brand/1.png';
import brand2 from '../../assets/images/brand/2.png';
import brand3 from '../../assets/images/brand/3.png';
import brand4 from '../../assets/images/brand/4.png';
import brand5 from '../../assets/images/brand/5.png';

export default function BrandComponent() {
     return (
          <>
               {/* Start brand Area */}
               <section className="brand-area section_gap">
                    <div className="container">
                         <div className="row">
                              <a className="col single-img" href="/">
                                   <img className="img-fluid d-block mx-auto" src={brand1} alt="" />
                              </a>
                              <a className="col single-img" href="/">
                                   <img className="img-fluid d-block mx-auto" src={brand2} alt="" />
                              </a>
                              <a className="col single-img" href="/">
                                   <img className="img-fluid d-block mx-auto" src={brand3} alt="" />
                              </a>
                              <a className="col single-img" href="/">
                                   <img className="img-fluid d-block mx-auto" src={brand4} alt="" />
                              </a>
                              <a className="col single-img" href="/">
                                   <img className="img-fluid d-block mx-auto" src={brand5} alt="" />
                              </a>
                         </div>
                    </div>
               </section>
          </>
     )
}