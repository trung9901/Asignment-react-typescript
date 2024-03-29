import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductType } from '../../types/Product'

type ProductPageProps = {
    products: ProductType[]
}

const ProductPage = ({ products }: ProductPageProps) => {
    return (
        <div>
            <div className="main-index my-3">
                <link rel="preload" as="script" href="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/search_filter.js?1646907197259" />
                <div className="section wrap_background">

                    <div className="container ">
                        <div className="bg_collection section">
                            <div className="row">
                                <aside className="dqdt-sidebar sidebar left-content col-lg-3 col-md-4 col-sm-4">
                                    <div className="wrap_background_aside asidecollection">

                                        <div className="filter-content aside-filter">

                                            <div className="filter-container">

                                                {/* Lọc Thương hiệu */}
                                                <aside className="aside-item filter-vendor f-left">
                                                    <div className="aside-title">
                                                        <h2 className="title-filter title-head margin-top-0"><span>Thương hiệu</span></h2>
                                                    </div>
                                                    <div className="aside-content margin-top-0 filter-group">
                                                        <ul>
                                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                                <span>
                                                                    <label htmlFor="filter-apple">
                                                                        <input type="checkbox" id="filter-apple" data-group="Hãng" data-field="vendor" data-text="Apple" defaultValue="(Apple)" data-operator="OR" />
                                                                        <i className="fa" />
                                                                        Apple
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                                <span>
                                                                    <label htmlFor="filter-samsung">
                                                                        <input type="checkbox" id="filter-samsung" data-group="Hãng" data-field="vendor" data-text="Samsung" defaultValue="(Samsung)" data-operator="OR" />
                                                                        <i className="fa" />
                                                                        Samsung
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                                <span>
                                                                    <label htmlFor="filter-xiaomi">
                                                                        <input type="checkbox" id="filter-xiaomi" data-group="Hãng" data-field="vendor" data-text="Xiaomi" defaultValue="(Xiaomi)" data-operator="OR" />
                                                                        <i className="fa" />
                                                                        Xiaomi
                                                                    </label>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </aside>
                                                {/* End Lọc Thương hiệu */}
                                                {/* Lọc giá */}
                                                <aside className="aside-item filter-price f-left">
                                                    <div className="aside-title">
                                                        <h2 className="title-filter title-head margin-top-0"><span>Khoảng giá</span></h2>
                                                    </div>
                                                    <div className="aside-content margin-top-0 filter-group content_price">
                                                        <ul>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label data-filter="1-000-000d" htmlFor="filter-duoi-1-000-000d">
                                                                        <input type="checkbox" id="filter-duoi-1-000-000d" data-group="Khoảng giá" data-field="price_min" data-text="Dưới 1.000.000đ" defaultValue="(<1000000)" data-operator="OR" />
                                                                        <i className="fa" />
                                                                        Dưới 1 triệu
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label data-filter="2-000-000d" htmlFor="filter-1-000-000d-2-000-000d">
                                                                        <input type="checkbox" id="filter-1-000-000d-2-000-000d" data-group="Khoảng giá" data-field="price_min" data-text="1.000.000đ - 2.000.000đ" defaultValue="(>=1000000 AND <=2000000)" data-operator="OR" />
                                                                        <i className="fa" />
                                                                        Từ 1 đến 2 triệu
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label data-filter="4-000-000d" htmlFor="filter-2-000-000d-4-000-000d">
                                                                        <input type="checkbox" id="filter-2-000-000d-4-000-000d" data-group="Khoảng giá" data-field="price_min" data-text="2.000.000đ - 4.000.000đ" defaultValue="(>=2000000 AND <=4000000)" data-operator="OR" />
                                                                        <i className="fa" />
                                                                        Từ 2 đến 4 triệu
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label data-filter="6-000-000d" htmlFor="filter-4-000-000d-6-000-000d">
                                                                        <input type="checkbox" id="filter-4-000-000d-6-000-000d" data-group="Khoảng giá" data-field="price_min" data-text="4.000.000đ - 6.000.000đ" defaultValue="(>=4000000 AND <=6000000)" data-operator="OR" />
                                                                        <i className="fa" />
                                                                        Từ 4 đến 6 triệu
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label data-filter="8-000-000d" htmlFor="filter-6-000-000d-8-000-000d">
                                                                        <input type="checkbox" id="filter-6-000-000d-8-000-000d" data-group="Khoảng giá" data-field="price_min" data-text="6.000.000đ - 8.000.000đ" defaultValue="(>=6000000 AND <=8000000)" data-operator="OR" />
                                                                        <i className="fa" />
                                                                        Từ 6 đến 8 triệu
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label data-filter="10-000-000d" htmlFor="filter-8-000-000d-10-000-000d">
                                                                        <input type="checkbox" id="filter-8-000-000d-10-000-000d" data-group="Khoảng giá" data-field="price_min" data-text="8.000.000đ - 10.000.000đ" defaultValue="(>=8000000 AND <=10000000)" data-operator="OR" />
                                                                        <i className="fa" />
                                                                        Từ 8 đến 10 triệu
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label data-filter="20-000-000d" htmlFor="filter-10-000-000d-20-000-000d">
                                                                        <input type="checkbox" id="filter-10-000-000d-20-000-000d" data-group="Khoảng giá" data-field="price_min" data-text="10.000.000đ - 20.000.000đ" defaultValue="(>=10000000 AND <=20000000)" data-operator="OR" />
                                                                        <i className="fa" />
                                                                        Từ 10 đến 20 triệu
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label data-filter="40-000-000d" htmlFor="filter-20-000-000d-40-000-000d">
                                                                        <input type="checkbox" id="filter-20-000-000d-40-000-000d" data-group="Khoảng giá" data-field="price_min" data-text="20.000.000đ - 40.000.000đ" defaultValue="(>=20000000 AND <=40000000)" data-operator="OR" />
                                                                        <i className="fa" />
                                                                        Từ 20 đến 40 triệu
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label data-filter="50-000-000d" htmlFor="filter-40-000-000d-50-000-000d">
                                                                        <input type="checkbox" id="filter-40-000-000d-50-000-000d" data-group="Khoảng giá" data-field="price_min" data-text="40.000.000đ - 50.000.000đ" defaultValue="(>=40000000 AND <=50000000)" data-operator="OR" />
                                                                        <i className="fa" />
                                                                        Từ 40 đến 50 triệu
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label data-filter="50-000-000d" htmlFor="filter-tren50-000-000d">
                                                                        <input type="checkbox" id="filter-tren50-000-000d" data-group="Khoảng giá" data-field="price_min" data-text="Trên 50.000.000đ" defaultValue="(>50000000)" data-operator="OR" />
                                                                        <i className="fa" />
                                                                        Trên 50 triệu
                                                                    </label>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </aside>
                                                {/* End Lọc giá */}

                                            </div>
                                        </div>
                                    </div>
                                </aside>
                                <div className="main_container collection col-lg-9 col-md-12 col-sm-12">

                                    <div className="category-products products">
                                        <div className="section">
                                            <div className="sortPagiBar">
                                                <div className="sort-cate clearfix">
                                                    <div className="sort-cate-left">
                                                        <ul className='d-flex gap-3'>
                                                            <li className="btn-quick-sort alpha-asc">
                                                                <a href="javascript:;" title="Tên A-Z"><i />Tên A-Z</a>
                                                            </li>
                                                            <li className="btn-quick-sort alpha-desc">
                                                                <a href="javascript:;" title="Tên Z-A"><i />Tên Z-A</a>
                                                            </li>
                                                            <li className="btn-quick-sort price-asc">
                                                                <a href="javascript:;" title="Giá thấp đến cao"><i />Giá thấp đến cao</a>
                                                            </li>
                                                            <li className="btn-quick-sort price-desc">
                                                                <a href="javascript:;" title="Giá cao xuống thấp"><i />Giá cao xuống thấp</a>
                                                            </li>
                                                            <li className="btn-quick-sort created-desc">
                                                                <a href="javascript:;" title="Mới nhất"><i />Mới nhất</a>
                                                            </li>
                                                            <li className="btn-quick-sort created-asc">
                                                                <a href="javascript:;" title="Cũ nhất"><i />Cũ nhất</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <section className="products-view products-view-grid collection_reponsive list_hover_pro">
                                            <div className="row">
                                                {products?.map((product, index) => {
                                                    return (<div className="col-6 col-md-3 col-lg-3 product-col" key={index}>
                                                        <div className="item_product_main">
                                                            <form action="/cart/add" method="post" className="variants product-action wishItem" data-cart-form data-id="product-actions-21989403" encType="multipart/form-data">
                                                                <div className="product-thumbnail sale " data-sale="Giảm  
5% 
">
                                                                    <NavLink className="image_thumb" to={`${product._id}`}> <picture>
                                                                        <source media="(min-width: 1200px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                        <source media="(min-width: 992px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                        <source media="(min-width: 569px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                        <source media="(max-width: 480px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                        <source media="(max-width: 375px)" srcSet="//bizweb.dktcdn.net/thumb/compact/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                        <img width={240} height={240} src="https://bizweb.dktcdn.net/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" data-src="https://bizweb.dktcdn.net/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="Samsung Galaxy Note 21" className="lazyload img-responsive center-block loaded" data-was-processed="true" />
                                                                    </picture></NavLink>
                                                                    {/* <a className="image_thumb" href="/samsung-galaxy-note-21" title="Samsung Galaxy Note 21" style={{ height: 185 }}>

                                                                    </a> */}


                                                                    <div className="product-action">
                                                                        <div className="group_action">
                                                                            <a href="javascript:void(0)" className="setWishlist btn-views" data-wish="samsung-galaxy-note-21" tabIndex={0} title="Thêm vào yêu thích">
                                                                                <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"> <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z" /> </svg>
                                                                            </a>
                                                                            <a href="javascript:void(0)" className="setCompare btn-views" data-compare="samsung-galaxy-note-21" data-type="Smartphone" tabIndex={0} title="Thêm vào so sánh">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}> <path d="M9,15H7c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v12C10,14.6,9.6,15,9,15z" /> <path d="M1,9h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-4C0,9.4,0.4,9,1,9z" /> <path d="M15,5h-2c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V6C16,5.4,15.6,5,15,5z" /> </svg>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h3 className="product-name"><NavLink to={`${product._id}`}>{product.name}</NavLink></h3>
                                                                    <div className="price-box">
                                                                        <span className="price">{product.price}</span>
                                                                        <span className="compare-price">30.500.000₫</span>
                                                                        <div className="action-cart">
                                                                            <input type="hidden" name="variantId" defaultValue={47262129} />
                                                                            <button className="btn-buy btn-views add_to_cart " title="Mua ngay">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25}>
                                                                                    <circle cx={7} cy={17} r={2} />
                                                                                    <circle cx={15} cy={17} r={2} />
                                                                                    <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
								 V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
								 C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z" />
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>)
                                                })}



                                            </div>
                                            <div className="section pagenav d-none">
                                                <nav className="clearfix relative nav_pagi w_100">
                                                    <ul className="pagination clearfix">
                                                        <li className="page-item disabled"><a className="page-link" href="#"><i className="icon icon-left" /></a></li>
                                                        <li className="active page-item disabled"><a className="page-link" href="javascript:;">1</a></li>
                                                        <li className="page-item disabled"><a className="page-link" href="#"><i className="icon icon-right" /></a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </section>
                                    </div>
                                    <div id="open-filters" className="open-filters d-lg-none d-xl-none">
                                        <svg className="i-bar-white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={20} height={20} x={0} y={0} viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <g>
                                                        <path d="M85.333,170.667c39.765,0,73.173-27.193,82.645-64h322.688c11.782,0,21.333-9.551,21.333-21.333     C512,73.551,502.449,64,490.667,64H167.979c-9.472-36.807-42.88-64-82.645-64C38.202,0,0,38.202,0,85.333     S38.202,170.667,85.333,170.667z M85.333,42.667c23.567,0,42.667,19.099,42.667,42.667S108.901,128,85.333,128     s-42.667-19.099-42.667-42.667S61.766,42.667,85.333,42.667z" fill="#ffffff" data-original="#000000" style={{}} className />
                                                        <path d="M426.667,341.333c-39.765,0-73.173,27.193-82.645,64H21.333C9.551,405.333,0,414.885,0,426.667S9.551,448,21.333,448     h322.688c9.472,36.807,42.88,64,82.645,64C473.798,512,512,473.798,512,426.667S473.798,341.333,426.667,341.333z      M426.667,469.333c-23.567,0-42.667-19.099-42.667-42.667S403.099,384,426.667,384s42.667,19.099,42.667,42.667     S450.234,469.333,426.667,469.333z" fill="#ffffff" data-original="#000000" style={{}} className />
                                                        <path d="M490.667,234.667H338.645c-9.472-36.807-42.88-64-82.645-64s-73.173,27.193-82.645,64H21.333     C9.551,234.667,0,244.218,0,256s9.551,21.333,21.333,21.333h152.021c9.472,36.807,42.88,64,82.645,64s73.173-27.193,82.645-64     h152.021c11.782,0,21.333-9.551,21.333-21.333S502.449,234.667,490.667,234.667z M256,298.667     c-23.567,0-42.667-19.099-42.667-42.667s19.099-42.667,42.667-42.667s42.667,19.099,42.667,42.667S279.567,298.667,256,298.667z" fill="#ffffff" data-original="#000000" style={{}} className />
                                                    </g>
                                                </g>
                                            </g>
                                        </g></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={12} height={12} x={0} y={0} viewBox="0 0 492 492" style={{ enableBackground: 'new 0 0 14 14' }} xmlSpace="preserve" className="i-close-white"><g xmlns="http://www.w3.org/2000/svg"><path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872    c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872    c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052    L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116    c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952    c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116    c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z" fill="#ffffff" data-original="#000000" style={{}} className /></g></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductPage