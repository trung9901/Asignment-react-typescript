import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { read } from '../../api/Product';
import { ProductType } from '../../types/Product';
import { addToCart, removeItemInCart } from './../../utils/localStorage';
import { toast } from 'react-toastify';
import { list } from './../../api/Product';


type Props = {
    onAddToCart: (cart: any) => void;
}

const ProductDetail = (props: Props) => {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [product, setProduct] = useState<any>()

    useEffect(() => {

        const getProduct = async () => {
            const { data } = await read(id);
            setProduct(data)
        }
        getProduct();
    }, [id])
    return (
        <div>
            <div className="main-index py-4">

                <section className="product details-main" itemScope itemType="https://schema.org/Product">

                    <div id="dvProductPricing" className="ProductDetailsPricing d-none" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                        <meta itemProp="seller" content="pocomart" />
                        <link itemProp="availability" href="http://schema.org/InStock" />
                        <meta itemProp="priceCurrency" content="VND" />
                        <meta itemProp="price" />
                        <meta itemProp="url" content="//pocomart.mysapo.net/samsung-galaxy-note-21" />
                        <div className="inventory_quantity d-none" itemScope itemType="http://schema.org/ItemAvailability">
                            <span className="a-stock" itemProp="supersededBy">
                                Còn hàng
                            </span>
                        </div>
                        <meta itemProp="priceSpecification" />
                        <meta itemProp="priceValidUntil" content="2099-01-01" />
                    </div>

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
                                        <div className="">
                                            <img src="https://bizweb.dktcdn.net/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-7 details-pro">
                                        <h1 className="fw-bold">{product?.name}</h1>
                                        <div className="sapo-product-reviews-badge"  >
                                        </div>
                                        <div className="product-top clearfix">
                                            <div className="sku-product clearfix ">
                                                <span itemProp="brand" itemType="http://schema.org/Brand" itemScope>
                                                    <meta itemProp="name" content="Samsung" />Thương hiệu:
                                                    <strong className="mx-2">Samsung</strong>
                                                </span>
                                                <span className="mx-3" itemProp="sku" >Mã sản phẩm:
                                                    <strong className="mx-2">ssultra-6x</strong></span>
                                            </div>
                                        </div>
                                        <div className="group-power">
                                            <div className="inventory_quantity d-none">
                                                <span className="a-stock a2">
                                                    <link itemProp="availability" href="http://schema.org/InStock" />Còn hàng
                                                </span>
                                            </div>
                                            <div className="price-box clearfix mt-3">
                                                <span className="special-price">
                                                    <span className="fw-bold fs-2 text-danger">{product?.price}₫</span>
                                                </span> {/* Giá Khuyến mại */}
                                                <span className="old-price mx-3">
                                                    Giá niêm yết:
                                                    <del className="price product-price-old">
                                                        30.500.000₫
                                                    </del>
                                                </span> {/* Giás gốc */}
                                                <span className="save-price block text-success">Tiết kiệm:
                                                    <span className="price product-price-save text-danger mx-1">1.500.000₫</span> so với giá thị
                                                    trường
                                                </span> {/* Tiết kiệm */}
                                            </div>
                                        </div>
                                        <div className="km-hot bg-light border border-0 rounded-3 p-2">
                                            <div className="box-km">
                                                <h2 className="title_km">
                                                    <span className="text-danger fs-4 fw-bold">Khuyến mãi - ưu đãi</span>
                                                </h2>
                                                <div className="box-promotion">
                                                    <p>- Tặng ngay tai nghe iDot trị giá 1 triệu</p>
                                                    <p>- Tặng ốp lưng chống sốc</p>
                                                    <p>- Tặng phiếu mua hàng trị giá 2.000.000đ</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* form------------------------------------------------------------------------------ */}

                                        <div className="">
                                            <div className="box-variant clearfix  d-none ">
                                                {/* <input type="hidden" id="one_variant" name="variantId" defaultValue={47262129} /> */}
                                            </div>
                                            <div className="clearfix from-action-addcart ">
                                                <div className="qty-ant clearfix custom-btn-number ">
                                                    <label className="d-none">Số lượng:</label>
                                                    <div className="custom custom-btn-numbers clearfix input_number_product">
                                                        <button className="btn-minus btn-cts" type="button">–</button>
                                                        <input aria-label="Số lượng" type="text" className="qty input-text " id="qty" name="quantity" size={3} defaultValue={1} maxLength={3} />
                                                        <button className="btn-plus btn-cts" type="button">+</button>
                                                    </div>
                                                </div>
                                                <div className=" d-flex gap-3 mt-3">
                                                    {/* data */}
                                                    {/* <input type="hidden" {...register('name')} value={`${product?.name}`} />
                                                        <input type="hidden" {...register('price')} value={`${product?.price}`} /> */}
                                                    {/* data */}
                                                    <button className="btn btn-danger " onClick={() => props.onAddToCart(product._id)} >Thêm vào
                                                        giỏ<span className="block" >Cam kết chính hãng / đổi trả 24h</span></button>
                                                    <button type="button" className="btn btn-success">Mua ngay<span className="block">Thanh
                                                        toán nhanh chóng</span></button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-lg-3">

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
                                                        <div className="product-thumbnail sale " data-sale="Giảm 2% ">
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
                                                                    <button className="btn btn-cart btn-left  btn btn-views left-to" title="Xem thêm lựa chọn" type="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" className="Capa_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 47 47" xmlSpace="preserve">
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
            </div>
        </div>
    )
}

export default ProductDetail;

