import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../../api/Product';
import { ProductType } from '../../types/Product';


type Props = {}

const ProductDetail = (props: Props) => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType>()
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            console.log(data)
        }
        getProduct();
    }, [])
    return (
        <div>
            ProductDetail
        </div>
    )
}

export default ProductDetail;
`<div className="main-index">
<section className="bread-crumb">
    <div className="container">
        <div className="row">
            <div className="col-12 a-left">
                <ul className="breadcrumb">
                    <li className="home">
                        <a href="index.html"><span>Trang chủ</span></a>
                        <span className="mr_lr">&nbsp;/&nbsp;</span>
                    </li>
                    <li>
                        <a className="changeurl" href="samsung.html"><span>Samsung</span></a>
                        <span className="mr_lr">&nbsp;/&nbsp;</span>
                    </li>
                    <li><strong><span>Samsung Galaxy Note 21</span></strong>
                    </li><li>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section className="product details-main" itemScope itemType="https://schema.org/Product">
    <meta itemProp="category" content="Samsung" />
    <meta itemProp="mpn" content="ssultra-6x" />
    <meta itemProp="name" content="Samsung Galaxy Note 21" />
    <meta itemProp="image" content="../bizweb.dktcdn.net/thumb/grande/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.124d72a.de?v=1623565400993" />
    <meta itemProp="description" content="Samsung là một trong những nhà sản xuất dẫn đầu trên thị trường điện thoại thông minh nhiều năm qua. Sau thành công của dòng Galaxy S20 series, Samsung đã trở lại và tiếp tục khẳng định vị thế cho dòng flagship cao cấp của mình. Dòng Galaxy S21 series đánh dấu bước nhảy vọt với những công nghệ tiên tiến nhất hiện nay. Đáng chú ý, Galaxy S21 Ultra 5G là phiên bản đầu tiên và duy nhất trong dòng sản phẩm năm nay được tích hợp cùng bút S Pen. “Tân binh khủng long” này hứa hẹn sẽ dẫn đầu xu hướng và tạo ra những trải nghiệm đẳng cấp, khác biệt cho người dùng...." />
    <meta itemProp="brand" content="Samsung" />
    <meta itemProp="model" content />
    <meta itemProp="sku" content="ssultra-6x" />
    <div id="dvProductPricing" className="ProductDetailsPricing d-none" itemProp="offers" itemScope itemType="http://schema.org/Offer">
        <meta itemProp="seller" content="pocomart" />
        <link itemProp="availability" href="http://schema.org/InStock" />
        <meta itemProp="priceCurrency" content="VND" />
        <meta itemProp="price" content={29000000} />
        <meta itemProp="url" content="//pocomart.mysapo.net/samsung-galaxy-note-21" />
        <div className="inventory_quantity d-none" itemScope itemType="http://schema.org/ItemAvailability">
            <span className="a-stock" itemProp="supersededBy">
                Còn hàng
            </span>
        </div>
        <meta itemProp="priceSpecification" content={30500000} />
        <meta itemProp="priceValidUntil" content="2099-01-01" />
    </div>
    {/* review */}
    <div className="d-none" itemProp="review" itemScope itemType="http://schema.org/Review">
        <span itemProp="author">pocomart</span>
        <span itemProp="description">Shop bán những sản phẩm giá cực kì tốt và có tính cạnh tranh cao so với các
            shop khác, sản phẩm rất chi hài lòng</span>
    </div>
    <div className="container">
        <div className="row ">
            <div className="col-lg-9 col-12">
                <div className="row">
                    <div className="product-detail-left product-images col-12 col-md-12 col-lg-5">
                        <div className="product-image-detail">
                            <div className="swiper-container gallery-top margin-bottom-10">
                                <div className="swiper-wrapper" id="lightgallery">
                                    <a className="swiper-slide" data-hash={0} href="../bizweb.dktcdn.net/thumb/1024x1024/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.125d72a?v=1623565400993" title="Bấm vào để xem thư viện ảnh Samsung Galaxy Note 21">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400993" alt="Samsung Galaxy Note 21" data-image="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400993" className="img-responsive mx-auto d-block swiper-lazy" />
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                                    </a>
                                    <a className="swiper-slide" data-hash={1} href="../bizweb.dktcdn.net/thumb/1024x1024/100/429/689/products/galaxy-s21-ultra-5g-black-didongviet-4d629582-00f6-4573-8389-68c74b9fafa8d72a.jpg?v=1623565400993" title="Bấm vào để xem thư viện ảnh Samsung Galaxy Note 21">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/429/689/products/galaxy-s21-ultra-5g-black-didongviet-4d629582-00f6-4573-8389-68c74b9fafa8.jpg?v=1623565400993" alt="Samsung Galaxy Note 21" data-image="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/galaxy-s21-ultra-5g-black-didongviet-4d629582-00f6-4573-8389-68c74b9fafa8.jpg?v=1623565400993" className="img-responsive mx-auto d-block swiper-lazy" />
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                                    </a>
                                    <a className="swiper-slide" data-hash={2} href="../bizweb.dktcdn.net/thumb/1024x1024/100/429/689/products/gia-galaxy-s21-ultra-5g-256gb-cb57089d-30f5-45a2-917b-ddbb89bf9ebad72a.jpg?v=1623565400993" title="Bấm vào để xem thư viện ảnh Samsung Galaxy Note 21">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/429/689/products/gia-galaxy-s21-ultra-5g-256gb-cb57089d-30f5-45a2-917b-ddbb89bf9eba.jpg?v=1623565400993" alt="Samsung Galaxy Note 21" data-image="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/gia-galaxy-s21-ultra-5g-256gb-cb57089d-30f5-45a2-917b-ddbb89bf9eba.jpg?v=1623565400993" className="img-responsive mx-auto d-block swiper-lazy" />
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                                    </a>
                                    <a className="swiper-slide" data-hash={3} href="../bizweb.dktcdn.net/thumb/1024x1024/100/429/689/products/de4afc174454fe2f7a04783d6e886346-d7b87c6a-be48-4e4d-aada-b5d76d2097fcd72a.jpg?v=1623565400993" title="Bấm vào để xem thư viện ảnh Samsung Galaxy Note 21">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/429/689/products/de4afc174454fe2f7a04783d6e886346-d7b87c6a-be48-4e4d-aada-b5d76d2097fc.jpg?v=1623565400993" alt="Samsung Galaxy Note 21" data-image="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/de4afc174454fe2f7a04783d6e886346-d7b87c6a-be48-4e4d-aada-b5d76d2097fc.jpg?v=1623565400993" className="img-responsive mx-auto d-block swiper-lazy" />
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                                    </a>
                                    <a className="swiper-slide" data-hash={4} href="../bizweb.dktcdn.net/thumb/1024x1024/100/429/689/products/galaxy-s21-plus-5g-bac-didongviet-1-719e9485-fd05-4c6d-bd44-7e5f6ed19132d72a.jpg?v=1623565400993" title="Bấm vào để xem thư viện ảnh Samsung Galaxy Note 21">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/429/689/products/galaxy-s21-plus-5g-bac-didongviet-1-719e9485-fd05-4c6d-bd44-7e5f6ed19132.jpg?v=1623565400993" alt="Samsung Galaxy Note 21" data-image="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/galaxy-s21-plus-5g-bac-didongviet-1-719e9485-fd05-4c6d-bd44-7e5f6ed19132.jpg?v=1623565400993" className="img-responsive mx-auto d-block swiper-lazy" />
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                                    </a>
                                    <a className="swiper-slide" data-hash={5} href="../bizweb.dktcdn.net/thumb/1024x1024/100/429/689/products/samsung-galaxy-s21-ultra-128gb-2b876384-8d1d-42e7-86b1-72ae58405538d72a.jpg?v=1623565400993" title="Bấm vào để xem thư viện ảnh Samsung Galaxy Note 21">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/429/689/products/samsung-galaxy-s21-ultra-128gb-2b876384-8d1d-42e7-86b1-72ae58405538.jpg?v=1623565400993" alt="Samsung Galaxy Note 21" data-image="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/samsung-galaxy-s21-ultra-128gb-2b876384-8d1d-42e7-86b1-72ae58405538.jpg?v=1623565400993" className="img-responsive mx-auto d-block swiper-lazy" />
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-container gallery-thumbs">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide" data-hash={0}>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400993" alt="Samsung Galaxy Note 21" data-image="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400993" className="swiper-lazy" />
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                                    </div>
                                    <div className="swiper-slide" data-hash={1}>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/galaxy-s21-ultra-5g-black-didongviet-4d629582-00f6-4573-8389-68c74b9fafa8.jpg?v=1623565400993" alt="Samsung Galaxy Note 21" data-image="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/galaxy-s21-ultra-5g-black-didongviet-4d629582-00f6-4573-8389-68c74b9fafa8.jpg?v=1623565400993" className="swiper-lazy" />
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                                    </div>
                                    <div className="swiper-slide" data-hash={2}>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/gia-galaxy-s21-ultra-5g-256gb-cb57089d-30f5-45a2-917b-ddbb89bf9eba.jpg?v=1623565400993" alt="Samsung Galaxy Note 21" data-image="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/gia-galaxy-s21-ultra-5g-256gb-cb57089d-30f5-45a2-917b-ddbb89bf9eba.jpg?v=1623565400993" className="swiper-lazy" />
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                                    </div>
                                    <div className="swiper-slide" data-hash={3}>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/de4afc174454fe2f7a04783d6e886346-d7b87c6a-be48-4e4d-aada-b5d76d2097fc.jpg?v=1623565400993" alt="Samsung Galaxy Note 21" data-image="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/de4afc174454fe2f7a04783d6e886346-d7b87c6a-be48-4e4d-aada-b5d76d2097fc.jpg?v=1623565400993" className="swiper-lazy" />
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                                    </div>
                                    <div className="swiper-slide" data-hash={4}>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/galaxy-s21-plus-5g-bac-didongviet-1-719e9485-fd05-4c6d-bd44-7e5f6ed19132.jpg?v=1623565400993" alt="Samsung Galaxy Note 21" data-image="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/galaxy-s21-plus-5g-bac-didongviet-1-719e9485-fd05-4c6d-bd44-7e5f6ed19132.jpg?v=1623565400993" className="swiper-lazy" />
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                                    </div>
                                    <div className="swiper-slide" data-hash={5}>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/samsung-galaxy-s21-ultra-128gb-2b876384-8d1d-42e7-86b1-72ae58405538.jpg?v=1623565400993" alt="Samsung Galaxy Note 21" data-image="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/samsung-galaxy-s21-ultra-128gb-2b876384-8d1d-42e7-86b1-72ae58405538.jpg?v=1623565400993" className="swiper-lazy" />
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 details-pro">
                        <h1 className="title-head">Samsung Galaxy Note 21</h1>
                        <div className="sapo-product-reviews-badge" data-id={21989403} onclick="scrollToxx();">
                        </div>
                        <div className="product-top clearfix">
                            <div className="sku-product clearfix">
                                <span itemProp="brand" itemType="http://schema.org/Brand" itemScope>
                                    <meta itemProp="name" content="Samsung" />Thương hiệu:
                                    <strong>Samsung</strong>
                                </span>
                                <span className="variant-sku" itemProp="sku" content="ssultra-6x">Mã sản phẩm:
                                    <strong>ssultra-6x</strong></span>
                            </div>
                        </div>
                        <div className="group-power">
                            <div className="inventory_quantity d-none">
                                <span className="a-stock a2">
                                    <link itemProp="availability" href="http://schema.org/InStock" />Còn hàng
                                </span>
                            </div>
                            <div className="price-box clearfix">
                                <span className="special-price">
                                    <span className="price product-price">29.000.000₫</span>
                                </span> {/* Giá Khuyến mại */}
                                <span className="old-price">
                                    Giá niêm yết:
                                    <del className="price product-price-old">
                                        30.500.000₫
                                    </del>
                                </span> {/* Giás gốc */}
                                <span className="save-price">Tiết kiệm:
                                    <span className="price product-price-save">1.500.000₫</span> so với giá thị
                                    trường
                                </span> {/* Tiết kiệm */}
                            </div>
                        </div>
                        <div className="km-hot">
                            <div className="box-km">
                                <h2 className="title_km">
                                    <span>Khuyến mãi - ưu đãi</span>
                                </h2>
                                <div className="box-promotion">
                                    <p>Tặng ngay tai nghe iDot trị giá 1 triệu</p>
                                    <p>Tặng ốp lưng chống sốc</p>
                                    <p>Tặng phiếu mua hàng trị giá 2.000.000đ</p>
                                </div>
                            </div>
                        </div>
                        <form encType="multipart/form-data" id="add-to-cart-form" data-cart-form action="https://pocomart.mysapo.net/cart/add" method="post" className="wishItem">
                            <div className="form-product">
                                <div className="box-variant clearfix  d-none ">
                                    <input type="hidden" id="one_variant" name="variantId" defaultValue={47262129} />
                                </div>
                                <div className="clearfix from-action-addcart ">
                                    <div className="qty-ant clearfix custom-btn-number ">
                                        <label className="d-none">Số lượng:</label>
                                        <div className="custom custom-btn-numbers clearfix input_number_product">
                                            <button onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN(qty) & qty > 1 ) result.value--;return false;" className="btn-minus btn-cts" type="button">–</button>
                                            <input aria-label="Số lượng" type="text" className="qty input-text" id="qty" name="quantity" size={4} defaultValue={1} maxLength={3} onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;" onchange="if(this.value == 0)this.value=1;" />
                                            <button onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN(qty)) result.value++;return false;" className="btn-plus btn-cts" type="button">+</button>
                                        </div>
                                    </div>
                                    <div className="btn-mua">
                                        <button type="submit" data-role="addtocart" className="btn btn-lg btn-gray btn-cart btn_buy add_to_cart">Thêm vào
                                            giỏ<span>Cam kết chính hãng / đổi trả 24h</span></button>
                                        <button type="button" className="btn btn-lg btn-gray btn_buy btn-buy-now">Mua ngay<span>Thanh
                                            toán nhanh chóng</span></button>
                                    </div>
                                </div>
                                {/* <div className="product-wish">
                                    <div className="product-hotline">Gọi <a href="tel:099999999" title={099999999}>099999999</a> để tư vấn mua hàng</div>
                                    <a href="javascript:void(0)" className="setWishlist" data-wish="samsung-galaxy-note-21" tabIndex={0} title="Thêm vào yêu thích">
                                        <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">

                                        </svg>
                                    </a>
                                    <a href="javascript:void(0)" className="setCompare btn-views" data-compare="samsung-galaxy-note-21" data-type="Smartphone" tabIndex={0} title="Thêm vào so sánh">
                                        <svg width="419pt" height="419pt" viewBox="0 -45 419.24 419" xmlns="http://www.w3.org/2000/svg">

                                        </svg>
                                    </a>
                                </div> */}
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-12 col-12 product-tab e-tabs not-dqtab">
                        <ul className="tabs tabs-title clearfix">
                            <li className="tab-link current" data-tab="tab-1">
                                <span>Chi tiết</span>
                            </li>
                            <li className="tab-link" data-tab="tab-2">
                                <span>Hướng dẫn</span>
                            </li>
                            <li className="tab-link" data-tab="tab-3" id="tab-review">
                                <span>Đánh giá</span>
                            </li>
                        </ul>
                        <div id="tab-1" className="tab-content content_extab current">
                            <div className="rte product_getcontent">
                                <div className="ba-text-fpt">
                                    <p style={{ textAlign: 'justify', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 13 }}><span style={{ lineHeight: '1.5' }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ fontWeight: 400 }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}>Samsung
                                            là
                                            một
                                            trong
                                            những
                                            nhà
                                            sản
                                            xuất
                                            dẫn
                                            đầu
                                            trên
                                            thị
                                            trường
                                            điện
                                            thoại
                                            thông
                                            minh
                                            nhiều
                                            năm
                                            qua.
                                            Sau
                                            thành
                                            công
                                            của
                                            dòng
                                            Galaxy
                                            S20
                                            series,
                                            Samsung
                                            đã
                                            trở
                                            lại
                                            và
                                            tiếp
                                            tục
                                            khẳng
                                            định
                                            vị
                                            thế
                                            cho
                                            dòng
                                            flagship
                                            cao
                                            cấp
                                            của
                                            mình.
                                            Dòng
                                            Galaxy
                                            S21
                                            series
                                            đánh
                                            dấu
                                            bước
                                            nhảy
                                            vọt
                                            với
                                            những
                                            công
                                            nghệ
                                            tiên
                                            tiến
                                            nhất
                                            hiện
                                            nay.
                                            Đáng
                                            chú
                                            ý,
                                            Galaxy
                                            S21
                                            Ultra
                                            5G
                                            là
                                            phiên
                                            bản
                                            đầu
                                            tiên
                                            và
                                            duy
                                            nhất
                                            trong
                                            dòng
                                            sản
                                            phẩm
                                            năm
                                            nay
                                            được
                                            tích
                                            hợp
                                            cùng
                                            bút
                                            S
                                            Pen.
                                            “Tân
                                            binh
                                            khủng
                                            long”
                                            này
                                            hứa
                                            hẹn
                                            sẽ
                                            dẫn
                                            đầu
                                            xu
                                            hướng
                                            và
                                            tạo
                                            ra
                                            những
                                            trải
                                            nghiệm
                                            đẳng
                                            cấp,
                                            khác
                                            biệt
                                            cho
                                            người
                                            dùng.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                    <p style={{ textAlign: 'center', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 13 }}><span style={{ lineHeight: '1.5' }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ fontWeight: 400 }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}><img src="../hoanghamobile.com/Uploads/2021/01/16/s21-ultra.jpg" style={{ maxWidth: '100%', width: '452.733px', height: '301.822px' }} /></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                    <p style={{ textAlign: 'start', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 15 }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}>Thiết
                                            kế
                                            nguyên
                                            bản
                                            camera
                                            liền
                                            cạnh
                                            đẳng
                                            cấp</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                    <p style={{ textAlign: 'justify', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 13 }}><span style={{ lineHeight: '1.5' }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ fontWeight: 400 }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}>Điện
                                            thoại
                                            Galaxy
                                            S21
                                            Ultra
                                            5G
                                            chính
                                            hãng
                                            dẫn
                                            đầu
                                            cho
                                            xu
                                            hướng
                                            thiết
                                            kế
                                            mới,
                                            khác
                                            biệt
                                            hoàn
                                            toàn
                                            so
                                            với
                                            những
                                            smartphone
                                            hiện
                                            nay.
                                            Cụm
                                            camera
                                            nguyên
                                            khối
                                            được
                                            gắn
                                            liền
                                            với
                                            cạnh
                                            và
                                            khung
                                            kim
                                            loại
                                            của
                                            máy,
                                            mang
                                            lại
                                            cảm
                                            giác
                                            nam
                                            tính
                                            hơn
                                            và
                                            vô
                                            cùng
                                            tinh
                                            xảo.
                                            Điện
                                            thoại
                                            còn
                                            được
                                            trang
                                            bị
                                            một
                                            lớp
                                            kính
                                            Corning®
                                            Gorilla®
                                            Glass
                                            Victus
                                            bền
                                            bỉ
                                            nhất
                                            hiện
                                            nay.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                    <p style={{ textAlign: 'center', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 13 }}><span style={{ lineHeight: '1.5' }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ fontWeight: 400 }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}><img src="../hoanghamobile.com/Uploads/2021/01/16/s21-ultra-2.jpg" style={{ maxWidth: '100%', width: '461.733px', height: '273.962px' }} /></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                    <p style={{ textAlign: 'justify', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 13 }}><span style={{ lineHeight: '1.5' }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ fontWeight: 400 }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}>Galaxy
                                            S21
                                            Ultra
                                            5G
                                            chính
                                            hãng
                                            sở
                                            hữu
                                            màn
                                            hình
                                            AMOLED
                                            2X
                                            6.8
                                            inch
                                            với
                                            tần
                                            số
                                            quét
                                            từ
                                            10Hz
                                            -
                                            120Hz
                                            mượt
                                            mà.
                                            Nhờ
                                            đó,
                                            điện
                                            thoại
                                            có
                                            thể
                                            mang
                                            đến
                                            trải
                                            nghiệm
                                            hình
                                            ảnh
                                            sống
                                            động,
                                            sắc
                                            nét
                                            đến
                                            từng
                                            chi
                                            tiết
                                            nhưng
                                            vẫn
                                            tiết
                                            kiệm
                                            thời
                                            lượng
                                            pin
                                            đáng
                                            kể.
                                            Galaxy
                                            S21
                                            Ultra
                                            5G
                                            cung
                                            cấp
                                            hình
                                            ảnh
                                            sáng
                                            hơn
                                            25%,
                                            tối
                                            đa
                                            1.500nits
                                            so
                                            với
                                            thế
                                            hệ
                                            cũ.
                                            Cùng
                                            với
                                            tỷ
                                            lệ
                                            tương
                                            phản
                                            cải
                                            thiện
                                            50%
                                            cho
                                            hiển
                                            thị
                                            rõ
                                            nét
                                            bất
                                            chấp
                                            mọi
                                            điều
                                            kiện.
                                            Nhà
                                            sản
                                            xuất
                                            cũng
                                            bổ
                                            sung
                                            tính
                                            năng
                                            Eye
                                            Comfort
                                            Shield
                                            hạn
                                            chế
                                            tối
                                            đa
                                            tình
                                            trạng
                                            mỏi
                                            mắt
                                            khi
                                            sử
                                            dụng
                                            liên
                                            tục.
                                            Màn
                                            hình
                                            của
                                            Galaxy
                                            S21
                                            Ultra
                                            5G
                                            tự
                                            tin
                                            đem
                                            đến
                                            cho
                                            người
                                            dùng
                                            trải
                                            nghiệm
                                            đa
                                            tác
                                            vụ
                                            từ
                                            học
                                            tập,
                                            làm
                                            việc
                                            đến
                                            giải
                                            trí
                                            không
                                            giới
                                            hạn.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                    <p style={{ textAlign: 'start', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 15 }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}>Công
                                            nghệ
                                            camera
                                            vượt
                                            trội
                                            nhất từ
                                            Samsung</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                    <p style={{ textAlign: 'justify', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 13 }}><span style={{ lineHeight: '1.5' }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ fontWeight: 400 }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}>Không
                                            chỉ
                                            có
                                            thiết
                                            kế
                                            bên
                                            ngoài
                                            đẳng
                                            cấp,
                                            chiếc
                                            Galaxy
                                            S21
                                            Ultra
                                            5G
                                            chính
                                            hãng
                                            còn
                                            sở
                                            hữu
                                            hệ
                                            thống
                                            camera
                                            tiên
                                            tiến
                                            nhất
                                            hiện
                                            nay.
                                            Mô-đun
                                            camera
                                            hình
                                            chữ
                                            nhật
                                            chứa
                                            bốn
                                            cảm
                                            biến
                                            với
                                            một
                                            ống
                                            kính
                                            chính
                                            108MP.
                                            Ngoài
                                            ra
                                            còn
                                            có
                                            một
                                            camera
                                            góc
                                            siêu
                                            rộng
                                            12MP,
                                            camera
                                            tele
                                            siêu
                                            rộng
                                            10MP
                                            và
                                            camera
                                            tele
                                            kép
                                            10MP.
                                            Hệ
                                            thống
                                            camera
                                            này
                                            hỗ
                                            trợ
                                            chụp
                                            ảnh
                                            HDR
                                            12
                                            bit
                                            với
                                            màu
                                            sắc
                                            phong
                                            phú
                                            hơn
                                            64
                                            lần
                                            và
                                            dải
                                            động
                                            rộng
                                            hơn
                                            ba
                                            lần.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                    <p style={{ textAlign: 'center', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 13 }}><span style={{ lineHeight: '1.5' }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ fontWeight: 400 }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}><img src="../hoanghamobile.com/Uploads/2021/01/16/s21-ultra-3.jpg" style={{ maxWidth: '100%', width: '465.938px', height: '232.969px' }} /></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                    <p style={{ textAlign: 'justify', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 13 }}><span style={{ lineHeight: '1.5' }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ fontWeight: 400 }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}>Bên
                                            cạnh
                                            đó,
                                            Galaxy
                                            S21
                                            Ultra
                                            5G
                                            chính
                                            hãng
                                            còn
                                            hỗ
                                            trợ
                                            thu
                                            phóng
                                            chuẩn
                                            không
                                            gian
                                            100X,
                                            một
                                            ống
                                            kính
                                            zoom
                                            quang
                                            học
                                            3X
                                            và
                                            một
                                            ống
                                            kính
                                            zoom
                                            quang
                                            học
                                            10X.
                                            Bạn
                                            thậm
                                            chí
                                            có
                                            thể
                                            tạo
                                            ra
                                            những
                                            thước
                                            phim
                                            chuyên
                                            nghiệp
                                            với
                                            tính
                                            năng
                                            quay
                                            video
                                            4K
                                            ở
                                            tốc
                                            độ
                                            60
                                            khung
                                            hình/giây.
                                            Cảm
                                            biến
                                            chụp
                                            đêm
                                            đã
                                            được
                                            cải
                                            tiến
                                            để
                                            giảm
                                            nhiễu
                                            và
                                            bắt
                                            được
                                            nhiều
                                            ánh
                                            sáng
                                            hơn.
                                            Công
                                            nghệ
                                            Nona-binning
                                            12MP
                                            được
                                            kết
                                            hợp
                                            mang
                                            đến
                                            những
                                            bức
                                            ảnh
                                            sắc
                                            nét
                                            với
                                            chất
                                            lượng
                                            tuyệt
                                            vời.
                                            Ngoài
                                            ra,
                                            nó
                                            còn
                                            có
                                            một
                                            camera
                                            selfie
                                            40MP
                                            để
                                            hoàn
                                            thiện
                                            trải
                                            nghiệm
                                            chụp
                                            hình
                                            cho
                                            người
                                            dùng.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                    <p style={{ textAlign: 'start', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 15 }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}>Kết
                                            nối cực
                                            nhanh,
                                            tương
                                            thích
                                            cực đỉnh
                                            với S
                                            Pen</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                    <p style={{ textAlign: 'justify', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 13 }}><span style={{ lineHeight: '1.5' }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ fontWeight: 400 }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}>Samsung
                                            Galaxy
                                            S21
                                            Ultra
                                            5G
                                            chính
                                            hãng
                                            là
                                            phiên
                                            bản
                                            duy
                                            nhất
                                            trong
                                            3
                                            biến
                                            thể
                                            tương
                                            thích
                                            với
                                            bút
                                            S
                                            Pen
                                            tiêu
                                            chuẩn.
                                            Nó
                                            có
                                            thể
                                            hỗ
                                            trợ
                                            các
                                            trải
                                            nghiệm
                                            từ
                                            vẽ,
                                            ghi
                                            chú,
                                            chỉnh
                                            sửa
                                            hình
                                            ảnh
                                            đến
                                            chụp
                                            ảnh
                                            selfie
                                            chỉ
                                            với
                                            thao
                                            tác
                                            cực
                                            đơn
                                            giản.
                                            Nhờ
                                            công
                                            nghệ
                                            từ
                                            Wacom,
                                            người
                                            dùng
                                            có
                                            thể
                                            trải
                                            nghiệm
                                            bút
                                            S
                                            Pen
                                            yêu
                                            thích
                                            ngay
                                            trên
                                            chiếc
                                            Galaxy
                                            S21
                                            Ultra
                                            này.
                                            Khác
                                            với
                                            Galaxy
                                            Note,
                                            chiếc
                                            Galaxy
                                            S21
                                            Ultra
                                            5G
                                            chính
                                            hãng
                                            không
                                            có
                                            khe
                                            cắm
                                            riêng
                                            cho
                                            bút
                                            S
                                            Pen.
                                            Thay
                                            vào
                                            đó
                                            bạn
                                            có
                                            thể
                                            mua
                                            đựng
                                            chiếc
                                            bút
                                            S
                                            Pen
                                            trong
                                            một
                                            cover
                                            bán
                                            cùng
                                            máy
                                            và
                                            lấy
                                            ra
                                            sử
                                            dụng
                                            rất
                                            dễ
                                            dàng.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                    <p style={{ textAlign: 'center', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 13 }}><span style={{ lineHeight: '1.5' }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ fontWeight: 400 }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}><img src="../hoanghamobile.com/Uploads/2021/01/16/s21-ultra-4.jpg" style={{ maxWidth: '100%', width: '475.356px', height: '267.091px' }} /></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                    <p style={{ textAlign: 'justify', textIndent: 0, WebkitTextStrokeWidth: 0 }}>
                                        <span style={{ fontSize: 13 }}><span style={{ lineHeight: '1.5' }}><span style={{ color: '#333333' }}><span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}><span style={{ fontStyle: 'normal' }}><span style={{ fontVariantLigatures: 'normal' }}><span style={{ fontVariantCaps: 'normal' }}><span style={{ fontWeight: 400 }}><span style={{ letterSpacing: 'normal' }}><span style={{ orphans: 2 }}><span style={{ textTransform: 'none' }}><span style={{ whiteSpace: 'normal' }}><span style={{ widows: 2 }}><span style={{ wordSpacing: 0 }}><span style={{ backgroundColor: '#ffffff' }}><span style={{ textDecorationThickness: 'initial' }}><span style={{ textDecorationStyle: 'initial' }}><span style={{ textDecorationColor: 'initial' }}>Những
                                            năm
                                            qua,
                                            Samsung
                                            vẫn
                                            đang
                                            nỗ
                                            lực
                                            nghiên
                                            cứu
                                            để
                                            phát
                                            triển
                                            tốc
                                            độ
                                            kết
                                            nối
                                            trên
                                            những
                                            chiếc
                                            smartphone
                                            của
                                            mình.
                                            Samsung
                                            Galaxy
                                            S21
                                            Ultra
                                            5G
                                            tự
                                            hào
                                            là
                                            một
                                            trong
                                            những
                                            điện
                                            thoại
                                            thông
                                            minh
                                            đầu
                                            tiên
                                            hỗ
                                            trợ
                                            Wi-Fi
                                            6E.
                                            Nhờ
                                            được
                                            cung
                                            cấp
                                            nhiều
                                            băng
                                            thông
                                            hơn,
                                            kết
                                            nối
                                            Internet
                                            trên
                                            chiếc
                                            smartphone
                                            này
                                            nhanh
                                            hơn
                                            gấp
                                            4
                                            lần,
                                            người
                                            dùng
                                            có
                                            thể
                                            chia
                                            sẻ
                                            các
                                            nội
                                            dung
                                            chỉ
                                            trong
                                            nháy
                                            mắt.
                                            So
                                            với
                                            dòng
                                            Galaxy
                                            S20
                                            series,
                                            kết
                                            nối
                                            mạng
                                            5G
                                            trên
                                            Galaxy
                                            S21
                                            Ultra
                                            5G
                                            đã
                                            được
                                            cải
                                            thiện
                                            đáng
                                            kể.
                                            Nó
                                            đã
                                            giảm
                                            độ
                                            trễ
                                            kết
                                            nối
                                            xuống
                                            mức
                                            thấp
                                            nhất,
                                            cho
                                            người
                                            dùng
                                            trải
                                            nghiệm
                                            trực
                                            tuyến
                                            mượt
                                            mà
                                            hơn.
                                            Điện
                                            thoại
                                            Galaxy
                                            S21
                                            Ultra
                                            5G
                                            được
                                            trang
                                            bị
                                            con
                                            chip
                                            Exynos
                                            2100
                                            5nm
                                            mạnh
                                            mẽ
                                            và
                                            tiết
                                            kiệm
                                            năng
                                            lượng
                                            hơn.
                                            Nó
                                            cũng
                                            đi
                                            kèm
                                            với
                                            viên
                                            pin
                                            5000mAh
                                            có
                                            thể
                                            sạc
                                            đầy
                                            50%
                                            chỉ
                                            trong
                                            30
                                            phút.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                    </p>
                                </div>
                                <div className="show-more d-none">
                                    <div className="btn btn-default btn--view-more">
                                        <span className="more-text">Xem thêm <i className="fa fa-chevron-down" /></span>
                                        <span className="less-text">Thu gọn <i className="fa fa-chevron-up" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-content content_extab">
                            <div className="rte">
                                Nội dung tùy chỉnh viết ở đây
                            </div>
                        </div>
                        <div id="tab-3" className="tab-content content_extab tab-review-c">
                            <div className="rte">
                                <h4>
                                    Đánh giá <span>Samsung Galaxy Note 21</span>
                                </h4>
                                <div id="sapo-product-reviews" className="sapo-product-reviews" data-id={21989403}>
                                    <div id="sapo-product-reviews-noitem" style={{ display: 'none' }}>
                                        <div className="content">
                                            <p data-content-text="language.suggest_noitem" />
                                            <div className="product-reviews-summary-actions">
                                                <button type="button" className="btn-new-review" onclick="BPR.newReview(this); return false;" data-content-str="language.newreview" />
                                            </div>
                                            <div id="noitem-bpr-form_" data-id="formId" className="noitem-bpr-form" style={{ display: 'none' }}>
                                                <div className="sapo-product-reviews-form" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3">
                <div className="detail-right-box care-detail">
                    <div className="detail-right-box-title">Thông tin hữu ích</div>
                    <div className="detail-right-box-wrap">
                        <div className="care-detail-box">
                            <div className="care-detail-item bao-hanh-care">
                                <a href="#">
                                    <span>
                                        <img alt="Trung tâm bảo hành" height={12} width={16} src="../bizweb.dktcdn.net/100/429/689/themes/841362/assets/customer-support82b3.png?1646907197259" /></span>
                                    <span className="txt-e-c">Trung tâm bảo hành</span>
                                </a>
                            </div>
                            <div className="care-detail-item van-chuyen-care">
                                <a href="#">
                                    <span>
                                        <img alt="Thông tin vận chuyển" height={12} width={22} src="../bizweb.dktcdn.net/100/429/689/themes/841362/assets/delivery-truck82b3.png?1646907197259" /></span>
                                    <span className="txt-e-c">Thông tin vận chuyển</span>
                                </a>
                            </div>
                            <div className="care-detail-item thanh-toan-care">
                                <a href="#">
                                    <span>
                                        <img alt="Hướng dẫn thanh toán" height={12} width={18} src="../bizweb.dktcdn.net/100/429/689/themes/841362/assets/credit-card82b3.png?1646907197259" /></span>
                                    <span className="txt-e-c">Hướng dẫn thanh toán</span></a>
                            </div>
                            <div className="support-ask-title">Chat với chúng tôi</div>
                            <div className="support-ask-body">
                                <div className="support-ask-item">
                                    <span className="support-ask-icon"><a target="_blank" href="https://m.me/meta.vn" title="Chat Facebook" rel="noreferrer nofollow">
                                        <img className="lazyload" alt src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="../bizweb.dktcdn.net/100/429/689/themes/841362/assets/messenger-icon82b3.png?1646907197259" /></a></span>
                                    <span className="support-ask-name"><a target="_blank" href="https://m.me/boroncoweb" title="Chat Facebook" rel="noreferrer nofollow">Boronco Web</a></span>
                                </div>
                                <div className="support-ask-item">
                                    <span className="support-ask-icon"><a target="_blank" href="https://zalo.me/0388287614" title="Chat Zalo">
                                        <img className="lazyload" alt src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="../bizweb.dktcdn.net/100/429/689/themes/841362/assets/zalo-icon82b3.png?1646907197259" /></a></span>
                                    <span className="support-ask-name"><a target="_blank" href="https://zalo.me/0388287614" title="Chat Zalo với pocomart">0388287614</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-bar" style={{ marginTop: 20 }}>
                    <div className="blog-relatedbar d-none">
                        <div className="title"><a href="blogs/all/tagged/samsung-news.html" title="Tin liên quan">Tin liên quan</a></div>
                        <div className="clearfix" />
                        <div className="blog-bar-content" />
                    </div>
                </div>
                <div className="section-related-product">
                    <div className="section_prd_feature swiper-container swiper_related" id="sidebarproduct">
                        <div className="title_module section">
                            <h2 className="title-block">
                                <a href="samsung.html" title="Sản phẩm tương tự">Sản phẩm tương tự</a>
                            </h2>
                        </div>
                        <div className=" section products product_related swiper-wrapper">
                            <div className="item swiper-slide">
                                <div className="item_product_main">
                                    <form action="https://pocomart.mysapo.net/cart/add" method="post" className="variants product-action wishItem" data-cart-form data-id="product-actions-21988509" encType="multipart/form-data">
                                        <div className="product-thumbnail sale " data-sale="Giảm  
2% 
">
                                            <a className="image_thumb" href="samsung-galaxy-s21-ultra.html" title="Samsung Galaxy S21 Ultra">
                                                <picture>
                                                    <source media="(min-width: 1200px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/galaxy-s21-ultra-5g-black-didongviet.jpg?v=1623565189000" />
                                                    <source media="(min-width: 992px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/galaxy-s21-ultra-5g-black-didongviet.jpg?v=1623565189000" />
                                                    <source media="(min-width: 569px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/galaxy-s21-ultra-5g-black-didongviet.jpg?v=1623565189000" />
                                                    <source media="(max-width: 480px)" srcSet="//bizweb.dktcdn.net/thumb/medium/100/429/689/products/galaxy-s21-ultra-5g-black-didongviet.jpg?v=1623565189000" />
                                                    <source media="(max-width: 375px)" srcSet="//bizweb.dktcdn.net/thumb/compact/100/429/689/products/galaxy-s21-ultra-5g-black-didongviet.jpg?v=1623565189000" />
                                                    <img width={240} height={240} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="https://bizweb.dktcdn.net/100/429/689/products/galaxy-s21-ultra-5g-black-didongviet.jpg?v=1623565189000" alt="Samsung Galaxy S21 Ultra" className="lazyload img-responsive center-block" />
                                                </picture>
                                            </a>
                                            <div className="product-action">
                                                <div className="group_action">
                                                    <a href="javascript:void(0)" className="setWishlist btn-views" data-wish="samsung-galaxy-s21-ultra" tabIndex={0} title="Thêm vào yêu thích">
                                                        <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z" />
                                                        </svg>
                                                    </a>
                                                    <a href="javascript:void(0)" className="setCompare btn-views" data-compare="samsung-galaxy-s21-ultra" data-type="Smartphone" tabIndex={0} title="Thêm vào so sánh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                                                            <path d="M9,15H7c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v12C10,14.6,9.6,15,9,15z">
                                                            </path>
                                                            <path d="M1,9h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-4C0,9.4,0.4,9,1,9z">
                                                            </path>
                                                            <path d="M15,5h-2c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V6C16,5.4,15.6,5,15,5z">
                                                            </path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-name"><a href="samsung-galaxy-s21-ultra.html" title="Samsung Galaxy S21 Ultra">Samsung Galaxy S21
                                                Ultra</a></h3>
                                            <div className="price-box">
                                                <span className="price">25.000.000₫</span>
                                                <span className="compare-price">25.500.000₫</span>
                                                <div className="action-cart">
                                                    <input className="hidden" type="hidden" name="variantId" defaultValue={47259399} />
                                                    <button className="btn btn-cart btn-left  btn btn-views left-to" title="Xem thêm lựa chọn" type="button" onclick="window.location.href='samsung-galaxy-s21-ultra.html'">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" className="Capa_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 47 47" style={{ enableBackground: 'new 0 0 47 47' }} xmlSpace="preserve">
                                                            <g>
                                                                <g className="Layer_1_110_">
                                                                    <g>
                                                                        <path d="M17.567,15.938l-2.859-2.702c0.333-0.605,0.539-1.29,0.539-2.029c0-2.342-1.897-4.239-4.24-4.239     c-2.343,0-4.243,1.896-4.243,4.239c0,2.343,1.9,4.241,4.243,4.241c0.826,0,1.59-0.246,2.242-0.654l2.855,2.699     C16.536,16.922,17.023,16.399,17.567,15.938z" />
                                                                        <path d="M29.66,15.6l3.799-6.393c0.374,0.107,0.762,0.184,1.169,0.184c2.347,0,4.244-1.898,4.244-4.241     c0-2.342-1.897-4.239-4.244-4.239c-2.343,0-4.239,1.896-4.239,4.239c0,1.163,0.469,2.214,1.227,2.981l-3.787,6.375     C28.48,14.801,29.094,15.169,29.66,15.6z" />
                                                                        <path d="M42.762,20.952c-1.824,0-3.369,1.159-3.968,2.775l-5.278-0.521c0,0.04,0.006,0.078,0.006,0.117     c0,0.688-0.076,1.36-0.213,2.009l5.276,0.521c0.319,2.024,2.062,3.576,4.177,3.576c2.342,0,4.238-1.896,4.238-4.238     C47,22.85,45.104,20.952,42.762,20.952z" />
                                                                        <path d="M28.197,37.624l-1.18-5.156c-0.666,0.232-1.359,0.398-2.082,0.481l1.182,5.157c-1.355,0.709-2.29,2.11-2.29,3.746     c0,2.342,1.896,4.237,4.243,4.237c2.342,0,4.238-1.896,4.238-4.237C32.311,39.553,30.479,37.692,28.197,37.624z" />
                                                                        <path d="M14.357,25.37l-6.57,2.201c-0.758-1.158-2.063-1.926-3.548-1.926C1.896,25.645,0,27.542,0,29.884     c0,2.345,1.896,4.242,4.239,4.242c2.341,0,4.242-1.897,4.242-4.242c0-0.098-0.021-0.188-0.029-0.284l6.591-2.207     C14.746,26.752,14.51,26.077,14.357,25.37z" />
                                                                        <circle cx="23.83" cy="23.323" r="7.271" />
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g> </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 section-recenview-product">
                <div className="section_prd_feature swiper-container swiper_related recent-page-viewed">
                    <div className="title_module section">
                        <h2 className="title-block">
                            <span>Sản phẩm đã xem</span>
                        </h2>
                    </div>
                    <div className="products product_related recent-viewed  swiper-container">
                        <div className="swiper-wrapper">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
        </div>
    </div>
</section>
</div>`