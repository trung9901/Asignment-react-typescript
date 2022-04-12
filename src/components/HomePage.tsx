import React from 'react'
import { CategoryType } from '../types/Category'
import { ProductType } from '../types/Product'
import { addToCart } from '../utils/localStorage'
import Banner from './Banner'
import Search from './Search'
type HomePageProps = {
    products: ProductType[]
    categories: CategoryType[]
}

const HomePage = ({ products, categories }: HomePageProps) => {
    return (
        <div>
            <div className="main-index">

                <Banner />
                <section className="section_category">
                    <div className="container">
                        <div className="cate-list">
                            <div className="swiper-container">
                                <div className="swiper-wrapper bg-white">
                                    {categories?.map((category, index) => {
                                        return (<div className="" key={index}>
                                            <div className="cate-item">
                                                <a className="image" href="/dien-thoai-may-tinh-bang" title={category.name}>
                                                    <img className="image_cate_thumb lazyload" width={80} height={80} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon1.png?v=1623548877697" alt="Điện thoại - Máy tính bảng" />
                                                </a>
                                                <h4 className="title_cate_"><a href="/dien-thoai-may-tinh-bang" title={category.name}>{category.name}</a></h4>
                                            </div>
                                        </div>
                                        )
                                    })}


                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section_tab_product">
                    <div className="container">
                        <div className="not-dqtab e-tabs ajax-tab-1 ajax" data-section="ajax-tab-1">
                            <ul className="nav-tab">
                                <li className="tab-link tabs-title tabtitle1 ajax has-content current" data-tab="tab-1" data-url="san-pham-noi-bat">
                                    <h4>Điện thoại</h4>
                                    <p>Giảm ngay 1 triệu khi mua online</p>
                                </li>
                                <li className="tab-link tabs-title tabtitle1 ajax " data-tab="tab-2" data-url="san-pham-khuyen-mai">
                                    <h4>Thời trang</h4>
                                    <p>Giảm giá cực lớn lên tới 70%</p>
                                </li>
                                <li className="tab-link tabs-title tabtitle1 ajax " data-tab="tab-3" data-url="san-pham-ban-chay">
                                    <h4>Gia Dụng</h4>
                                    <p>Giá siêu ưu đãi lên tới 30%</p>
                                </li>
                            </ul>
                            <div className="tab-container">
                                <div className="tab-item tab-content tab-1 current">
                                    <div className="banner-left">
                                        <a href="#" title="siêu sale">
                                            <img className="lazyload" width={285} height={312} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/banner_1_tab.jpg?1646907197259" alt="siêu sale" />
                                        </a>
                                    </div>
                                    <div className="contentfill">
                                        <div className="swiper-container">
                                            <div className="swipertab swiper-tab-top swiper-first">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide ajax-carousel">
                                                        <div className=" item_product_main">
                                                            <form action="/cart/add" method="post" className="variants product-action wishItem" data-cart-form data-id="product-actions-21989403" encType="multipart/form-data">
                                                                <div className="product-thumbnail sale " data-sale="Giảm 5% ">
                                                                    <a className="image_thumb" href="/samsung-galaxy-note-21" title="Samsung Galaxy Note 21">
                                                                        <picture>
                                                                            <source media="(min-width: 1200px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                            <source media="(min-width: 992px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                            <source media="(min-width: 569px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                            <source media="(max-width: 480px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                            <source media="(max-width: 375px)" srcSet="//bizweb.dktcdn.net/thumb/compact/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                            <img width={240} height={240} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="https://bizweb.dktcdn.net/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="Samsung Galaxy Note 21" className="lazyload img-responsive center-block" />
                                                                        </picture>
                                                                    </a>
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
                                                                    <h3 className="product-name"><a href="/samsung-galaxy-note-21" title="Samsung Galaxy Note 21">Samsung Galaxy Note 21</a></h3>
                                                                    <div className="price-box">
                                                                        <span className="price">29.000.000₫</span>
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
                                                    </div>
                                                    <div className="swiper-slide ajax-carousel">
                                                        <div className=" item_product_main">
                                                            <form action="/cart/add" method="post" className="variants product-action wishItem" data-cart-form data-id="product-actions-21989311" encType="multipart/form-data">
                                                                <div className="product-thumbnail  ">
                                                                    <a className="image_thumb" href="/apple-iphone-12-mini-new" title="Apple iPhone 12 Mini New">
                                                                        <picture>
                                                                            <source media="(min-width: 1200px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-2-0340d148-dd79-40b3-b8ad-95ed589c7b5a.png?v=1623564588000" />
                                                                            <source media="(min-width: 992px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-2-0340d148-dd79-40b3-b8ad-95ed589c7b5a.png?v=1623564588000" />
                                                                            <source media="(min-width: 569px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-2-0340d148-dd79-40b3-b8ad-95ed589c7b5a.png?v=1623564588000" />
                                                                            <source media="(max-width: 480px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-2-0340d148-dd79-40b3-b8ad-95ed589c7b5a.png?v=1623564588000" />
                                                                            <source media="(max-width: 375px)" srcSet="//bizweb.dktcdn.net/thumb/compact/100/429/689/products/apple-iphone-12-mini-2-0340d148-dd79-40b3-b8ad-95ed589c7b5a.png?v=1623564588000" />
                                                                            <img width={240} height={240} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="https://bizweb.dktcdn.net/100/429/689/products/apple-iphone-12-mini-2-0340d148-dd79-40b3-b8ad-95ed589c7b5a.png?v=1623564588000" alt="Apple iPhone 12 Mini New" className="lazyload img-responsive center-block" />
                                                                        </picture>
                                                                    </a>
                                                                    <div className="product-action">
                                                                        <div className="group_action">
                                                                            <a href="javascript:void(0)" className="setWishlist btn-views" data-wish="apple-iphone-12-mini-new" tabIndex={0} title="Thêm vào yêu thích">
                                                                                <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"> <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z" /> </svg>
                                                                            </a>
                                                                            <a href="javascript:void(0)" className="setCompare btn-views" data-compare="apple-iphone-12-mini-new" data-type="Smartphone" tabIndex={0} title="Thêm vào so sánh">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}> <path d="M9,15H7c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v12C10,14.6,9.6,15,9,15z" /> <path d="M1,9h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-4C0,9.4,0.4,9,1,9z" /> <path d="M15,5h-2c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V6C16,5.4,15.6,5,15,5z" /> </svg>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h3 className="product-name"><a href="/apple-iphone-12-mini-new" title="Apple iPhone 12 Mini New">Apple iPhone 12 Mini New</a></h3>
                                                                    <div className="price-box">
                                                                        26.000.000₫
                                                                        <div className="action-cart">
                                                                            <input className="hidden" type="hidden" name="variantId" defaultValue={47261788} />
                                                                            <button className="btn btn-cart btn-left  btn btn-views left-to" title="Xem thêm lựa chọn" type="button" >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" className="Capa_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 47 47" xmlSpace="preserve"> <g> <g className="Layer_1_110_"> <g> <path d="M17.567,15.938l-2.859-2.702c0.333-0.605,0.539-1.29,0.539-2.029c0-2.342-1.897-4.239-4.24-4.239     c-2.343,0-4.243,1.896-4.243,4.239c0,2.343,1.9,4.241,4.243,4.241c0.826,0,1.59-0.246,2.242-0.654l2.855,2.699     C16.536,16.922,17.023,16.399,17.567,15.938z" /> <path d="M29.66,15.6l3.799-6.393c0.374,0.107,0.762,0.184,1.169,0.184c2.347,0,4.244-1.898,4.244-4.241     c0-2.342-1.897-4.239-4.244-4.239c-2.343,0-4.239,1.896-4.239,4.239c0,1.163,0.469,2.214,1.227,2.981l-3.787,6.375     C28.48,14.801,29.094,15.169,29.66,15.6z" /> <path d="M42.762,20.952c-1.824,0-3.369,1.159-3.968,2.775l-5.278-0.521c0,0.04,0.006,0.078,0.006,0.117     c0,0.688-0.076,1.36-0.213,2.009l5.276,0.521c0.319,2.024,2.062,3.576,4.177,3.576c2.342,0,4.238-1.896,4.238-4.238     C47,22.85,45.104,20.952,42.762,20.952z" /> <path d="M28.197,37.624l-1.18-5.156c-0.666,0.232-1.359,0.398-2.082,0.481l1.182,5.157c-1.355,0.709-2.29,2.11-2.29,3.746     c0,2.342,1.896,4.237,4.243,4.237c2.342,0,4.238-1.896,4.238-4.237C32.311,39.553,30.479,37.692,28.197,37.624z" /> <path d="M14.357,25.37l-6.57,2.201c-0.758-1.158-2.063-1.926-3.548-1.926C1.896,25.645,0,27.542,0,29.884     c0,2.345,1.896,4.242,4.239,4.242c2.341,0,4.242-1.897,4.242-4.242c0-0.098-0.021-0.188-0.029-0.284l6.591-2.207     C14.746,26.752,14.51,26.077,14.357,25.37z" /> <circle cx="23.83" cy="23.323" r="7.271" /> </g> </g> </g> <g> </g>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide ajax-carousel">
                                                        <div className=" item_product_main">
                                                            <form action="/cart/add" method="post" className="variants product-action wishItem" data-cart-form data-id="product-actions-21989302" encType="multipart/form-data">
                                                                <div className="product-thumbnail sale " data-sale="Giảm  
31% 
">
                                                                    <a className="image_thumb" href="/iphone-12-pro-max-like-new" title="iPhone 12 Pro Max Like New">
                                                                        <picture>
                                                                            <source media="(min-width: 1200px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/iphone-12-pro-max-xanh-561e05b7-eed5-40c8-9065-49b5a1cea423.jpg?v=1623565125000" />
                                                                            <source media="(min-width: 992px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/iphone-12-pro-max-xanh-561e05b7-eed5-40c8-9065-49b5a1cea423.jpg?v=1623565125000" />
                                                                            <source media="(min-width: 569px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/iphone-12-pro-max-xanh-561e05b7-eed5-40c8-9065-49b5a1cea423.jpg?v=1623565125000" />
                                                                            <source media="(max-width: 480px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/iphone-12-pro-max-xanh-561e05b7-eed5-40c8-9065-49b5a1cea423.jpg?v=1623565125000" />
                                                                            <source media="(max-width: 375px)" srcSet="//bizweb.dktcdn.net/thumb/compact/100/429/689/products/iphone-12-pro-max-xanh-561e05b7-eed5-40c8-9065-49b5a1cea423.jpg?v=1623565125000" />
                                                                            <img width={240} height={240} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="https://bizweb.dktcdn.net/100/429/689/products/iphone-12-pro-max-xanh-561e05b7-eed5-40c8-9065-49b5a1cea423.jpg?v=1623565125000" alt="iPhone 12 Pro Max Like New" className="lazyload img-responsive center-block" />
                                                                        </picture>
                                                                    </a>
                                                                    <div className="product-action">
                                                                        <div className="group_action">
                                                                            <a href="javascript:void(0)" className="setWishlist btn-views" data-wish="iphone-12-pro-max-like-new" tabIndex={0} title="Thêm vào yêu thích">
                                                                                <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"> <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z" /> </svg>
                                                                            </a>
                                                                            <a href="javascript:void(0)" className="setCompare btn-views" data-compare="iphone-12-pro-max-like-new" data-type="Smartphone" tabIndex={0} title="Thêm vào so sánh">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}> <path d="M9,15H7c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v12C10,14.6,9.6,15,9,15z" /> <path d="M1,9h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-4C0,9.4,0.4,9,1,9z" /> <path d="M15,5h-2c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V6C16,5.4,15.6,5,15,5z" /> </svg>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h3 className="product-name"><a href="/iphone-12-pro-max-like-new" title="iPhone 12 Pro Max Like New">iPhone 12 Pro Max Like New</a></h3>
                                                                    <div className="price-box">
                                                                        <span className="price">22.000.000₫</span>
                                                                        <span className="compare-price">32.000.000₫</span>
                                                                        <div className="action-cart">
                                                                            <input className="hidden" type="hidden" name="variantId" defaultValue={47261762} />
                                                                            <button className="btn btn-cart btn-left  btn btn-views left-to" title="Xem thêm lựa chọn" type="button" >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" className="Capa_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 47 47" xmlSpace="preserve"> <g> <g className="Layer_1_110_"> <g> <path d="M17.567,15.938l-2.859-2.702c0.333-0.605,0.539-1.29,0.539-2.029c0-2.342-1.897-4.239-4.24-4.239     c-2.343,0-4.243,1.896-4.243,4.239c0,2.343,1.9,4.241,4.243,4.241c0.826,0,1.59-0.246,2.242-0.654l2.855,2.699     C16.536,16.922,17.023,16.399,17.567,15.938z" /> <path d="M29.66,15.6l3.799-6.393c0.374,0.107,0.762,0.184,1.169,0.184c2.347,0,4.244-1.898,4.244-4.241     c0-2.342-1.897-4.239-4.244-4.239c-2.343,0-4.239,1.896-4.239,4.239c0,1.163,0.469,2.214,1.227,2.981l-3.787,6.375     C28.48,14.801,29.094,15.169,29.66,15.6z" /> <path d="M42.762,20.952c-1.824,0-3.369,1.159-3.968,2.775l-5.278-0.521c0,0.04,0.006,0.078,0.006,0.117     c0,0.688-0.076,1.36-0.213,2.009l5.276,0.521c0.319,2.024,2.062,3.576,4.177,3.576c2.342,0,4.238-1.896,4.238-4.238     C47,22.85,45.104,20.952,42.762,20.952z" /> <path d="M28.197,37.624l-1.18-5.156c-0.666,0.232-1.359,0.398-2.082,0.481l1.182,5.157c-1.355,0.709-2.29,2.11-2.29,3.746     c0,2.342,1.896,4.237,4.243,4.237c2.342,0,4.238-1.896,4.238-4.237C32.311,39.553,30.479,37.692,28.197,37.624z" /> <path d="M14.357,25.37l-6.57,2.201c-0.758-1.158-2.063-1.926-3.548-1.926C1.896,25.645,0,27.542,0,29.884     c0,2.345,1.896,4.242,4.239,4.242c2.341,0,4.242-1.897,4.242-4.242c0-0.098-0.021-0.188-0.029-0.284l6.591-2.207     C14.746,26.752,14.51,26.077,14.357,25.37z" /> <circle cx="23.83" cy="23.323" r="7.271" /> </g> </g> </g> <g> </g>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide ajax-carousel">
                                                        <div className=" item_product_main">
                                                            <form action="/cart/add" method="post" className="variants product-action wishItem" data-cart-form data-id="product-actions-21988951" encType="multipart/form-data">
                                                                <div className="product-thumbnail sale " data-sale="Giảm  
20% 
">
                                                                    <a className="image_thumb" href="/iphone-xr-chinh-hang-vn-a" title="iPhone XR - Vàng Chính Hãng VN/A">
                                                                        <picture>
                                                                            <source media="(min-width: 1200px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/iphone-xr-mau-vang-didongviet-1-1-2.jpg?v=1623561749000" />
                                                                            <source media="(min-width: 992px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/iphone-xr-mau-vang-didongviet-1-1-2.jpg?v=1623561749000" />
                                                                            <source media="(min-width: 569px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/iphone-xr-mau-vang-didongviet-1-1-2.jpg?v=1623561749000" />
                                                                            <source media="(max-width: 480px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/iphone-xr-mau-vang-didongviet-1-1-2.jpg?v=1623561749000" />
                                                                            <source media="(max-width: 375px)" srcSet="//bizweb.dktcdn.net/thumb/compact/100/429/689/products/iphone-xr-mau-vang-didongviet-1-1-2.jpg?v=1623561749000" />
                                                                            <img width={240} height={240} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="https://bizweb.dktcdn.net/100/429/689/products/iphone-xr-mau-vang-didongviet-1-1-2.jpg?v=1623561749000" alt="iPhone XR - Vàng Chính Hãng VN/A" className="lazyload img-responsive center-block" />
                                                                        </picture>
                                                                    </a>
                                                                    <div className="product-action">
                                                                        <div className="group_action">
                                                                            <a href="javascript:void(0)" className="setWishlist btn-views" data-wish="iphone-xr-chinh-hang-vn-a" tabIndex={0} title="Thêm vào yêu thích">
                                                                                <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"> <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z" /> </svg>
                                                                            </a>
                                                                            <a href="javascript:void(0)" className="setCompare btn-views" data-compare="iphone-xr-chinh-hang-vn-a" data-type="Smartphone" tabIndex={0} title="Thêm vào so sánh">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}> <path d="M9,15H7c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v12C10,14.6,9.6,15,9,15z" /> <path d="M1,9h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-4C0,9.4,0.4,9,1,9z" /> <path d="M15,5h-2c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V6C16,5.4,15.6,5,15,5z" /> </svg>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h3 className="product-name"><a href="/iphone-xr-chinh-hang-vn-a" title="iPhone XR - Vàng Chính Hãng VN/A">iPhone XR - Vàng Chính Hãng VN/A</a></h3>
                                                                    <div className="price-box">
                                                                        <span className="price">8.000.000₫</span>
                                                                        <span className="compare-price">10.000.000₫</span>
                                                                        <div className="action-cart">
                                                                            <input className="hidden" type="hidden" name="variantId" defaultValue={47261293} />
                                                                            <button className="btn btn-cart btn-left  btn btn-views left-to" title="Xem thêm lựa chọn" type="button" >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" className="Capa_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 47 47" xmlSpace="preserve"> <g> <g className="Layer_1_110_"> <g> <path d="M17.567,15.938l-2.859-2.702c0.333-0.605,0.539-1.29,0.539-2.029c0-2.342-1.897-4.239-4.24-4.239     c-2.343,0-4.243,1.896-4.243,4.239c0,2.343,1.9,4.241,4.243,4.241c0.826,0,1.59-0.246,2.242-0.654l2.855,2.699     C16.536,16.922,17.023,16.399,17.567,15.938z" /> <path d="M29.66,15.6l3.799-6.393c0.374,0.107,0.762,0.184,1.169,0.184c2.347,0,4.244-1.898,4.244-4.241     c0-2.342-1.897-4.239-4.244-4.239c-2.343,0-4.239,1.896-4.239,4.239c0,1.163,0.469,2.214,1.227,2.981l-3.787,6.375     C28.48,14.801,29.094,15.169,29.66,15.6z" /> <path d="M42.762,20.952c-1.824,0-3.369,1.159-3.968,2.775l-5.278-0.521c0,0.04,0.006,0.078,0.006,0.117     c0,0.688-0.076,1.36-0.213,2.009l5.276,0.521c0.319,2.024,2.062,3.576,4.177,3.576c2.342,0,4.238-1.896,4.238-4.238     C47,22.85,45.104,20.952,42.762,20.952z" /> <path d="M28.197,37.624l-1.18-5.156c-0.666,0.232-1.359,0.398-2.082,0.481l1.182,5.157c-1.355,0.709-2.29,2.11-2.29,3.746     c0,2.342,1.896,4.237,4.243,4.237c2.342,0,4.238-1.896,4.238-4.237C32.311,39.553,30.479,37.692,28.197,37.624z" /> <path d="M14.357,25.37l-6.57,2.201c-0.758-1.158-2.063-1.926-3.548-1.926C1.896,25.645,0,27.542,0,29.884     c0,2.345,1.896,4.242,4.239,4.242c2.341,0,4.242-1.897,4.242-4.242c0-0.098-0.021-0.188-0.029-0.284l6.591-2.207     C14.746,26.752,14.51,26.077,14.357,25.37z" /> <circle cx="23.83" cy="23.323" r="7.271" /> </g> </g> </g> <g> </g>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide ajax-carousel">
                                                        <div className=" item_product_main">
                                                            <form action="/cart/add" method="post" className="variants product-action wishItem" data-cart-form data-id="product-actions-21988607" encType="multipart/form-data">
                                                                <div className="product-thumbnail sale " data-sale="Giảm  
13% 
">
                                                                    <a className="image_thumb" href="/xiaomi-mi-10t-pro-5g" title="Xiaomi Mi 10T Pro 5G">
                                                                        <picture>
                                                                            <source media="(min-width: 1200px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/xiaomi-mi-10t-pro.jpg?v=1623565104000" />
                                                                            <source media="(min-width: 992px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/xiaomi-mi-10t-pro.jpg?v=1623565104000" />
                                                                            <source media="(min-width: 569px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/xiaomi-mi-10t-pro.jpg?v=1623565104000" />
                                                                            <source media="(max-width: 480px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/xiaomi-mi-10t-pro.jpg?v=1623565104000" />
                                                                            <source media="(max-width: 375px)" srcSet="//bizweb.dktcdn.net/thumb/compact/100/429/689/products/xiaomi-mi-10t-pro.jpg?v=1623565104000" />
                                                                            <img width={240} height={240} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="https://bizweb.dktcdn.net/100/429/689/products/xiaomi-mi-10t-pro.jpg?v=1623565104000" alt="Xiaomi Mi 10T Pro 5G" className="lazyload img-responsive center-block" />
                                                                        </picture>
                                                                    </a>
                                                                    <div className="product-action">
                                                                        <div className="group_action">
                                                                            <a href="javascript:void(0)" className="setWishlist btn-views" data-wish="xiaomi-mi-10t-pro-5g" tabIndex={0} title="Thêm vào yêu thích">
                                                                                <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"> <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z" /> </svg>
                                                                            </a>
                                                                            <a href="javascript:void(0)" className="setCompare btn-views" data-compare="xiaomi-mi-10t-pro-5g" data-type="Smartphone" tabIndex={0} title="Thêm vào so sánh">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}> <path d="M9,15H7c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v12C10,14.6,9.6,15,9,15z" /> <path d="M1,9h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-4C0,9.4,0.4,9,1,9z" /> <path d="M15,5h-2c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V6C16,5.4,15.6,5,15,5z" /> </svg>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h3 className="product-name"><a href="/xiaomi-mi-10t-pro-5g" title="Xiaomi Mi 10T Pro 5G">Xiaomi Mi 10T Pro 5G</a></h3>
                                                                    <div className="price-box">
                                                                        <span className="price">10.900.000₫</span>
                                                                        <span className="compare-price">12.500.000₫</span>
                                                                        <div className="action-cart">
                                                                            <input className="hidden" type="hidden" name="variantId" defaultValue={47260008} />
                                                                            <button className="btn btn-cart btn-left  btn btn-views left-to" title="Xem thêm lựa chọn" type="button">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" className="Capa_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 47 47" xmlSpace="preserve"> <g> <g className="Layer_1_110_"> <g> <path d="M17.567,15.938l-2.859-2.702c0.333-0.605,0.539-1.29,0.539-2.029c0-2.342-1.897-4.239-4.24-4.239     c-2.343,0-4.243,1.896-4.243,4.239c0,2.343,1.9,4.241,4.243,4.241c0.826,0,1.59-0.246,2.242-0.654l2.855,2.699     C16.536,16.922,17.023,16.399,17.567,15.938z" /> <path d="M29.66,15.6l3.799-6.393c0.374,0.107,0.762,0.184,1.169,0.184c2.347,0,4.244-1.898,4.244-4.241     c0-2.342-1.897-4.239-4.244-4.239c-2.343,0-4.239,1.896-4.239,4.239c0,1.163,0.469,2.214,1.227,2.981l-3.787,6.375     C28.48,14.801,29.094,15.169,29.66,15.6z" /> <path d="M42.762,20.952c-1.824,0-3.369,1.159-3.968,2.775l-5.278-0.521c0,0.04,0.006,0.078,0.006,0.117     c0,0.688-0.076,1.36-0.213,2.009l5.276,0.521c0.319,2.024,2.062,3.576,4.177,3.576c2.342,0,4.238-1.896,4.238-4.238     C47,22.85,45.104,20.952,42.762,20.952z" /> <path d="M28.197,37.624l-1.18-5.156c-0.666,0.232-1.359,0.398-2.082,0.481l1.182,5.157c-1.355,0.709-2.29,2.11-2.29,3.746     c0,2.342,1.896,4.237,4.243,4.237c2.342,0,4.238-1.896,4.238-4.237C32.311,39.553,30.479,37.692,28.197,37.624z" /> <path d="M14.357,25.37l-6.57,2.201c-0.758-1.158-2.063-1.926-3.548-1.926C1.896,25.645,0,27.542,0,29.884     c0,2.345,1.896,4.242,4.239,4.242c2.341,0,4.242-1.897,4.242-4.242c0-0.098-0.021-0.188-0.029-0.284l6.591-2.207     C14.746,26.752,14.51,26.077,14.357,25.37z" /> <circle cx="23.83" cy="23.323" r="7.271" /> </g> </g> </g> <g> </g>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide ajax-carousel">
                                                        <div className=" item_product_main">
                                                            <form action="/cart/add" method="post" className="variants product-action wishItem" data-cart-form data-id="product-actions-21988547" encType="multipart/form-data">
                                                                <div className="product-thumbnail sale " data-sale="Giảm  
19% 
">
                                                                    <a className="image_thumb" href="/iphone-12-hang-quoc-te" title="iPhone 12 Hàng Quốc Tế">
                                                                        <picture>
                                                                            <source media="(min-width: 1200px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-5.png?v=1623565259000" />
                                                                            <source media="(min-width: 992px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-5.png?v=1623565259000" />
                                                                            <source media="(min-width: 569px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-5.png?v=1623565259000" />
                                                                            <source media="(max-width: 480px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-5.png?v=1623565259000" />
                                                                            <source media="(max-width: 375px)" srcSet="//bizweb.dktcdn.net/thumb/compact/100/429/689/products/apple-iphone-12-mini-5.png?v=1623565259000" />
                                                                            <img width={240} height={240} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="https://bizweb.dktcdn.net/100/429/689/products/apple-iphone-12-mini-5.png?v=1623565259000" alt="iPhone 12 Hàng Quốc Tế" className="lazyload img-responsive center-block" />
                                                                        </picture>
                                                                    </a>
                                                                    <div className="product-action">
                                                                        <div className="group_action">
                                                                            <a href="javascript:void(0)" className="setWishlist btn-views" data-wish="iphone-12-hang-quoc-te" tabIndex={0} title="Thêm vào yêu thích">
                                                                                <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"> <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z" /> </svg>
                                                                            </a>
                                                                            <a href="javascript:void(0)" className="setCompare btn-views" data-compare="iphone-12-hang-quoc-te" data-type="Smartphone" tabIndex={0} title="Thêm vào so sánh">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}> <path d="M9,15H7c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v12C10,14.6,9.6,15,9,15z" /> <path d="M1,9h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-4C0,9.4,0.4,9,1,9z" /> <path d="M15,5h-2c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V6C16,5.4,15.6,5,15,5z" /> </svg>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h3 className="product-name"><a href="/iphone-12-hang-quoc-te" title="iPhone 12 Hàng Quốc Tế">iPhone 12 Hàng Quốc Tế</a></h3>
                                                                    <div className="price-box">
                                                                        <span className="price">26.000.000₫</span>
                                                                        <span className="compare-price">32.000.000₫</span>
                                                                        <div className="action-cart">
                                                                            <input className="hidden" type="hidden" name="variantId" defaultValue={47259466} />
                                                                            <button className="btn btn-cart btn-left  btn btn-views left-to" title="Xem thêm lựa chọn" type="button">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" className="Capa_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 47 47" xmlSpace="preserve"> <g> <g className="Layer_1_110_"> <g> <path d="M17.567,15.938l-2.859-2.702c0.333-0.605,0.539-1.29,0.539-2.029c0-2.342-1.897-4.239-4.24-4.239     c-2.343,0-4.243,1.896-4.243,4.239c0,2.343,1.9,4.241,4.243,4.241c0.826,0,1.59-0.246,2.242-0.654l2.855,2.699     C16.536,16.922,17.023,16.399,17.567,15.938z" /> <path d="M29.66,15.6l3.799-6.393c0.374,0.107,0.762,0.184,1.169,0.184c2.347,0,4.244-1.898,4.244-4.241     c0-2.342-1.897-4.239-4.244-4.239c-2.343,0-4.239,1.896-4.239,4.239c0,1.163,0.469,2.214,1.227,2.981l-3.787,6.375     C28.48,14.801,29.094,15.169,29.66,15.6z" /> <path d="M42.762,20.952c-1.824,0-3.369,1.159-3.968,2.775l-5.278-0.521c0,0.04,0.006,0.078,0.006,0.117     c0,0.688-0.076,1.36-0.213,2.009l5.276,0.521c0.319,2.024,2.062,3.576,4.177,3.576c2.342,0,4.238-1.896,4.238-4.238     C47,22.85,45.104,20.952,42.762,20.952z" /> <path d="M28.197,37.624l-1.18-5.156c-0.666,0.232-1.359,0.398-2.082,0.481l1.182,5.157c-1.355,0.709-2.29,2.11-2.29,3.746     c0,2.342,1.896,4.237,4.243,4.237c2.342,0,4.238-1.896,4.238-4.237C32.311,39.553,30.479,37.692,28.197,37.624z" /> <path d="M14.357,25.37l-6.57,2.201c-0.758-1.158-2.063-1.926-3.548-1.926C1.896,25.645,0,27.542,0,29.884     c0,2.345,1.896,4.242,4.239,4.242c2.341,0,4.242-1.897,4.242-4.242c0-0.098-0.021-0.188-0.029-0.284l6.591-2.207     C14.746,26.752,14.51,26.077,14.357,25.37z" /> <circle cx="23.83" cy="23.323" r="7.271" /> </g> </g> </g> <g> </g>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-button-prev" />
                                                <div className="swiper-button-next" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-item tab-content tab-2 ">
                                    <div className="banner-left">
                                        <a href="#" title="Sale mạnh tới 50%">
                                            <img className="lazyload" width={285} height={312} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/banner_2_tab.jpg?1646907197259" alt="Sale mạnh tới 50%" />
                                        </a>
                                    </div>
                                    <div className="contentfill">
                                    </div>
                                </div>
                                <div className="tab-item tab-content tab-3 ">
                                    <div className="banner-left">
                                        <a href="#" title="Siêu giảm giá tới 60%">
                                            <img className="lazyload" width={285} height={312} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/banner_3_tab.jpg?1646907197259" alt="Siêu giảm giá tới 60%" />
                                        </a>
                                    </div>
                                    <div className="contentfill">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_tech">
                    <div className="container">
                        <div className="swap">
                            <h2 className="title-block upscape">
                                <a href="san-pham-noi-bat" title="Đồ công nghệ">Đồ công nghệ</a>
                            </h2>
                            <ul>
                                <li>
                                    <a href="/dien-thoai-may-tinh-bang" title="Điện thoại - Máy tính bảng">Điện thoại - Máy tính bảng</a>
                                </li>
                                <li>
                                    <a href="/phu-kien-thiet-bi-so" title="Phụ kiện - Thiết bị số">Phụ kiện - Thiết bị số</a>
                                </li>
                                <li>
                                    <a href="/may-anh-quay-phim" title="Máy ảnh - Quay phim">Máy ảnh - Quay phim</a>
                                </li>
                                <li>
                                    <a href="/dien-gia-dung-nha-bep" title="Điện gia dụng - Nhà bếp">Điện gia dụng - Nhà bếp</a>
                                </li>
                                <li>
                                    <a href="/laptop-thiet-bi-it" title="Laptop - Thiết bị IT">Laptop - Thiết bị IT</a>
                                </li>
                            </ul>
                            <div className="row">
                                <div className="col-lg-3 d-md-none d-lg-block col-12 order-2 order-lg-1 block-image">
                                    <a className="d-block banner-vertical" href="#" title="Săn sale thả ga">
                                        <img className="lazyload" width={280} height={310} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/banner_1.jpg?1646907197259" alt="Săn sale thả ga" />
                                    </a>
                                    <a className="d-block banner-vertical" href="#" title="Giảm sốc">
                                        <img className="lazyload" width={280} height={310} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/banner_2.jpg?1646907197259" alt="Giảm sốc" />
                                    </a>
                                </div>
                                <div className="col-lg-9 col-md-12 col-12 order-1 order-lg-2 no-padding-left">
                                    <div className="slide-tech row">
                                        {products?.map((product, index) => {
                                            return (<div className="col-lg-3 col-md-3 col-6" key={index}>
                                                <div className=" item_product_main">
                                                    <form action="/cart/add" method="post" className="variants product-action wishItem" data-cart-form data-id="product-actions-21989403" encType="multipart/form-data">
                                                        <div className="product-thumbnail sale " data-sale="Giảm 5% ">
                                                            <a className="image_thumb" href={`/products/${product._id}`} title="Samsung Galaxy Note 21">
                                                                <picture>

                                                                    <source media="(min-width: 1200px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                    <source media="(min-width: 992px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                    <source media="(min-width: 569px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                    <source media="(max-width: 480px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                    <source media="(max-width: 375px)" srcSet="//bizweb.dktcdn.net/thumb/compact/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                    <img width={240} height={240} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="" alt="Samsung Galaxy Note 21" className="lazyload img-responsive center-block" />
                                                                </picture>
                                                            </a>
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
                                                            <h3 className="product-name"><a href={`/products/${product._id}`} title="Samsung Galaxy Note 21">{product.name}</a></h3>
                                                            <div className="price-box">
                                                                <span className="price">{product.price}₫</span>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container section_blog">
                    <div className="swap">
                        <h2 className="title-block upscape">
                            <a href="/blogs/all" title="Tin tức mới nhất">Tin tức mới nhất</a>
                        </h2>
                        <div className="row blogs_mobile_base">
                            <div className="col-lg-3 col-md-3 col-8">
                                <div className="item_blog_base">
                                    <a className="thumb" href="/galaxy-z-fold-3-va-z-flip-3-se-co-gia-re-hon" title="Galaxy Z Fold 3 và Z Flip 3 sẽ có giá rẻ hơn">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/429/689/articles/galaxy-fold-black-home-screen-open.jpg?v=1623603593787" alt="Galaxy Z Fold 3 và Z Flip 3 sẽ có giá rẻ hơn" className="lazyload img-responsive" />
                                        <span className="thead">Tin tức</span>
                                    </a>
                                    <div className="content_blog clearfix">
                                        <h3><a href="/galaxy-z-fold-3-va-z-flip-3-se-co-gia-re-hon" title="Galaxy Z Fold 3 và Z Flip 3 sẽ có giá rẻ hơn" className="a-title">Galaxy Z Fold 3 và Z Flip 3 sẽ có giá rẻ hơn</a></h3>
                                        <p>
                                            Hai smartphone đắt nhất của Samsung sẽ có giá rẻ hơn 400 USD so với thế hệ trước. Theo báo cáo của SamMobile n...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-8">
                                <div className="item_blog_base">
                                    <a className="thumb" href="/cach-lam-bun-suon-nau-sau-thanh-mat" title="Cách làm bún sườn nấu sấu thanh mát">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/429/689/articles/bun-rieu-da-lat-1.jpg?v=1623602344633" alt="Cách làm bún sườn nấu sấu thanh mát" className="lazyload img-responsive" />
                                        <span className="thead">Đời sống</span>
                                    </a>
                                    <div className="content_blog clearfix">
                                        <h3><a href="/cach-lam-bun-suon-nau-sau-thanh-mat" title="Cách làm bún sườn nấu sấu thanh mát" className="a-title">Cách làm bún sườn nấu sấu thanh mát</a></h3>
                                        <p>
                                            Bún sườn nấu sấu là món ăn này rất hợp với mùa hè bởi cách làm và nguyên liệu đơn giản nhưng lại hấp dẫn. Quả sấ...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-8">
                                <div className="item_blog_base">
                                    <a className="thumb" href="/viettel-dang-tang-nguoi-dung-3gb-truy-cap-internet-mien-phi-ap-dung-cho-tat-ca-cac-loai-thue-bao" title="Viettel đang tặng người dùng 3GB truy cập Internet miễn phí, áp dụng cho tất cả các loại thuê bao">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/429/689/articles/khuyen-mai-viettel-31-08.jpg?v=1623566790277" alt="Viettel đang tặng người dùng 3GB truy cập Internet miễn phí, áp dụng cho tất cả các loại thuê bao" className="lazyload img-responsive" />
                                        <span className="thead">Khuyến mãi</span>
                                    </a>
                                    <div className="content_blog clearfix">
                                        <h3><a href="/viettel-dang-tang-nguoi-dung-3gb-truy-cap-internet-mien-phi-ap-dung-cho-tat-ca-cac-loai-thue-bao" title="Viettel đang tặng người dùng 3GB truy cập Internet miễn phí, áp dụng cho tất cả các loại thuê bao" className="a-title">Viettel đang tặng người dùng 3GB truy cập Internet miễn phí, áp dụng cho tất cả các loại thuê bao</a></h3>
                                        <p>
                                            Rạng sáng nay (15/10/2019), Viettel đã bất ngờ dành tặng 1 triệu gói data ST15K miễn phí cho người dùng, áp dụng với...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-8">
                                <div className="item_blog_base">
                                    <a className="thumb" href="/tv-samsung-dang-giam-gia-manh-co-mau-giam-toi-15-trieu-de-kich-cau-dau-nam" title="TV Samsung đang giảm giá mạnh, có mẫu giảm tới 15 triệu để kích cầu đầu năm">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/429/689/articles/smart-tivi-samsung-55-inch-ua55tu8000kxxv-4k-uhd.jpg?v=1623567121103" alt="TV Samsung đang giảm giá mạnh, có mẫu giảm tới 15 triệu để kích cầu đầu năm" className="lazyload img-responsive" />
                                        <span className="thead">Sự kiện</span>
                                    </a>
                                    <div className="content_blog clearfix">
                                        <h3><a href="/tv-samsung-dang-giam-gia-manh-co-mau-giam-toi-15-trieu-de-kich-cau-dau-nam" title="TV Samsung đang giảm giá mạnh, có mẫu giảm tới 15 triệu để kích cầu đầu năm" className="a-title">TV Samsung đang giảm giá mạnh, có mẫu giảm tới 15 triệu để kích cầu đầu năm</a></h3>
                                        <p>
                                            Hãng Samsung Việt Nam vừa công bố chương trình giảm giá hấp dẫn cho hàng loạt mẫu TV của hãng ra mắt trong năm 2018....
                                        </p>
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

export default HomePage