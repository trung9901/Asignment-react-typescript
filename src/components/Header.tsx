import React from 'react'
import Nav from './Nav'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-xl-3 col-md-3 col-6 col-logo">
                            <a href="/" className="logo">
                                <img width={170} height={43} src="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/logo.png?1646907197259" alt="pocomart" />
                            </a>
                        </div>
                        <div className="d-lg-none d-block col-2 order-3 menumobilebutton">
                            <div className="category-action">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="iconcate-action" x="0px" y="0px" viewBox="0 0 384.97 384.97" style={{ enableBackground: 'new 0 0 384.97 384.97' }} xmlSpace="preserve"> <g> <g id="Menu_1_"> <path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03    c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z" /> <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03    S379.58,180.455,372.939,180.455z" /> <path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606    c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z" /> </g> </g> </svg>
                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-7 col-md-5 col-10 col-search order-3 order-md-2">
                            <div className="theme-search-smart">
                                <div className="header_search theme-searchs">
                                    <form action="/search" className="input-group search-bar theme-header-search-form ultimate-search" role="search">
                                        <input type="text" aria-label="Tìm sản phẩm" name="query" defaultValue autoComplete="off" placeholder="Tìm kiếm sản phẩm..." className="search-auto input-group-field auto-search" required />
                                        <input type="hidden" name="type" defaultValue="product" />
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn icon-fallback-text" aria-label="Justify">
                                                <svg enableBackground="new 0 0 612.01 612.01" version="1.1" viewBox="0 0 612.01 612.01" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m606.21 578.71-158.01-155.49c41.378-44.956 66.802-104.41 66.802-169.84-0.02-139.95-115.3-253.39-257.51-253.39s-257.49 113.44-257.49 253.39 115.28 253.39 257.49 253.39c61.445 0 117.8-21.253 162.07-56.586l158.62 156.1c7.729 7.614 20.277 7.614 28.006 0 7.747-7.613 7.747-19.971 0.018-27.585zm-348.72-110.91c-120.33 0-217.87-95.993-217.87-214.41s97.543-214.41 217.87-214.41c120.33 0 217.87 95.993 217.87 214.41s-97.542 214.41-217.87 214.41z" />
                                                </svg>
                                            </button>
                                        </span>
                                    </form>
                                </div>
                            </div>
                            <div className="contact-phone">
                                <p>
                                    Tư vấn hỗ trợ
                                </p>
                                <a href="tel:19006750">19006750</a>
                            </div>
                            <div className="contact-phone account-header not">
                                <p>Xin chào!</p>
                                <a href="/account/login">Đăng nhập</a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 col-account order-2 order-md-3">
                            <ul className="group-account">
                                <li>
                                    <div className="icon">
                                        <a href="/yeu-thich" className="wishlist_header" title="Sản phẩm yêu thích">
                                            <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"> <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z" /> </svg>
                                            <span className="headerWishlistCount">0</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="cart-drop">
                                    <div className="icon">
                                        <a className="img_hover_cart" href="/cart" title="Giỏ hàng">
                                            <svg enableBackground="new 0 0 407.453 407.453" version="1.1" viewBox="0 0 407.45 407.45" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"> <g fill="#010002"> <path d="m255.1 116.52c4.487 0 8.129-3.633 8.129-8.129 0-4.495-3.642-8.129-8.129-8.129h-111.61c-4.487 0-8.129 3.633-8.129 8.129 0 4.495 3.642 8.129 8.129 8.129h111.61z" /> <path d="m367.06 100.26h-55.372c-4.487 0-8.129 3.633-8.129 8.129 0 4.495 3.642 8.129 8.129 8.129h47.243v274.68h-310.41v-274.68h44.536c4.487 0 8.129-3.633 8.129-8.129 0-4.495-3.642-8.129-8.129-8.129h-52.664c-4.487 0-8.129 3.633-8.129 8.129v290.94c0 4.495 3.642 8.129 8.129 8.129h326.67c4.487 0 8.129-3.633 8.129-8.129v-290.94c0-4.495-3.634-8.128-8.129-8.128z" /> <path d="m282.59 134.8c4.487 0 8.129-3.633 8.129-8.129v-59.273c-1e-3 -37.156-40.115-67.394-89.618-67.394-49.308 0-89.414 30.238-89.414 67.394v59.274c0 4.495 3.642 8.129 8.129 8.129s8.129-3.633 8.129-8.129v-59.274c0-28.198 32.823-51.137 73.36-51.137 40.334 0 73.157 22.939 73.157 51.137v59.274c-1e-3 4.495 3.633 8.128 8.128 8.128z" /> <path d="m98.892 147.57c0 11.526 9.389 20.907 20.923 20.907s20.923-9.38 20.923-20.907c0-4.495-3.642-8.129-8.129-8.129s-8.129 3.633-8.129 8.129c0 2.561-2.089 4.65-4.666 4.65-2.569 0-4.666-2.089-4.666-4.65 0-4.495-3.642-8.129-8.129-8.129s-8.127 3.634-8.127 8.129z" /> <path d="m282.59 168.47c11.534 0 20.923-9.38 20.923-20.907 0-4.495-3.642-8.129-8.129-8.129s-8.129 3.633-8.129 8.129c0 2.561-2.089 4.65-4.666 4.65s-4.666-2.089-4.666-4.65c0-4.495-3.642-8.129-8.129-8.129s-8.129 3.633-8.129 8.129c2e-3 11.526 9.39 20.907 20.925 20.907z" /> </g> </svg>
                                            <span className="count_item count_item_pr" />
                                        </a>
                                    </div>
                                    <div className="top-cart-content">
                                        <div className="CartHeaderContainer">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <a href="/so-sanh-san-pham" className="wishlist_header" title="So sánh sản phẩm">
                                            <svg width="419pt" height="419pt" viewBox="0 -45 419.24 419" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m359.08 102.91c1.4609 1.5391 3.4766 2.4375 5.6016 2.4844 2.125 0.050781 4.1797-0.75 5.7109-2.2227l46.414-44.898c1.5625-1.5117 2.4414-3.5938 2.4336-5.7656-0.003906-2.1758-0.89453-4.2539-2.4688-5.7539l-46.41-44.41c-3.1953-3.0547-8.2578-2.9414-11.312 0.25-1.4648 1.4922-2.2656 3.5156-2.2188 5.6055 0.046875 2.0898 0.9375 4.0742 2.4688 5.5l32.008 30.426h-64.273c-27.59 0.14453-53.539 13.133-70.191 35.137l-54.852 71.617-79.242-103.46c-1.4961-2.0156-3.8359-3.2305-6.3477-3.2891h-108.4c-4.418 0-8 3.582-8 8 0 4.418 3.582 8 8 8h104.45l79.449 104-79.449 104h-104.45c-4.418 0-8 3.582-8 8 0 4.418 3.582 8 8 8h108.4c2.5195-0.078125 4.8594-1.3086 6.3477-3.3359l79.242-103.41 54.812 71.617c16.66 22.012 42.625 35.004 70.23 35.133h64.273l-32.008 30.426c-2.3555 2.2344-3.1016 5.6875-1.8789 8.6992 1.2227 3.0078 4.1602 4.9648 7.4102 4.9258 2.0625-0.007813 4.043-0.8125 5.5312-2.2461l46.41-44.426c1.5742-1.5039 2.4648-3.5859 2.4688-5.7617 0.007813-2.1758-0.87109-4.2617-2.4336-5.7773l-46.414-44.91c-3.1758-3.0742-8.2422-2.9883-11.312 0.18359-3.0703 3.2539-2.9883 8.3633 0.1875 11.516l32.207 31.371h-64.441c-22.617-0.14062-43.875-10.816-57.5-28.875l-57.461-75.023 57.5-75.227c13.613-18.043 34.855-28.719 57.461-28.875h64.441l-32.207 31.371c-3.1758 3.1094-3.2578 8.1992-0.1875 11.414z" />
                                            </svg>
                                            <span className="headerCompareCount">0</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_nav_main header-menu d-none d-lg-block clearfix">
                <div className="container">
                    <div className="heade_menunavs">
                        <div className="wrap_main d-flex">
                            <div className="menu_mega indexs">
                                <div className="title_menu">
                                    <span className="title_">Danh mục sản phẩm</span>
                                </div>
                                <div className="list_menu_header col-lg-3 col-md-3">
                                    <ul className="ul_menu site-nav-vetical">
                                        <li className="nav_item lev-1 lv1 li_check">
                                            <a className="lazyload" data-src="//bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon1.png?v=1623548877697" href="/dien-thoai-may-tinh-bang" title="Điện thoại - Máy tính bảng">
                                                Điện thoại - Máy tính bảng
                                                <i className="fa fa-angle-right" />
                                            </a>
                                            <i className="fa fa-angle-down" />
                                            <ul className="ul_content_right_1 row">
                                                <li className="nav_item has-subnav lv2 col-lg-3 col-md-12">
                                                    <h4 className="text-normal">
                                                        <a href="javascript:;" title="Giảm giá cực hot" data-src="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/firex.png?1646907197259" className="lazyload hot">Giảm giá cực hot</a>
                                                    </h4>
                                                    <ul className="ul_content_right_2">
                                                        <li className="nav_item lv3">
                                                            <a href="/iphone-12-va-hang-loat-flagship-dang-giam-gia-cuc-manh" title="iPhone 12 và hàng loạt flagship đang giảm giá cực mạnh">iPhone 12 và hàng loạt flagship đang giảm giá cực mạnh</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav_item lv2 col-lg-3 col-md-12">
                                                    <h4>
                                                        <a href="/apple" title="Apple">Apple</a>
                                                    </h4>
                                                    <ul className="ul_content_right_2">
                                                        <li className="nav_item lv3"><a href="/iphone-x" title="iPhone X">iPhone X</a></li>
                                                        <li className="nav_item lv3"><a href="/iphone-11" title="iPhone 11">iPhone 11</a></li>
                                                        <li className="nav_item lv3"><a href="/iphone-12-mini" title="iPhone 12 mini">iPhone 12 mini</a></li>
                                                        <li className="nav_item lv3"><a href="/iphone-12-pro-max" title="iPhone 12 Pro Max">iPhone 12 Pro Max</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav_item lv2 col-lg-3 col-md-12">
                                                    <h4>
                                                        <a href="/samsung" title="Samsung">Samsung</a>
                                                    </h4>
                                                    <ul className="ul_content_right_2">
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Samsung Galaxy A">Samsung Galaxy A</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Samsung Galaxy Note">Samsung Galaxy Note</a></li>
                                                        <li className="nav_item lv3"><a href="/" title="Samsung Galaxy Ultra">Samsung Galaxy Ultra</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Samsung Galaxy S">Samsung Galaxy S</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav_item lv2 col-lg-3 col-md-12">
                                                    <h4>
                                                        <a href="/xiaomi" title="Xiaomi">Xiaomi</a>
                                                    </h4>
                                                    <ul className="ul_content_right_2">
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Xiaomi Mi 10">Xiaomi Mi 10</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Xiaomi Mi Max">Xiaomi Mi Max</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Xiaomi Poco Phone">Xiaomi Poco Phone</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Xiaomi Mi Note">Xiaomi Mi Note</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav_item lev-1 lv1 li_check">
                                            <a className="lazyload" data-src="//bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon2.png?v=1623549042517" href="/phu-kien-thiet-bi-so" title="Phụ kiện - Thiết bị số">Phụ kiện - Thiết bị số
                                            </a>
                                        </li>
                                        <li className="nav_item lev-1 lv1 li_check">
                                            <a className="lazyload" data-src="//bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon3.png?v=1623549208523" href="/may-anh-quay-phim" title="Máy ảnh - Quay phim">Máy ảnh - Quay phim
                                            </a>
                                        </li>
                                        <li className="nav_item lev-1 lv1 li_check">
                                            <a className="lazyload" data-src="//bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon4s.png?v=1623549444870" href="/dien-gia-dung-nha-bep" title="Điện gia dụng - Nhà bếp">Điện gia dụng - Nhà bếp
                                            </a>
                                        </li>
                                        <li className="nav_item lev-1 lv1 li_check">
                                            <a className="lazyload" data-src="//bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon5.png?v=1623549644967" href="/laptop-thiet-bi-it" title="Laptop - Thiết bị IT">Laptop - Thiết bị IT
                                            </a>
                                        </li>
                                        <li className="nav_item lev-1 lv1 li_check">
                                            <a className="lazyload" data-src="//bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon6.png?v=1623549755877" href="/may-choi-game-tro-choi" title="Máy chơi game - Trò chơi">Máy chơi game - Trò chơi
                                            </a>
                                        </li>
                                        <li className="nav_item lev-1 lv1 li_check">
                                            <a className="lazyload" data-src="//bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon7.png?v=1623549900997" href="/trang-suc-sanh-dieu" title="Trang sức - Sành điệu">Trang sức - Sành điệu
                                            </a>
                                        </li>
                                        <li className="nav_item lev-1 lv1 li_check">
                                            <a className="lazyload" data-src="//bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon8.png?v=1623550072027" href="/thoi-trang-lam-dep" title="Thời trang - Làm đẹp">
                                                Thời trang - Làm đẹp
                                                <i className="fa fa-angle-right" />
                                            </a>
                                            <i className="fa fa-angle-down" />
                                            <ul className="ul_content_right_1 row">
                                                <li className="nav_item has-subnav lv2 col-lg-3 col-md-12">
                                                    <h4 className="text-normal">
                                                        <a href="javascript:;" title="Ưu đãi khai trương" data-src="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/new.png?1646907197259" className="lazyload hot">Ưu đãi khai trương</a>
                                                    </h4>
                                                    <ul className="ul_content_right_2">
                                                        <li className="nav_item lv3">
                                                            <a href="/san-pham-khuyen-mai" title="sản phẩm khuyến mãi">sản phẩm khuyến mãi</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav_item lv2 col-lg-3 col-md-12">
                                                    <h4>
                                                        <a href="/thoi-trang-nu" title="Thời trang nữ">Thời trang nữ</a>
                                                    </h4>
                                                    <ul className="ul_content_right_2">
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Áo Croptop Nữ">Áo Croptop Nữ</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Đầm Dáng Xòe">Đầm Dáng Xòe</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Áo Khoác Cardigan Nữ">Áo Khoác Cardigan Nữ</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Quần Ống Rộng Nữ">Quần Ống Rộng Nữ</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav_item lv2 col-lg-3 col-md-12">
                                                    <h4>
                                                        <a href="/thoi-trang-nam" title="Thời trang nam">Thời trang nam</a>
                                                    </h4>
                                                    <ul className="ul_content_right_2">
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Sơ Mi Ngắn Tay">Sơ Mi Ngắn Tay</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Áo Hoodies Nam">Áo Hoodies Nam</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Áo Thun Ngắn Tay">Áo Thun Ngắn Tay</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Áo thun dài tay">Áo thun dài tay</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav_item lv2 col-lg-3 col-md-12">
                                                    <h4>
                                                        <a href="/dong-ho-trang-suc" title="Đồng hồ & Trang sức">Đồng hồ &amp; Trang sức</a>
                                                    </h4>
                                                    <ul className="ul_content_right_2">
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Đồng hồ cho nam">Đồng hồ cho nam</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Đồng hồ cho nữ">Đồng hồ cho nữ</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Đồng hồ đôi">Đồng hồ đôi</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Nhẫn đôi">Nhẫn đôi</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav_item lv2 col-lg-3 col-md-12">
                                                    <h4>
                                                        <a href="/giay-dep-nu" title="Giày dép nữ">Giày dép nữ</a>
                                                    </h4>
                                                    <ul className="ul_content_right_2">
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Guốc cao gót">Guốc cao gót</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Giày đế bệt">Giày đế bệt</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Giày bupbe">Giày bupbe</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Giày cổ cao nữ">Giày cổ cao nữ</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav_item lv2 col-lg-3 col-md-12">
                                                    <h4>
                                                        <a href="/giay-dep-nam" title="Giày dép nam">Giày dép nam</a>
                                                    </h4>
                                                    <ul className="ul_content_right_2">
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Giày tăng chiều cao">Giày tăng chiều cao</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Giày lười">Giày lười</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Giày thể thao">Giày thể thao</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Giày da">Giày da</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav_item lv2 col-lg-3 col-md-12">
                                                    <h4>
                                                        <a href="/phu-kien-thoi-trang" title="Phụ kiện thời trang">Phụ kiện thời trang</a>
                                                    </h4>
                                                    <ul className="ul_content_right_2">
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Vòng cổ bạc">Vòng cổ bạc</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Lắc tay bạc">Lắc tay bạc</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Khuyên tai">Khuyên tai</a></li>
                                                        <li className="nav_item lv3"><a href="/collections/all" title="Nơ buộc tóc">Nơ buộc tóc</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav_item lev-1 lv1 li_check">
                                            <a className="lazyload" data-src="//bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon9s.png?v=1623550441417" href="/nha-cua-doi-song" title="Nhà cửa đời sống">Nhà cửa đời sống
                                            </a>
                                        </li>
                                        <li className="nav_item lev-1 lv1 li_check">
                                            <a className="lazyload" data-src="//bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon10.png?v=1623550646920" href="/sach-tieu-thuyet" title="Sách - Tiểu thuyết">Sách - Tiểu thuyết
                                            </a>
                                        </li>
                                        <li className="lev-1 xemthem hidden-lgg nav_item clearfix ">
                                            <a className="lazyload" data-src="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/plus.svg?1646907197259" href="javascript:;">
                                                Xem thêm
                                            </a>
                                        </li>
                                        <li className="lev-1 thugon hidden-lgg nav_item clearfix ">
                                            <a className="lazyload" data-src="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/minus.svg?1646907197259" href="javascript:;">
                                                Thu gọn
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-header-nav">
                                <nav className="header-nav">
                                    <ul className="item_big">
                                        <li className="nav-item active ">
                                            <a className="a-img" href="/" title="Trang chủ">
                                                Trang chủ
                                            </a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="a-img" href="/gioi-thieu" title="Giới thiệu">
                                                Giới thiệu
                                            </a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="a-img caret-down" href="/collections/all" title="Sản phẩm">
                                                Sản phẩm
                                            </a>
                                            <i className="fa fa-caret-down" />
                                            <ul className="item_small">
                                                <li>
                                                    <a className="caret-down" href="/dien-thoai-may-tinh-bang" title="Điện thoại - Máy tính bảng">
                                                        Điện thoại - Máy tính bảng
                                                    </a>
                                                    <i className="fa fa-caret-down" />
                                                    <ul>
                                                        <li>
                                                            <a href="/apple" title="Apple" className="a3">Apple</a>
                                                        </li>
                                                        <li>
                                                            <a href="/samsung" title="Samsung" className="a3">Samsung</a>
                                                        </li>
                                                        <li>
                                                            <a href="/xiaomi" title="Xiaomi" className="a3">Xiaomi</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className href="/phu-kien-thiet-bi-so" title="Phụ kiện - Thiết bị số">
                                                        Phụ kiện - Thiết bị số
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className href="/may-anh-quay-phim" title="Máy ảnh - Quay phim">
                                                        Máy ảnh - Quay phim
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className href="/dien-gia-dung-nha-bep" title="Điện gia dụng - Nhà bếp">
                                                        Điện gia dụng - Nhà bếp
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className href="/laptop-thiet-bi-it" title="Laptop - Thiết bị IT">
                                                        Laptop - Thiết bị IT
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className href="/may-choi-game-tro-choi" title="Máy chơi game - Trò chơi">
                                                        Máy chơi game - Trò chơi
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className href="/trang-suc-sanh-dieu" title="Trang sức - Sành điệu">
                                                        Trang sức - Sành điệu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="caret-down" href="/thoi-trang-lam-dep" title="Thời trang - Làm đẹp">
                                                        Thời trang - Làm đẹp
                                                    </a>
                                                    <i className="fa fa-caret-down" />
                                                    <ul>
                                                        <li>
                                                            <a href="/thoi-trang-nu" title="Thời trang nữ" className="a3">Thời trang nữ</a>
                                                        </li>
                                                        <li>
                                                            <a href="/thoi-trang-nam" title="Thời trang nam" className="a3">Thời trang nam</a>
                                                        </li>
                                                        <li>
                                                            <a href="/dong-ho-trang-suc" title="Đồng hồ & Trang sức" className="a3">Đồng hồ &amp; Trang sức</a>
                                                        </li>
                                                        <li>
                                                            <a href="/giay-dep-nu" title="Giày dép nữ" className="a3">Giày dép nữ</a>
                                                        </li>
                                                        <li>
                                                            <a href="/giay-dep-nam" title="Giày dép nam" className="a3">Giày dép nam</a>
                                                        </li>
                                                        <li>
                                                            <a href="/phu-kien-thoi-trang" title="Phụ kiện thời trang" className="a3">Phụ kiện thời trang</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className href="/nha-cua-doi-song" title="Nhà cửa đời sống">
                                                        Nhà cửa đời sống
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className href="/sach-tieu-thuyet" title="Sách - Tiểu thuyết">
                                                        Sách - Tiểu thuyết
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="a-img caret-down" href="/tin-moi-nhat" title="Tin mới nhất">
                                                Tin mới nhất
                                            </a>
                                            <i className="fa fa-caret-down" />
                                            <ul className="item_small">
                                                <li>
                                                    <a className="caret-down" href="/tin-tuc" title="Tin tức">
                                                        Tin tức
                                                    </a>
                                                    <i className="fa fa-caret-down" />
                                                    <ul>
                                                        <li>
                                                            <a href="/doi-song" title="Đời sống" className="a3">Đời sống</a>
                                                        </li>
                                                        <li>
                                                            <a href="/giao-duc" title="Giáo dục" className="a3">Giáo dục</a>
                                                        </li>
                                                        <li>
                                                            <a href="/khuyen-mai" title="Khuyến mãi" className="a3">Khuyến mãi</a>
                                                        </li>
                                                        <li>
                                                            <a href="/su-kien" title="Sự kiện" className="a3">Sự kiện</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="a-img" href="/cau-hoi-thuong-gap" title="Câu hỏi thường gặp">
                                                Câu hỏi thường gặp
                                            </a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="a-img" href="/tuyen-dung" title="Tuyển dụng">
                                                Tuyển dụng
                                            </a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="a-img" href="/lien-he" title="Liên hệ">
                                                Liên hệ
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="contactbar">
                            <div className="incontact">
                                <div className="contact-phone">
                                    <p>
                                        Tư vấn hỗ trợ
                                    </p>
                                    <a href="tel:19006750">19006750</a>
                                </div>
                                <div className="contact-phone account-header not">
                                    <p>Xin chào!</p>
                                    <a href="/account/login">Đăng nhập</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header