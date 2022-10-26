import { Grid, Box, TextField, Stack, Pagination, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FilterMaxPrice, FilterMinPrice, FilterProductName, FilterProductType } from '../../actions/FilterProductsActions';
import { fetchAPIProductTypes, getProductsFilter, paginationAction } from '../../actions/ProductsActions';

export default function FilterProduct() {
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const { productsCategory, totalPage, currentPage, types } = useSelector((reduxData) => reduxData.ProductsReducers);
     const { productName, minPrice, maxPrice, productType } = useSelector((data) => data.FilterProductsReducer);

     const [checkbox, setCheckbox] = useState("");

     useEffect(() => {
          dispatch(getProductsFilter(productName, minPrice, maxPrice, productType));
          dispatch(fetchAPIProductTypes());
     }, [currentPage]);

     const handlePageChange = (event, value) => {
          dispatch(paginationAction(value));
     }

     const onBtnDetailsClick = (id) => {
          navigate(`/products/${id}`);
     }

     const inputProductNameChange = (event) => {
          dispatch(FilterProductName(event.target.value));
     }

     const inputMinPriceChange = (event) => {
          dispatch(FilterMinPrice(event.target.value));
     }

     const inputMaxPriceChange = (event) => {
          dispatch(FilterMaxPrice(event.target.value));
     }

     const handleCheck = (value) => {
          setCheckbox(prev => {
               const isChecked = checkbox.includes(value);
               if (isChecked) {
                    return checkbox.filter(item => item !== value)
               } else {
                    return [...prev, value];
               }
          })
     }

     const onBtnFilterClick = () => {
          dispatch(getProductsFilter(productName, minPrice, maxPrice, checkbox));
          dispatch(FilterProductType(checkbox));
     }

     return (
          <>
               <div className="container mt-5 mb-5">
                    <div className="row">
                         <div className="col-xl-3 col-lg-4 col-md-5">
                              <div className="sidebar-filter mt-50">
                                   <div className="top-filter-head">Categories</div>
                                   <div className="common-filter">
                                        <div className="head">Products</div>
                                        <Box
                                             noValidate
                                             autoComplete="off"
                                        >
                                             <TextField label="Product Name" variant="outlined" className='w-100'
                                                  value={productName} onChange={inputProductNameChange} />
                                        </Box>
                                   </div>
                              </div>
                              <div className="sidebar-filter mt-50">
                                   <div className="top-filter-head">Product Brands</div>
                                   <div className="common-filter">
                                        <div className="head">Brands</div>
                                        <form action="/">
                                             <ul>
                                                  {
                                                       types.map((element, index) => {
                                                            return <li className="filter-list" key={index}>
                                                                 <input className="pixel-radio"
                                                                      type="checkbox"
                                                                      value={element.name}
                                                                      onChange={() => handleCheck(element._id)}
                                                                      checked={checkbox.includes(element._id)} />
                                                                 <label>{element.name}</label>
                                                            </li>
                                                       })
                                                  }
                                             </ul>
                                        </form>
                                   </div>
                              </div>
                              <div className="sidebar-filter mt-50">
                                   <div className="top-filter-head">Price</div>
                                   <div className="common-filter">
                                        <div className="head">Price Range ($)</div>
                                        <Grid container mt={2}>
                                             <Box
                                                  noValidate
                                                  autoComplete="off"
                                             >
                                                  <TextField label="From" variant="outlined" style={{ width: "45%" }}
                                                       value={minPrice} onChange={inputMinPriceChange} />
                                                  &nbsp; &nbsp;
                                                  <TextField label="To" variant="outlined" style={{ width: "45%" }}
                                                       value={maxPrice} onChange={inputMaxPriceChange} />
                                             </Box>
                                        </Grid>
                                        <Button className='primary-btn mt-4 w-100' variant='contained'
                                             onClick={onBtnFilterClick}>Filter</Button>
                                   </div>
                              </div>
                         </div>
                         {/* Products Category */}
                         <div className="col-xl-9 col-lg-8 col-md-7" style={{ marginTop: '5rem' }}>
                              {/* Start Best Seller */}
                              <section className="lattest-product-area pb-40 category-list">
                                   <div className="row">
                                        {/* single product */}
                                        {
                                             productsCategory.length > 0 ? productsCategory.map((product) => {
                                                  return <>
                                                       <div className="col-lg-4 col-md-6">
                                                            <div className="single-product">
                                                                 <img className="img-fluid w-75 ps-2" src={product.imageUrl} alt="" />
                                                                 <div className="product-details ps-4">
                                                                      <h6>{product.name}</h6>
                                                                      <div className="price">
                                                                           <h6>${product.promotionPrice}.00</h6>
                                                                           <h6 className="l-through">${product.buyPrice}.00</h6>
                                                                      </div>
                                                                      <div className="prd-bottom">
                                                                           <a href="/products" className="social-info">
                                                                                <span className="ti-bag"></span>
                                                                                <p className="hover-text">add to bag</p>
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
                                                  :
                                                  <div className='row' style={{ paddingTop: '2rem' }}>
                                                       <div className='col-lg-12 col-md-12 text-center'>
                                                            <h5><b>No items found.</b></h5>
                                                       </div>
                                                  </div>
                                        }
                                   </div>
                              </section>
                              {/* End Best Seller */}
                              {/* Start Filter Bar */}
                              {
                                   totalPage > 0
                                        ?
                                        <div className="filter-bar d-flex flex-wrap align-items-center justify-content-end mt-4">
                                             <div className="pagination">
                                                  <Stack spacing={2}>
                                                       <Pagination
                                                            count={totalPage}
                                                            defaultPage={currentPage}
                                                            onChange={handlePageChange}
                                                            color="warning" />
                                                  </Stack>
                                             </div>
                                        </div>
                                        :
                                        <div style={{display: 'none'}}></div>
                              }

                              {/* End Filter Bar */}
                         </div>
                    </div>
               </div>
          </>
     )
}