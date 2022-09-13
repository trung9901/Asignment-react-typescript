import React from 'react'
import { CategoryType } from '../types/Category'
import { ProductType } from '../types/Product'
import { addToCart } from '../utils/localStorage'
import Banner from './Banner'
import Search from './Search'
import { Link, NavLink } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form'
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
                                                    <div className="">
                                                        <div className="product-thumbnail sale " data-sale="Giảm 5% ">

                                                            <NavLink to={`/products/${product._id}`}>
                                                                <picture>

                                                                    <source media="(min-width: 1200px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                    <source media="(min-width: 992px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                    <source media="(min-width: 569px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                    <source media="(max-width: 480px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                    <source media="(max-width: 375px)" srcSet="//bizweb.dktcdn.net/thumb/compact/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" />
                                                                    <img width={240} height={240} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="" alt="Samsung Galaxy Note 21" className="lazyload img-responsive center-block" />
                                                                </picture>
                                                            </NavLink>

                                                        </div>
                                                        <div className="product-info">
                                                            <h3 className="product-name"><NavLink to={`/products/${product._id}`}> {product.name}</NavLink></h3>
                                                            <div className="price-box">
                                                                <span className="price">{product.price}₫</span>
                                                                <span className="compare-price">30.500.000₫</span>
                                                                <div className="action-cart">

                                                                    <button className="btn-views">
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
                                                    </div>
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