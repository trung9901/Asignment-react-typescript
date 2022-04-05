import React from 'react'
import { NavLink } from 'react-router-dom';
import { isAuthenticate } from '../utils/localStorage';

type Props = {}

const Nav = (props: Props) => {
    const user = isAuthenticate();
    return (
        <div>

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
                                            <NavLink to="/">Trang chủ</NavLink>
                                            {/* <a className="a-img" href="/" title="Trang chủ">
                                                Trang chủ
                                            </a> */}
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink to="/gioi-thieu">Giới thiệu</NavLink>
                                            {/* <a className="a-img" href="/gioi-thieu" title="Giới thiệu">
                                                Giới thiệu
                                            </a> */}
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="a-img caret-down" to="/products">Sản phẩm</NavLink>
                                            {/* <a className="a-img caret-down" href="/collections/all" title="Sản phẩm">
                                                Sản phẩm
                                            </a> */}
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
                                                    <a href="/phu-kien-thiet-bi-so" title="Phụ kiện - Thiết bị số">
                                                        Phụ kiện - Thiết bị số
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/may-anh-quay-phim" title="Máy ảnh - Quay phim">
                                                        Máy ảnh - Quay phim
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/dien-gia-dung-nha-bep" title="Điện gia dụng - Nhà bếp">
                                                        Điện gia dụng - Nhà bếp
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/laptop-thiet-bi-it" title="Laptop - Thiết bị IT">
                                                        Laptop - Thiết bị IT
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/may-choi-game-tro-choi" title="Máy chơi game - Trò chơi">
                                                        Máy chơi game - Trò chơi
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/trang-suc-sanh-dieu" title="Trang sức - Sành điệu">
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
                                                    <a href="/nha-cua-doi-song" title="Nhà cửa đời sống">
                                                        Nhà cửa đời sống
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/sach-tieu-thuyet" title="Sách - Tiểu thuyết">
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

                                    <p>Xin chào {user?.user.email}!</p>
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

export default Nav