import React from 'react'

type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <header className="header header_menu clearfix">
                <div className="mid-header wid_100 clearfix">
                    <div className="content_header">
                        <div className="header-main clearfix clearfix">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-8 col-sm-12 col-12 relative">
                                        <div className="button_mobile menubutton">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        <div className="logo_center">
                                            <div className="logo">
                                                <a href="index.html" className="logo-wrapper ">
                                                    <img src="./public/bizweb.dktcdn.net/100/393/384/themes/844266/assets/logob338.png?1646297888986" alt="logo Template Bất Động Sản" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-md-4 col-0 col-sm-0">
                                        <div className="head_nav">
                                            <div className="wrap_main">
                                                <div className="header-nav">
                                                    <ul className="item_big ">
                                                        <li className="nav-item  active ">
                                                            <a className="a-img" href="index.html" title="Trang chủ">
                                                                <span>Trang chủ</span>
                                                            </a>
                                                        </li>
                                                        <li className="nav-item ">
                                                            <a className="a-img" href="gioi-thieu.html" title="Giới thiệu">
                                                                <span>Giới thiệu</span>
                                                            </a>
                                                        </li>
                                                        <li className="nav-item ">
                                                            <a className="a-img" href="san-pham-noi-bat.html" title="Sản phẩm">
                                                                <span>Sản phẩm</span><i className="fa fa-angle-down" />
                                                            </a>
                                                            <ul className="item_small">
                                                                <li>
                                                                    <a href="san-pham-noi-bat.html" title="Căn hộ chung cư">Căn
                                                                        hộ chung cư </a>
                                                                </li>
                                                                <li>
                                                                    <a href="nha-rieng.html" title="Nhà riêng">Nhà riêng </a>
                                                                </li>
                                                                <li>
                                                                    <a href="biet-thu.html" title="Biệt thự liền kề">Biệt thự
                                                                        liền kề </a>
                                                                </li>
                                                                <li>
                                                                    <a href="nha-mat-pho.html" title="Nhà mặt phố">Nhà mặt phố
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="san-pham-moi.html" title="Đất nền dự án">Đất nền dự
                                                                        án </a>
                                                                </li>
                                                                <li>
                                                                    <a href="trang-trai-nghi-duong.html" title="Trang trại,khu nghỉ dưỡng">Trang trại,khu nghỉ
                                                                        dưỡng </a>
                                                                </li>
                                                                <li>
                                                                    <a href="kho-nha-xuong.html" title="Kho,nhà xưởng">Kho,nhà
                                                                        xưởng </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="nav-item ">
                                                            <a className="a-img" href="tin-tuc.html" title="Tin tức">
                                                                <span>Tin tức</span>
                                                            </a>
                                                        </li>
                                                        <li className="nav-item ">
                                                            <a className="a-img" href="lien-he.html" title="Liên hệ">
                                                                <span>Liên hệ</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="phonebar ">
                                                        <a className="fone" href="tel:19006750" title="Liên hệ tư vấn">Đăng ký</a>
                                                        <a href="">Đăng nhập </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div className="body">

                <section className="awe-section-1">
                    <section className="sectionslider clearfix">
                        <div className="section home-slider">
                            <div className="items">
                                <p>
                                    Cách tiếp cận bất động sản nhanh nhất
                                </p>
                                <a href="#">
                                    <picture>
                                        <source media="(min-width: 1200px)" srcSet="../bizweb.dktcdn.net/100/393/384/themes/844266/assets/slider_1b338.jpg?1646297888986" />
                                        <source media="(min-width: 992px)" srcSet="../bizweb.dktcdn.net/100/393/384/themes/844266/assets/slider_1b338.jpg?1646297888986" />
                                        <source media="(min-width: 569px)" srcSet="../bizweb.dktcdn.net/100/393/384/themes/844266/assets/slider_1b338.jpg?1646297888986" />
                                        <source media="(min-width: 480px)" srcSet="../bizweb.dktcdn.net/thumb/large/100/393/384/themes/844266/assets/slider_1b338.jpg?1646297888986" />
                                        <img className="lazyload" src="../bizweb.dktcdn.net/thumb/large/100/393/384/themes/844266/assets/slider_1b338.jpg?1646297888986" alt="Cách tiếp cận bất động sản nhanh nhất" />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div className="module_search_pro">
                            <div className="container">
                                <div className="clearfix search_advan">
                                    <div className="option_top a-center clearfix">
                                        <span data-text="bán" className="active">Nhà đất bán</span>
                                        <span data-text="thuê">Nhà đất cho thuê</span>
                                    </div>
                                    <div className="group_insearch clearfix">
                                        <div className="group_block group_2 advance_normal clearfix">
                                            <div className="group_block group_option group_1 advance_normal">
                                                <select name="option1" id="option_1">
                                                    <option>Loại nhà đất</option>
                                                    <option data-link="Biệt thự" value="Biệt thự">Biệt thự</option>
                                                    <option data-link="Căn hộ" value="Căn hộ">Căn hộ</option>
                                                    <option data-link="Chung cư" value="Chung cư">Chung cư</option>
                                                    <option data-link="Chung cư cao cấp" value="Chung cư cao cấp">Chung cư cao cấp
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="wrap_option_search">
                                                <div className="input-group search_form">
                                                    <input type="text" name="query" defaultValue required placeholder="Nhập địa điểm hoặc từ khóa (Ví dụ: Vinhomes)... " className="input-group-field st-default-search-input search-text tdq_input" autoComplete="off" />
                                                </div>
                                                <div className="actionmobile">
                                                    <div className="advance_option offFunction clearfix" style={{ display: 'none' }}>
                                                    </div>
                                                </div>
                                                <div className="button_search_sm">
                                                    <button className="bds_search"><i className="fa fa-search" />Tìm kiếm</button>
                                                </div>
                                            </div>
                                            <div className="action_pro">
                                                Thêm <i className="fa fa-angle-down" />
                                            </div>
                                        </div>
                                        <div className="advance_option pc offFunction clearfix" style={{ display: 'none' }}>
                                            <div className="option_ advance_1 group_option">
                                                <select name="category1" id="category1">
                                                    <option value>Tỉnh/thành phố</option>
                                                    <option data-link={2267425} value="/ha-noi">Hà Nội</option>
                                                    <option data-link={2267432} value="/nha-trang">Nha Trang</option>
                                                    <option data-link={2267430} value="/ho-chi-minh">Hồ Chí Minh</option>
                                                    <option data-link={2267434} value="/da-nang">Đà Nẵng</option>
                                                </select>
                                            </div>
                                            <div className="option_ advance_2 group_option">
                                                <select className="subcat" id="category2" name="category2">
                                                    <option disabled="disabled" selected="selected">Quận/huyện</option>
                                                    <optgroup label="Quận/huyện" data-rel="/ha-noi">
                                                        <option data-childlink="Cầu%20Giấy" value="Cầu Giấy">Cầu Giấy</option>
                                                        <option data-childlink="Hoàng%20Mai" value="Hoàng Mai">Hoàng Mai</option>
                                                        <option data-childlink="Long%20Biên" value="Long Biên">Long Biên</option>
                                                        <option data-childlink="Nam%20Từ%20Liêm" value="Nam Từ Liêm">Nam Từ Liêm
                                                        </option>
                                                        <option data-childlink="Nguyễn%20Văn%20Linh" value="Nguyễn Văn Linh">Nguyễn
                                                            Văn Linh</option>
                                                        <option data-childlink="Nội%20Bài" value="Nội Bài">Nội Bài</option>
                                                        <option data-childlink="Phạm%20Hùng" value="Phạm Hùng">Phạm Hùng</option>
                                                        <option data-childlink="Trần%20Duy%20Hưng" value="Trần Duy Hưng">Trần Duy
                                                            Hưng</option>
                                                    </optgroup>
                                                    <optgroup label="Quận/huyện" data-rel="/nha-trang">
                                                        <option data-childlink="Cam%20Ranh" value="Cam Ranh">Cam Ranh</option>
                                                    </optgroup>
                                                    <optgroup label="Quận/huyện" data-rel="/ho-chi-minh">
                                                        <option data-childlink="Phạm%20Văn%20Đồng" value="Phạm Văn Đồng">Phạm Văn
                                                            Đồng</option>
                                                        <option data-childlink="Phú%20Mỹ%20Hưng" value="Phú Mỹ Hưng">Phú Mỹ Hưng
                                                        </option>
                                                        <option data-childlink="Tân%20Bình" value="Tân Bình">Tân Bình</option>
                                                    </optgroup>
                                                    <optgroup label="Quận/huyện" data-rel="/da-nang">
                                                        <option data-childlink="Cam%20Ranh" value="Cam Ranh">Cam Ranh</option>
                                                        <option data-childlink="Phạm%20Văn%20Đồng" value="Phạm Văn Đồng">Phạm Văn
                                                            Đồng</option>
                                                        <option data-childlink="Tân%20Bình" value="Tân Bình">Tân Bình</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                            <div className="option_ advance_dientich group_option">
                                                <select name="category3" id="category3">
                                                    <option value>Diện tích</option>
                                                    <option data-link="Dưới%2020m2" value="Dưới 20m2">Dưới 20m2</option>
                                                    <option data-link="20%20-%2050m2" value="20 - 50m2">20 - 50m2</option>
                                                    <option data-link="Trên%2050m2" value="Trên 50m2">Trên 50m2</option>
                                                    <option data-link="Trên%20100m2" value="Trên 100m2">Trên 100m2</option>
                                                    <option data-link="Trên%20200m2" value="Trên 200m2">Trên 200m2</option>
                                                    <option data-link="Trên%20300m2" value="Trên 300m2">Trên 300m2</option>
                                                </select>
                                            </div>
                                            <div className="option_ advance_price group_option">
                                                <select name="category4" id="category4">
                                                    <option value>Giá</option>
                                                    <option data-link="(<10000000)">Dưới 10.000.000đ</option>
                                                    <option data-link="(>=10000000%20AND%20<=50000000)">Từ 10.000.000đ - 50.000.000đ
                                                    </option>
                                                    <option data-link="(>=50000000%20AND%20<=100000000)">Từ 50.000.000đ -
                                                        100.000.000đ</option>
                                                    <option data-link="(>=100000000%20AND%20<=500000000)">Từ 100.000.000đ -
                                                        500.000.000đ</option>
                                                    <option data-link="(>=500000000%20AND%20<=1000000000)">Từ 500.000.000đ -
                                                        1.000.000.000đ</option>
                                                    <option data-link="(>=1000000000%20AND%20<=10000000000)">Từ 1.000.000.000đ -
                                                        10.000.000.000đ</option>
                                                    <option data-link="(>10000000000)">Trên 10.000.000.000đ</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="collections_link a-center clearfix">
                                    <div className="section group_collection cleafix">
                                        <div className="item_types">
                                            <div className="icon clearfix">
                                                <a className="thumb_icon" href="san-pham-noi-bat.html">
                                                    <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/collection_1.png?1646297888986" alt="Căn hộ" />
                                                </a>
                                            </div>
                                            <h3 className="h3 clearfix">
                                                <a href="san-pham-noi-bat.html" title="Căn hộ">Căn hộ</a>
                                            </h3>
                                        </div>
                                        <div className="item_types">
                                            <div className="icon clearfix">
                                                <a className="thumb_icon" href="san-pham-noi-bat.html">
                                                    <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/collection_2.png?1646297888986" alt="Biệt thự" />
                                                </a>
                                            </div>
                                            <h3 className="h3 clearfix">
                                                <a href="san-pham-noi-bat.html" title="Biệt thự">Biệt thự</a>
                                            </h3>
                                        </div>
                                        <div className="item_types">
                                            <div className="icon clearfix">
                                                <a className="thumb_icon" href="san-pham-noi-bat.html">
                                                    <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/collection_3.png?1646297888986" alt="Chung cư" />
                                                </a>
                                            </div>
                                            <h3 className="h3 clearfix">
                                                <a href="san-pham-noi-bat.html" title="Chung cư">Chung cư</a>
                                            </h3>
                                        </div>
                                        <div className="item_types">
                                            <div className="icon clearfix">
                                                <a className="thumb_icon" href="san-pham-noi-bat.html">
                                                    <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/collection_4.png?1646297888986" alt="Nhà phố" />
                                                </a>
                                            </div>
                                            <h3 className="h3 clearfix">
                                                <a href="san-pham-noi-bat.html" title="Nhà phố">Nhà phố</a>
                                            </h3>
                                        </div>
                                        <div className="item_types">
                                            <div className="icon clearfix">
                                                <a className="thumb_icon" href="san-pham-noi-bat.html">
                                                    <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/collection_5.png?1646297888986" alt="Văn phòng" />
                                                </a>
                                            </div>
                                            <h3 className="h3 clearfix">
                                                <a href="san-pham-noi-bat.html" title="Văn phòng">Văn phòng</a>
                                            </h3>
                                        </div>
                                        <div className="item_types">
                                            <div className="icon clearfix">
                                                <a className="thumb_icon" href="san-pham-noi-bat.html">
                                                    <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/collection_6.png?1646297888986" alt="Cửa hàng" />
                                                </a>
                                            </div>
                                            <h3 className="h3 clearfix">
                                                <a href="san-pham-noi-bat.html" title="Cửa hàng">Cửa hàng</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>


                <section className="awe-section-2">
                    <section className="section_bds_choban clearfix">
                        <div className="container">
                            <h2 className="title">
                                <a href="nha-dat-ban.html" title="Bất động sản cho bán">Bất động sản <span className="cl">cho
                                    bán</span></a>
                            </h2>
                            <div className="clearfix contentpr">
                                <div className="slickwrap slick_three_row">
                                    <div className="item">
                                        <div className="item_product_main product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-19146157" encType="multipart/form-data">
                                                <div className="product-thumbnail clearfix">
                                                    <a className="image_thumb" href="chung-cu-vinhomes-metropolis.html" title="Chung cư Vinhomes Metropolis">
                                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/products/pd-33-b87af972-29aa-498a-966a-424d6392043b.jpg?v=1600222084000" alt="Chung cư Vinhomes Metropolis" />
                                                    </a>
                                                    <span className="lb ban">Cho bán</span>
                                                    <p className="sum">
                                                        Vinhomes Metropolis là khu căn hộ cao cấp tại Vinhomes Metropolis do chủ đầu
                                                        tư Vingroup xây dựng và phát triển với quy mô 7 tòa căn hộ cao 9-15 t...
                                                    </p>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="chung-cu-vinhomes-metropolis.html" title="Chung cư Vinhomes Metropolis">Chung cư Vinhomes Metropolis</a>
                                                    </h3>
                                                    <ul className="clearfix profile">
                                                        <li className="position lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/position.png?1646297888986">
                                                            13 &nbsp;Phú Mỹ Hưng, Quận 7, Thành phố HCM</li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> trên 300m2
                                                        </li>
                                                    </ul>
                                                    <div className="clearfix price_button">
                                                        <div className="price-box">
                                                            <span className="product-price product-price-convert">57.000.000₫</span>
                                                        </div>
                                                        <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="chung-cu-vinhomes-metropolis.html">
                                                            Mua theo lô <i className="fa fa-angle-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_main product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-19146111" encType="multipart/form-data">
                                                <div className="product-thumbnail clearfix">
                                                    <a className="image_thumb" href="can-ho-opal-star.html" title="Căn hộ Opal Star">
                                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/products/pd-8-2268ee34-b7cc-40df-88f8-d31c476a5ac2.jpg?v=1600221121000" alt="Căn hộ Opal Star" />
                                                    </a>
                                                    <span className="lb thue">Cho thuê</span>
                                                    <span className="lb hot">Hot</span>
                                                    <p className="sum">
                                                        Không những được mệnh danh là tuyến đường nội đô đẹp nhất TP.HCM – Phạm Văn
                                                        Đồng, còn lã cửa ngõ trọng tâm nối liền khu tam giác vàng TP.HCM, Đồng...
                                                    </p>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="can-ho-opal-star.html" title="Căn hộ Opal Star">Căn hộ Opal Star</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="position lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/position.png?1646297888986">
                                                            Phạm Văn Đồng,Quận Bình Thạnh,Hồ Chí MInh</li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 01
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> Trên 50m2
                                                        </li>
                                                    </ul>
                                                    <div className="clearfix price_button">
                                                        <div className="price-box">
                                                            <span className="product-price product-price-convert">105.000.000₫</span>
                                                        </div>
                                                        <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="can-ho-opal-star.html">
                                                            Mua theo lô <i className="fa fa-angle-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_main product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18305108" encType="multipart/form-data">
                                                <div className="product-thumbnail clearfix">
                                                    <a className="image_thumb" href="chung-cu-the-manor-central-park.html" title="Chung cư The Manor Central Park">
                                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/products/pd-43.jpg?v=1592554456000" alt="Chung cư The Manor Central Park" />
                                                    </a>
                                                    <span className="lb ban">Cho bán</span>
                                                    <span className="lb hot">Hot</span>
                                                    <p className="sum">
                                                        The Manor Central Park là tổ hợp dự án cao cấp bậc nhất Hà Nội nằm tại vị
                                                        trí đắc địa trên mặt đường Nguyễn Xiển, Đại Kim, Hoàng Mai, Hà Nội
                                                    </p>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="chung-cu-the-manor-central-park.html" title="Chung cư The Manor Central Park">Chung cư The Manor Central
                                                        Park</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="position lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/position.png?1646297888986">
                                                            Nguyễn Xiển, Đại Kim, Hoàng Mai,Hà Nội</li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> trên 100m2
                                                        </li>
                                                    </ul>
                                                    <div className="clearfix price_button">
                                                        <div className="price-box">
                                                            <span className="product-price product-price-convert">15.450.000.000₫</span>
                                                        </div>
                                                        <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="chung-cu-the-manor-central-park.html">
                                                            Mua theo lô <i className="fa fa-angle-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_main product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18304923" encType="multipart/form-data">
                                                <div className="product-thumbnail clearfix">
                                                    <a className="image_thumb" href="chung-cu-flc-green-home-18-pham-hung.html" title="Chung cư FLC Green Home 18 Phạm Hùng">
                                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/products/pd-42.jpg?v=1592554190000" alt="Chung cư FLC Green Home 18 Phạm Hùng" />
                                                    </a>
                                                    <span className="lb ban">Cho bán</span>
                                                    <span className="lb hot">Hot</span>
                                                    <p className="sum">
                                                        Chung cư FLC Green Home tọa lạc tại một trong những vị trí đẹp nhất khu vực
                                                        phía Tây Hà Nội. Nằm trên mặt đường của một trong những tuyến giao thô...
                                                    </p>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="chung-cu-flc-green-home-18-pham-hung.html" title="Chung cư FLC Green Home 18 Phạm Hùng">Chung cư FLC Green Home 18
                                                        Phạm Hùng</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="position lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/position.png?1646297888986">
                                                            Phạm Hùng, Nam Từ Liêm, Hà Nội</li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> Trên 50m2
                                                        </li>
                                                    </ul>
                                                    <div className="clearfix price_button">
                                                        <div className="price-box">
                                                            <span className="product-price product-price-convert">4.200.000.000₫</span>
                                                        </div>
                                                        <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="chung-cu-flc-green-home-18-pham-hung.html">
                                                            Mua theo lô <i className="fa fa-angle-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_main product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18304434" encType="multipart/form-data">
                                                <div className="product-thumbnail clearfix">
                                                    <a className="image_thumb" href="can-ho-the-art.html" title="Căn hộ The Art">
                                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/products/pd-40.jpg?v=1592551737000" alt="Căn hộ The Art" />
                                                    </a>
                                                    <span className="lb ban">Cho bán</span>
                                                    <span className="lb hot">Hot</span>
                                                    <p className="sum">
                                                        Dự án căn hộ The Art dành cho Trí Thức Trẻ có diện tích khuôn viên rộng hơn
                                                        30.000 m2 với 10 khối tháp căn hộ cao 18 tầng và một trung tâm thương ...
                                                    </p>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="can-ho-the-art.html" title="Căn hộ The Art">Căn hộ The Art</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="position lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/position.png?1646297888986">
                                                            151 Phạm Văn Đồng,Cầu Giấy,Hà Nội</li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 01
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 01
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> Trên 50m2
                                                        </li>
                                                    </ul>
                                                    <div className="clearfix price_button">
                                                        <div className="price-box">
                                                            <span className="product-price product-price-convert">3.800.000.000₫</span>
                                                        </div>
                                                        <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="can-ho-the-art.html">
                                                            Mua theo lô <i className="fa fa-angle-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_main product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18303373" encType="multipart/form-data">
                                                <div className="product-thumbnail clearfix">
                                                    <a className="image_thumb" href="can-ho-lionwish.html" title="Căn hộ Opal Skyview">
                                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/products/pd-38.jpg?v=1592543068000" alt="Căn hộ Opal Skyview" />
                                                    </a>
                                                    <span className="lb ban">Cho bán</span>
                                                    <span className="lb hot">Hot</span>
                                                    <p className="sum">
                                                        Khu căn hộ cao cấp Opal Skyview nằm ngay mặt tiền đại lộ Phạm Văn Đồng,
                                                        tuyến đường nội đô đẹp nhất TP.HCM và gần sông Sài Gòn thơ mộng. Với nhữn...
                                                    </p>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="can-ho-lionwish.html" title="Căn hộ Opal Skyview">Căn hộ Opal Skyview</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="position lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/position.png?1646297888986">
                                                            Phạm Văn Đồng,Quận Bình Thạnh,Hồ Chí MInh</li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 01
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 01
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> Trên 50m2
                                                        </li>
                                                    </ul>
                                                    <div className="clearfix price_button">
                                                        <div className="price-box">
                                                            <span className="product-price product-price-convert">5.500.000.000₫</span>
                                                        </div>
                                                        <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="can-ho-lionwish.html">
                                                            Mua theo lô <i className="fa fa-angle-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_main product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18303251" encType="multipart/form-data">
                                                <div className="product-thumbnail clearfix">
                                                    <a className="image_thumb" href="can-ho-star-wish-penthouse.html" title="Căn hộ Star Wish PentHouse">
                                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/products/pd-34.jpg?v=1592542128000" alt="Căn hộ Star Wish PentHouse" />
                                                    </a>
                                                    <span className="lb thue">Cho thuê</span>
                                                    <span className="lb hot">Hot</span>
                                                    <p className="sum">
                                                        Khác hẳn với các căn hộ chung cư tầng áp mái thông thường, các căn hộ
                                                        penhouse thường có diện tích lớn và khoảng sân vườn rộng rãi, góc nhìn
                                                        thoán...
                                                    </p>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="can-ho-star-wish-penthouse.html" title="Căn hộ Star Wish PentHouse">Căn hộ Star Wish PentHouse</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="position lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/position.png?1646297888986">
                                                            15 Long Biên, Hà Nội</li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 01
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 01
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> Trên 50m2
                                                        </li>
                                                    </ul>
                                                    <div className="clearfix price_button">
                                                        <div className="price-box">
                                                            <span className="product-price product-price-convert">15.450.000.000₫</span>
                                                        </div>
                                                        <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="can-ho-star-wish-penthouse.html">
                                                            Mua theo lô <i className="fa fa-angle-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_main product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18301866" encType="multipart/form-data">
                                                <div className="product-thumbnail clearfix">
                                                    <a className="image_thumb" href="biet-thu-best-western-premier-luxury-lux-lighting-kieu-phap.html" title="Biệt thự Best Western Premier Luxury  Lux Lighting kiểu Pháp">
                                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/products/pd-17.jpg?v=1592535827297" alt="Biệt thự Best Western Premier Luxury  Lux Lighting kiểu Pháp" />
                                                    </a>
                                                    <span className="lb ban">Cho bán</span>
                                                    <p className="sum">
                                                        Dự án Western Premier Luxury hiện tại đang được giới đầu tư cũng như khách
                                                        hàng đánh giá là “cơn sốt” về bất động sản tại Khánh Hòa, đây chính là...
                                                    </p>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="biet-thu-best-western-premier-luxury-lux-lighting-kieu-phap.html" title="Biệt thự Best Western Premier Luxury  Lux Lighting kiểu Pháp">Biệt
                                                        thự Best Western Premier Luxury Lux Lighting kiểu Pháp</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="position lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/position.png?1646297888986">
                                                            Cam Ranh - Nha Trang - Khánh Hòa</li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> trên 200m2
                                                        </li>
                                                    </ul>
                                                    <div className="clearfix price_button">
                                                        <div className="price-box">
                                                            <span className="product-price product-price-convert">30.000.000.000₫</span>
                                                        </div>
                                                        <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="biet-thu-best-western-premier-luxury-lux-lighting-kieu-phap.html">
                                                            Mua theo lô <i className="fa fa-angle-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_main product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18297662" encType="multipart/form-data">
                                                <div className="product-thumbnail clearfix">
                                                    <a className="image_thumb" href="chung-cu-vinhomes-green-bay.html" title="Chung cư Vinhomes Green Bay">
                                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/products/pd-5.jpg?v=1592474487630" alt="Chung cư Vinhomes Green Bay" />
                                                    </a>
                                                    <span className="lb ban">Cho bán</span>
                                                    <span className="lb hot">Hot</span>
                                                    <p className="sum">
                                                        Vinhomes Green Bay là một trong những sản phẩm BĐS nổi bật khu vực phía Tây
                                                        Hà Nội do tập đoàn Vingroup đầu tư và triển khai. Dự án được định hướn...
                                                    </p>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="chung-cu-vinhomes-green-bay.html" title="Chung cư Vinhomes Green Bay">Chung cư Vinhomes Green Bay</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="position lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/position.png?1646297888986">
                                                            Số 7 Đại lộ Thăng Long, Nam Từ Liêm, Hà Nội</li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> trên 300m2
                                                        </li>
                                                    </ul>
                                                    <div className="clearfix price_button">
                                                        <div className="price-box">
                                                            <span className="product-price product-price-convert">9.900.000.000₫</span>
                                                        </div>
                                                        <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="chung-cu-vinhomes-green-bay.html">
                                                            Mua theo lô <i className="fa fa-angle-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_main product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18295239" encType="multipart/form-data">
                                                <div className="product-thumbnail clearfix">
                                                    <a className="image_thumb" href="chung-cu-park-hill-home.html" title="Chung cư Park Hill Home">
                                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/products/pd-1.jpg?v=1592531501400" alt="Chung cư Park Hill Home" />
                                                    </a>
                                                    <span className="lb ban">Cho bán</span>
                                                    <span className="lb hot">Hot</span>
                                                    <p className="sum">
                                                        Chung cư Park Hill Home có vị trí thuận lợi, ngay đầu đường 5, cách cầu Tân
                                                        Bình chỉ 3km, chỉ cần 10' có thể đi vào trung tâm TP HCM. Diện tích th...
                                                    </p>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="chung-cu-park-hill-home.html" title="Chung cư Park Hill Home">Chung cư Park Hill Home</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="position lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/position.png?1646297888986">
                                                            &nbsp;Phường 15, Tân Bình,TP HCM</li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> Trên 50m2
                                                        </li>
                                                    </ul>
                                                    <div className="clearfix price_button">
                                                        <div className="price-box">
                                                            <span className="product-price product-price-convert">2.500.000.000₫</span>
                                                        </div>
                                                        <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="chung-cu-park-hill-home.html">
                                                            Mua theo lô <i className="fa fa-angle-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>


                <section className="awe-section-4">
                    <section className="section_bds_chothue clearfix">
                        <div className="container">
                            <h2 className="title">
                                <a href="nha-dat-cho-thue.html" title="Bất động sản cho thuê">Bất động sản <span className="cl">cho
                                    thuê</span></a>
                            </h2>
                            <div className="clearfix contentpr">
                                <div className="slickwrap slick_three_row_mini">
                                    <div className="item">
                                        <div className="item_product_list_mini product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18304260" encType="multipart/form-data">
                                                <div className="wrap_thumb">
                                                    <div className="product-thumbnail clearfix">
                                                        <div className="image_thumb">
                                                            <img className="imag lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="https://bizweb.dktcdn.net/100/393/384/products/pd-39.jpg?v=1592550657000" alt="Căn hộ cao cấp Alpha Hill" />
                                                        </div>
                                                        <span className="lb thue">Cho thuê</span>
                                                        <div className="clearfix price_button">
                                                            <div className="price-box">
                                                                <span className="product-price product-price-convert">3.456.000.000₫</span>
                                                            </div>
                                                            <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="can-ho-cao-cap-alpha-hill.html">
                                                                Mua theo lô <i className="fa fa-angle-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="can-ho-cao-cap-alpha-hill.html" title="Căn hộ cao cấp Alpha Hill">Căn hộ cao cấp Alpha Hill</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 01
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 01
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> Trên 50m2
                                                        </li>
                                                    </ul>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_list_mini product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18302970" encType="multipart/form-data">
                                                <div className="wrap_thumb">
                                                    <div className="product-thumbnail clearfix">
                                                        <div className="image_thumb">
                                                            <img className="imag lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="https://bizweb.dktcdn.net/100/393/384/products/pd-32.jpg?v=1592540793577" alt="Biệt thự sân vườn sát sân bay Nội Bài" />
                                                        </div>
                                                        <span className="lb thue">Cho thuê</span>
                                                        <span className="lb hot">Hot</span>
                                                        <div className="clearfix price_button">
                                                            <div className="price-box">
                                                                <span className="product-price product-price-convert">12.009.000.000₫</span>
                                                            </div>
                                                            <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="biet-thu-san-vuon-sat-san-bay-noi-bai.html">
                                                                Mua theo lô <i className="fa fa-angle-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="biet-thu-san-vuon-sat-san-bay-noi-bai.html" title="Biệt thự sân vườn sát sân bay Nội Bài">Biệt thự sân vườn sát sân
                                                        bay Nội Bài</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 01
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 01
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> trên 100m2
                                                        </li>
                                                    </ul>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_list_mini product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18302777" encType="multipart/form-data">
                                                <div className="wrap_thumb">
                                                    <div className="product-thumbnail clearfix">
                                                        <div className="image_thumb">
                                                            <img className="imag lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="https://bizweb.dktcdn.net/100/393/384/products/pd-28.jpg?v=1592539871247" alt="Biệt thự Ocen Luxury Lake North West Important Key Park" />
                                                        </div>
                                                        <span className="lb thue">Cho thuê</span>
                                                        <span className="lb hot">Hot</span>
                                                        <div className="clearfix price_button">
                                                            <div className="price-box">
                                                                <span className="product-price product-price-convert">25.555.000.000₫</span>
                                                            </div>
                                                            <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="biet-thu-ocen-luxury-lake-north-west-important-key-park.html">
                                                                Mua theo lô <i className="fa fa-angle-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="biet-thu-ocen-luxury-lake-north-west-important-key-park.html" title="Biệt thự Ocen Luxury Lake North West Important Key Park">Biệt thự
                                                        Ocen Luxury Lake North West Important Key Park</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> trên 200m2
                                                        </li>
                                                    </ul>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_list_mini product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18302171" encType="multipart/form-data">
                                                <div className="wrap_thumb">
                                                    <div className="product-thumbnail clearfix">
                                                        <div className="image_thumb">
                                                            <img className="imag lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="https://bizweb.dktcdn.net/100/393/384/products/pd-22.jpg?v=1592537639157" alt="Biệt thự Bin Klinton Leighton Luxury Paradise Nguyễn Văn Linh" />
                                                        </div>
                                                        <span className="lb thue">Cho thuê</span>
                                                        <span className="lb hot">Hot</span>
                                                        <div className="clearfix price_button">
                                                            <div className="price-box">
                                                                <span className="product-price product-price-convert">299.000.000₫</span>
                                                            </div>
                                                            <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="biet-thu-bin-klinton-leighton-luxury-paradise-nguyen-van-linh.html">
                                                                Mua theo lô <i className="fa fa-angle-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="biet-thu-bin-klinton-leighton-luxury-paradise-nguyen-van-linh.html" title="Biệt thự Bin Klinton Leighton Luxury Paradise Nguyễn Văn Linh">Biệt
                                                        thự Bin Klinton Leighton Luxury Paradise Nguyễn Văn Linh</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> trên 200m2
                                                        </li>
                                                    </ul>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_list_mini product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18298227" encType="multipart/form-data">
                                                <div className="wrap_thumb">
                                                    <div className="product-thumbnail clearfix">
                                                        <div className="image_thumb">
                                                            <img className="imag lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="https://bizweb.dktcdn.net/100/393/384/products/pd-7.jpg?v=1592473499520" alt="Chung cư Platium Luxury Center Park Trần Duy Hưng" />
                                                        </div>
                                                        <span className="lb thue">Cho thuê</span>
                                                        <span className="lb hot">Hot</span>
                                                        <div className="clearfix price_button">
                                                            <div className="price-box">
                                                                <span className="product-price product-price-convert">7.600.000.000₫</span>
                                                            </div>
                                                            <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="chung-cu-platium-luxury-center-park-tran-duy-hung.html">
                                                                Mua theo lô <i className="fa fa-angle-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="chung-cu-platium-luxury-center-park-tran-duy-hung.html" title="Chung cư Platium Luxury Center Park Trần Duy Hưng">Chung cư
                                                        Platium Luxury Center Park Trần Duy Hưng</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 02
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> trên 100m2
                                                        </li>
                                                    </ul>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_product_list_mini product_convert">
                                            <form action="https://template-bat-dong-san.mysapo.net/cart/add" method="post" className="variants product-action clearfix" data-id="product-actions-18297973" encType="multipart/form-data">
                                                <div className="wrap_thumb">
                                                    <div className="product-thumbnail clearfix">
                                                        <div className="image_thumb">
                                                            <img className="imag lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="https://bizweb.dktcdn.net/100/393/384/products/pd-6.jpg?v=1592474395210" alt="Chung cư Lux Luxury Golden Glue Nam Từ Liêm" />
                                                        </div>
                                                        <span className="lb thue">Cho thuê</span>
                                                        <span className="lb hot">Hot</span>
                                                        <div className="clearfix price_button">
                                                            <div className="price-box">
                                                                <span className="product-price product-price-convert">590.000.000₫</span>
                                                            </div>
                                                            <a className="btn-buy btn-cart btn btn-views bnt_hover_effect " title="Mua theo lô" href="chung-cu-lux-luxury-golden-glue-nam-tu-liem.html">
                                                                Mua theo lô <i className="fa fa-angle-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-info clearfix">
                                                    <h3 className="product-name clearfix"><a href="chung-cu-lux-luxury-golden-glue-nam-tu-liem.html" title="Chung cư Lux Luxury Golden Glue Nam Từ Liêm">Chung cư Lux Luxury
                                                        Golden Glue Nam Từ Liêm</a></h3>
                                                    <ul className="clearfix profile">
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bed.png?1646297888986">
                                                            <span>Phòng ngủ:&nbsp;</span> 01
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bath.png?1646297888986">
                                                            <span>Phòng tắm:&nbsp;</span> 01
                                                        </li>
                                                        <li className="lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/square.png?1646297888986">
                                                            <span>Diện tích:&nbsp;</span> trên 300m2
                                                        </li>
                                                    </ul>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>


                <section className="awe-section-6">
                    <section className="clearfix section_about lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bg_about.jpg?1646297888986" style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'left bottom' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12">
                                    <div className="col-left">
                                        <h2 className="title">
                                            <span>Sứ mệnh của chúng tôi là giúp mọi người <span className="cl">tìm &amp; tạo nên 1 không
                                                gian sống tốt hơn!</span></span>
                                        </h2>
                                        <div className="content">
                                            <p>
                                                Thành lập Công ty TNHH Dịch vụ và Xây dựng batdongsan.vn với vốn điều lệ ban đầu là
                                                0,8 tỷ đồng và 10 nhân viên. Khi mới hoạt động, batdongsan.vn chuyên về môi giới các
                                                dự án bất động sản. Hiện tại, đã tăng vốn điều lệ lên 3.500 tỷ đồng với trên 3500
                                                nhân viên.
                                            </p>
                                            <p>
                                                Trải qua chặng đường 17 năm phát triển, Tập đoàn batdongsan.vn đã trở thành một
                                                trong những chủ đầu tư mang lại dấu ấn với sản phẩm đa dạng đáp ứng nhu cầu của thị
                                                trường.
                                            </p>
                                            <p>
                                                Tầm nhìn đến 2025: "Trở thành 1 trong 10 Tập đoàn kinh tế tư nhân lớn nhất Việt Nam"
                                                Tầm nhìn đến 2030: "Trở thành 1 trong 10 công ty phát triển Bất động sản tốt nhất
                                                Đông Nam Á"
                                            </p>
                                        </div>
                                        <div className="phonebar">
                                            <a className="fone" href="tel:19006750" title="Liên hệ tư vấn">Liên hệ tư vấn</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12">
                                    <div className="col-right col-data clearfix">
                                        <div className="itemx">
                                            <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/icon1.png?1646297888986" alt="icon" />
                                            <p>
                                                Tìm kiếm thông tin dễ dàng
                                            </p>
                                            <span>
                                                Không ngừng phát triển mạnh mẽ các hoạt động đầu tư xây dựng để nhanh chóng trở
                                                thành một trong những tập đoàn phát triển bất động sản hàng đầu
                                            </span>
                                        </div>
                                        <div className="itemx">
                                            <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/icon2.png?1646297888986" alt="icon" />
                                            <p>
                                                Tiết kiệm thời gian và chi phí
                                            </p>
                                            <span>
                                                Tất cả các giải pháp mà batdongsan.vn cung cấp đều được phân tích một cách chuyên
                                                sâu, hướng đến phục vụ và giải quyết những vướng mắc một cách nhanh chóng nhu cầu
                                                của khách hàng.
                                            </span>
                                        </div>
                                        <div className="itemx">
                                            <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/icon3.png?1646297888986" alt="icon" />
                                            <p>
                                                Đảm bảo quyền lợi khách hàng
                                            </p>
                                            <span>
                                                Trải qua chặng đường 17 năm phát triển, batdongsan.vn đã trở thành một trong những
                                                chủ đầu tư mang lại dấu ấn với sản phẩm đa dạng đáp ứng nhu cầu của thị trường
                                            </span>
                                        </div>
                                        <div className="itemx">
                                            <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/icon4.png?1646297888986" alt="icon" />
                                            <p>
                                                Kết nối với nhà đầu tư
                                            </p>
                                            <span>
                                                Là thương hiệu hàng đầu trên thị trường batdongsan.vn luôn được các đối tác đánh giá
                                                cao về năng lực và uy tín kinh doanh. Đã trở thành đối tác tin cậy của hàng loạt
                                                công ty.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="data-mobile col-right">
                                        <div className="inwrp">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>



                <section className="awe-section-8">
                    <section className="section_blog clearfix">
                        <div className="container">
                            <div className="wrap_tab_blog">
                                <ul className="clearfix">
                                    <li><a href="#blog_tab_1" data-href="tin-tuc-2" className="active">Tin nổi bật</a></li>
                                    <li><a href="#blog_tab_2" data-href="tin-tuc-2" className>Tin tức</a></li>
                                    <li><a href="#blog_tab_3" data-href="tin-tuc-2" className>Tư vấn phong thủy</a></li>
                                </ul>
                                <div className="urltab"><a href="tin-tuc-2.html" title="Xem thêm">Xem thêm</a></div>
                                <div className="content clearfix">
                                    <div className="row">
                                        <div className="col-xl-9 col-lg-12 col-md-12 col-12">
                                            <div id="blog_tab_1" className="clearfix tabcontent tab_1 active">
                                                <div className="row">
                                                    <div className="col-lg-5 col-md-12">
                                                        <div className="clearfix blog blogitemlarge">
                                                            <a className="image-blog date clearfix" href="9-dai-ky-trong-phong-thuy-nha-o-va-cach-hoa-giai-don-gian-khong-phai-ai-cung-biet.html" title="9 đại kỵ trong phong thủy nhà ở và cách hóa giải đơn giản không phải ai cũng biết">
                                                                <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-2.jpg?v=1592450367177" alt="9 đại kỵ trong phong thủy nhà ở và cách hóa giải đơn giản không phải ai cũng biết" />
                                                                <span className="post-date"><i className="fa fa-clock" />
                                                                    18/06/2020</span>
                                                            </a>
                                                            <div className="content_blog clearfix">
                                                                <h3>
                                                                    <a href="9-dai-ky-trong-phong-thuy-nha-o-va-cach-hoa-giai-don-gian-khong-phai-ai-cung-biet.html" title="9 đại kỵ trong phong thủy nhà ở và cách hóa giải đơn giản không phải ai cũng biết">9
                                                                        đại kỵ trong phong thủy nhà ở và cách hóa giải đơn giản
                                                                        không phải ai cũng biết</a>
                                                                </h3>
                                                                <p className="justify clearfix"> Đây đều là những lỗi sai cơ bản trong
                                                                    phong thủy nhà ở mà hầu như nhà nào cũng mắc.
                                                                    1. Nhà lệch tâm ...</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-md-12 col-12">
                                                        <div className="clearfix blog blogitemlist">
                                                            <a className="image-blog clearfix" href="nhung-kieng-ky-chu-y-nen-tranh-khi-chon-mua-nha.html" title="Những kiêng kỵ chú ý nên tránh khi chọn mua nhà">
                                                                <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-1.jpg?v=1592381300240" alt="Những kiêng kỵ chú ý nên tránh khi chọn mua nhà" />
                                                            </a>
                                                            <div className="content_blog clearfix">
                                                                <span className="post-date"><i className="fa fa-clock" />
                                                                    18/06/2020</span>
                                                                <h3>
                                                                    <a href="nhung-kieng-ky-chu-y-nen-tranh-khi-chon-mua-nha.html" title="Những kiêng kỵ chú ý nên tránh khi chọn mua nhà">Những
                                                                        kiêng kỵ chú ý nên tránh khi chọn mua nhà</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix blog blogitemlist">
                                                            <a className="image-blog clearfix" href="can-ho-chung-cu-va-nhung-dieu-khach-hang-quan-tam-nhat.html" title="Căn hộ chung cư và những điều khách hàng quan tâm nhất">
                                                                <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-12.jpg?v=1592447896893" alt="Căn hộ chung cư và những điều khách hàng quan tâm nhất" />
                                                            </a>
                                                            <div className="content_blog clearfix">
                                                                <span className="post-date"><i className="fa fa-clock" />
                                                                    18/06/2020</span>
                                                                <h3>
                                                                    <a href="can-ho-chung-cu-va-nhung-dieu-khach-hang-quan-tam-nhat.html" title="Căn hộ chung cư và những điều khách hàng quan tâm nhất">Căn
                                                                        hộ chung cư và những điều khách hàng quan tâm nhất</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix blog blogitemlist">
                                                            <a className="image-blog clearfix" href="nhung-luu-y-quan-trong-trong-phong-thuy-khi-mua-nha-giup-thu-hut-tai-loc.html" title="Những lưu ý quan trọng trong phong thủy khi mua nhà giúp thu hút tài lộc">
                                                                <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-9.jpg?v=1592447918053" alt="Những lưu ý quan trọng trong phong thủy khi mua nhà giúp thu hút tài lộc" />
                                                            </a>
                                                            <div className="content_blog clearfix">
                                                                <span className="post-date"><i className="fa fa-clock" />
                                                                    18/06/2020</span>
                                                                <h3>
                                                                    <a href="nhung-luu-y-quan-trong-trong-phong-thuy-khi-mua-nha-giup-thu-hut-tai-loc.html" title="Những lưu ý quan trọng trong phong thủy khi mua nhà giúp thu hút tài lộc">Những
                                                                        lưu ý quan trọng trong phong thủy khi mua nhà giúp thu hút
                                                                        tài lộc</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <a className="readmore" href="#">
                                                            Xem thêm <i className="fa fa-chevron-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="blog_tab_2" className="clearfix tabcontent tab_2 ">
                                                <div className="row">
                                                    <div className="col-lg-5 col-md-12">
                                                        <div className="clearfix blog blogitemlarge">
                                                            <a className="image-blog date clearfix" href="9-dai-ky-trong-phong-thuy-nha-o-va-cach-hoa-giai-don-gian-khong-phai-ai-cung-biet.html" title="9 đại kỵ trong phong thủy nhà ở và cách hóa giải đơn giản không phải ai cũng biết">
                                                                <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-2.jpg?v=1592450367177" alt="9 đại kỵ trong phong thủy nhà ở và cách hóa giải đơn giản không phải ai cũng biết" />
                                                                <span className="post-date"><i className="fa fa-clock" />
                                                                    18/06/2020</span>
                                                            </a>
                                                            <div className="content_blog clearfix">
                                                                <h3>
                                                                    <a href="9-dai-ky-trong-phong-thuy-nha-o-va-cach-hoa-giai-don-gian-khong-phai-ai-cung-biet.html" title="9 đại kỵ trong phong thủy nhà ở và cách hóa giải đơn giản không phải ai cũng biết">9
                                                                        đại kỵ trong phong thủy nhà ở và cách hóa giải đơn giản
                                                                        không phải ai cũng biết</a>
                                                                </h3>
                                                                <p className="justify clearfix"> Đây đều là những lỗi sai cơ bản trong
                                                                    phong thủy nhà ở mà hầu như nhà nào cũng mắc.
                                                                    1. Nhà lệch tâm ...</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-md-12 col-12">
                                                        <div className="clearfix blog blogitemlist">
                                                            <a className="image-blog clearfix" href="nhung-kieng-ky-chu-y-nen-tranh-khi-chon-mua-nha.html" title="Những kiêng kỵ chú ý nên tránh khi chọn mua nhà">
                                                                <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-1.jpg?v=1592381300240" alt="Những kiêng kỵ chú ý nên tránh khi chọn mua nhà" />
                                                            </a>
                                                            <div className="content_blog clearfix">
                                                                <span className="post-date"><i className="fa fa-clock" />
                                                                    18/06/2020</span>
                                                                <h3>
                                                                    <a href="nhung-kieng-ky-chu-y-nen-tranh-khi-chon-mua-nha.html" title="Những kiêng kỵ chú ý nên tránh khi chọn mua nhà">Những
                                                                        kiêng kỵ chú ý nên tránh khi chọn mua nhà</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix blog blogitemlist">
                                                            <a className="image-blog clearfix" href="can-ho-chung-cu-va-nhung-dieu-khach-hang-quan-tam-nhat.html" title="Căn hộ chung cư và những điều khách hàng quan tâm nhất">
                                                                <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-12.jpg?v=1592447896893" alt="Căn hộ chung cư và những điều khách hàng quan tâm nhất" />
                                                            </a>
                                                            <div className="content_blog clearfix">
                                                                <span className="post-date"><i className="fa fa-clock" />
                                                                    18/06/2020</span>
                                                                <h3>
                                                                    <a href="can-ho-chung-cu-va-nhung-dieu-khach-hang-quan-tam-nhat.html" title="Căn hộ chung cư và những điều khách hàng quan tâm nhất">Căn
                                                                        hộ chung cư và những điều khách hàng quan tâm nhất</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix blog blogitemlist">
                                                            <a className="image-blog clearfix" href="nhung-luu-y-quan-trong-trong-phong-thuy-khi-mua-nha-giup-thu-hut-tai-loc.html" title="Những lưu ý quan trọng trong phong thủy khi mua nhà giúp thu hút tài lộc">
                                                                <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-9.jpg?v=1592447918053" alt="Những lưu ý quan trọng trong phong thủy khi mua nhà giúp thu hút tài lộc" />
                                                            </a>
                                                            <div className="content_blog clearfix">
                                                                <span className="post-date"><i className="fa fa-clock" />
                                                                    18/06/2020</span>
                                                                <h3>
                                                                    <a href="nhung-luu-y-quan-trong-trong-phong-thuy-khi-mua-nha-giup-thu-hut-tai-loc.html" title="Những lưu ý quan trọng trong phong thủy khi mua nhà giúp thu hút tài lộc">Những
                                                                        lưu ý quan trọng trong phong thủy khi mua nhà giúp thu hút
                                                                        tài lộc</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <a className="readmore" href="#">
                                                            Xem thêm <i className="fa fa-chevron-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="blog_tab_3" className="clearfix tabcontent tab_3 ">
                                                <div className="row">
                                                    <div className="col-lg-5 col-md-12">
                                                        <div className="clearfix blog blogitemlarge">
                                                            <a className="image-blog date clearfix" href="9-dai-ky-trong-phong-thuy-nha-o-va-cach-hoa-giai-don-gian-khong-phai-ai-cung-biet.html" title="9 đại kỵ trong phong thủy nhà ở và cách hóa giải đơn giản không phải ai cũng biết">
                                                                <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-2.jpg?v=1592450367177" alt="9 đại kỵ trong phong thủy nhà ở và cách hóa giải đơn giản không phải ai cũng biết" />
                                                                <span className="post-date"><i className="fa fa-clock" />
                                                                    18/06/2020</span>
                                                            </a>
                                                            <div className="content_blog clearfix">
                                                                <h3>
                                                                    <a href="9-dai-ky-trong-phong-thuy-nha-o-va-cach-hoa-giai-don-gian-khong-phai-ai-cung-biet.html" title="9 đại kỵ trong phong thủy nhà ở và cách hóa giải đơn giản không phải ai cũng biết">9
                                                                        đại kỵ trong phong thủy nhà ở và cách hóa giải đơn giản
                                                                        không phải ai cũng biết</a>
                                                                </h3>
                                                                <p className="justify clearfix"> Đây đều là những lỗi sai cơ bản trong
                                                                    phong thủy nhà ở mà hầu như nhà nào cũng mắc.
                                                                    1. Nhà lệch tâm ...</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-md-12 col-12">
                                                        <div className="clearfix blog blogitemlist">
                                                            <a className="image-blog clearfix" href="nhung-kieng-ky-chu-y-nen-tranh-khi-chon-mua-nha.html" title="Những kiêng kỵ chú ý nên tránh khi chọn mua nhà">
                                                                <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-1.jpg?v=1592381300240" alt="Những kiêng kỵ chú ý nên tránh khi chọn mua nhà" />
                                                            </a>
                                                            <div className="content_blog clearfix">
                                                                <span className="post-date"><i className="fa fa-clock" />
                                                                    18/06/2020</span>
                                                                <h3>
                                                                    <a href="nhung-kieng-ky-chu-y-nen-tranh-khi-chon-mua-nha.html" title="Những kiêng kỵ chú ý nên tránh khi chọn mua nhà">Những
                                                                        kiêng kỵ chú ý nên tránh khi chọn mua nhà</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix blog blogitemlist">
                                                            <a className="image-blog clearfix" href="can-ho-chung-cu-va-nhung-dieu-khach-hang-quan-tam-nhat.html" title="Căn hộ chung cư và những điều khách hàng quan tâm nhất">
                                                                <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-12.jpg?v=1592447896893" alt="Căn hộ chung cư và những điều khách hàng quan tâm nhất" />
                                                            </a>
                                                            <div className="content_blog clearfix">
                                                                <span className="post-date"><i className="fa fa-clock" />
                                                                    18/06/2020</span>
                                                                <h3>
                                                                    <a href="can-ho-chung-cu-va-nhung-dieu-khach-hang-quan-tam-nhat.html" title="Căn hộ chung cư và những điều khách hàng quan tâm nhất">Căn
                                                                        hộ chung cư và những điều khách hàng quan tâm nhất</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix blog blogitemlist">
                                                            <a className="image-blog clearfix" href="nhung-luu-y-quan-trong-trong-phong-thuy-khi-mua-nha-giup-thu-hut-tai-loc.html" title="Những lưu ý quan trọng trong phong thủy khi mua nhà giúp thu hút tài lộc">
                                                                <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-9.jpg?v=1592447918053" alt="Những lưu ý quan trọng trong phong thủy khi mua nhà giúp thu hút tài lộc" />
                                                            </a>
                                                            <div className="content_blog clearfix">
                                                                <span className="post-date"><i className="fa fa-clock" />
                                                                    18/06/2020</span>
                                                                <h3>
                                                                    <a href="nhung-luu-y-quan-trong-trong-phong-thuy-khi-mua-nha-giup-thu-hut-tai-loc.html" title="Những lưu ý quan trọng trong phong thủy khi mua nhà giúp thu hút tài lộc">Những
                                                                        lưu ý quan trọng trong phong thủy khi mua nhà giúp thu hút
                                                                        tài lộc</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <a className="readmore" href="#">
                                                            Xem thêm <i className="fa fa-chevron-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 banner-blog">
                                            <a className="blogtabimage" href="#" title="banner">
                                                <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/banner_right.jpg?1646297888986" alt="banner" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="section hidden">
                                    <div className="slickblog owl-blog slick_margin">
                                        <div className="blocg_item">
                                            <div className="clearfix blog-bottom blog blogitemlarge">
                                                <a className="image-blog date clearfix" href="3-li-do-chinh-ma-ban-nen-chon-va-lam-nha-huong-nam.html" title="3 lí do chính mà bạn nên chọn và làm nhà hướng Nam">
                                                    <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-14.jpg?v=1592559945307" alt="3 lí do chính mà bạn nên chọn và làm nhà hướng Nam" />
                                                    <span className="post-date"><i className="fa fa-clock" /> 18/06/2020</span>
                                                </a>
                                                <div className="content_blog clearfix">
                                                    <h3>
                                                        <a href="3-li-do-chinh-ma-ban-nen-chon-va-lam-nha-huong-nam.html" title="3 lí do chính mà bạn nên chọn và làm nhà hướng Nam">3 lí do chính
                                                            mà bạn nên chọn và làm nhà hướng Nam</a>
                                                    </h3>
                                                    <p className="justify clearfix"> Xây nhà ở hướng Nam có thể tránh được ánh nắng chói
                                                        chang từ phía Đông vào mỗi buổi sáng và buổi chiều cũng không bị nắng...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blocg_item">
                                            <div className="clearfix blog-bottom blog blogitemlarge">
                                                <a className="image-blog date clearfix" href="mua-chung-cu-mini-gia-re-bay-gio-khong-con-la-chuyen-xa-voi.html" title="Mua chung cư mini giá rẻ bây giờ không con là chuyện xa vời">
                                                    <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-13.jpg?v=1592560005990" alt="Mua chung cư mini giá rẻ bây giờ không con là chuyện xa vời" />
                                                    <span className="post-date"><i className="fa fa-clock" /> 18/06/2020</span>
                                                </a>
                                                <div className="content_blog clearfix">
                                                    <h3>
                                                        <a href="mua-chung-cu-mini-gia-re-bay-gio-khong-con-la-chuyen-xa-voi.html" title="Mua chung cư mini giá rẻ bây giờ không con là chuyện xa vời">Mua
                                                            chung cư mini giá rẻ bây giờ không con là chuyện xa vời</a>
                                                    </h3>
                                                    <p className="justify clearfix"> Làn sóng căn hộ có giá cực rẻ đang ồ ạt bung hàng
                                                        tại TP HCM, hầu hết tất cả các dự án căn hộ siêu rẻ...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blocg_item">
                                            <div className="clearfix blog-bottom blog blogitemlarge">
                                                <a className="image-blog date clearfix" href="mua-biet-thu-thi-can-phai-luu-y-cac-van-de-phong-thuy-nao.html" title="Mua biệt thự thì cần phải lưu ý các vấn đề phong thủy nào?">
                                                    <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-8.jpg?v=1592560264063" alt="Mua biệt thự thì cần phải lưu ý các vấn đề phong thủy nào?" />
                                                    <span className="post-date"><i className="fa fa-clock" /> 18/06/2020</span>
                                                </a>
                                                <div className="content_blog clearfix">
                                                    <h3>
                                                        <a href="mua-biet-thu-thi-can-phai-luu-y-cac-van-de-phong-thuy-nao.html" title="Mua biệt thự thì cần phải lưu ý các vấn đề phong thủy nào?">Mua
                                                            biệt thự thì cần phải lưu ý các vấn đề phong thủy nào?</a>
                                                    </h3>
                                                    <p className="justify clearfix"> Việc lựa chọn địa hình đất là một điều quan trọng
                                                        trong việc xây dựng biệt thự. Các nhà khoa học thường xuất phát từ các yếu
                                                        tố...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blocg_item">
                                            <div className="clearfix blog-bottom blog blogitemlarge">
                                                <a className="image-blog date clearfix" href="cach-xay-nha-tiet-kiem-chi-phi-nhat-5-kinh-nghiem-khong-phai-ai-cung-biet.html" title="Cách xây nhà tiết kiệm chi phí nhất: 5 kinh nghiệm không phải ai cũng biết">
                                                    <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/thumb/large/100/393/384/articles/blog-7.jpg?v=1592560206030" alt="Cách xây nhà tiết kiệm chi phí nhất: 5 kinh nghiệm không phải ai cũng biết" />
                                                    <span className="post-date"><i className="fa fa-clock" /> 17/06/2020</span>
                                                </a>
                                                <div className="content_blog clearfix">
                                                    <h3>
                                                        <a href="cach-xay-nha-tiet-kiem-chi-phi-nhat-5-kinh-nghiem-khong-phai-ai-cung-biet.html" title="Cách xây nhà tiết kiệm chi phí nhất: 5 kinh nghiệm không phải ai cũng biết">Cách
                                                            xây nhà tiết kiệm chi phí nhất: 5 kinh nghiệm không phải ai cũng
                                                            biết</a>
                                                    </h3>
                                                    <p className="justify clearfix"> Thông thường, muốn xây nhà tiết kiệm chi phí nhất
                                                        thì cần sử dụng vật liệu giá rẻ, nhà thầu xây dựng không chuyên nghiệp; còn
                                                        muốn có...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>



                <section className="awe-section-9">
                    <section className="brandsection clearfix">
                        <div className="container">
                            <h2 className="title clearfix margin-bottom-30">
                                <span>Doanh nghiệp <span className="cl">nổi bật</span></span>
                            </h2>
                            <div className="slickbrand clearfix">
                                <div>
                                    <div className="item">
                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/img_brand_1.jpg?1646297888986" alt="alt" />
                                    </div>
                                </div>
                                <div>
                                    <div className="item">
                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/img_brand_2.jpg?1646297888986" alt="alt" />
                                    </div>
                                </div>
                                <div>
                                    <div className="item">
                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/img_brand_3.jpg?1646297888986" alt="alt" />
                                    </div>
                                </div>
                                <div>
                                    <div className="item">
                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/img_brand_4.jpg?1646297888986" alt="alt" />
                                    </div>
                                </div>
                                <div>
                                    <div className="item">
                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/img_brand_5.jpg?1646297888986" alt="alt" />
                                    </div>
                                </div>
                                <div>
                                    <div className="item">
                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/img_brand_6.jpg?1646297888986" alt="alt" />
                                    </div>
                                </div>
                                <div>
                                    <div className="item">
                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/img_brand_7.jpg?1646297888986" alt="alt" />
                                    </div>
                                </div>
                                <div>
                                    <div className="item">
                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/img_brand_8.jpg?1646297888986" alt="alt" />
                                    </div>
                                </div>
                                <div>
                                    <div className="item">
                                        <img className="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/img_brand_9.jpg?1646297888986" alt="alt" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>


            </div>

            <footer className="footer clearfix lazyload" data-src="//bizweb.dktcdn.net/100/393/384/themes/844266/assets/bg_footer.jpg?1646297888986" style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'top center', backgroundSize: 'cover' }}>
                <div className="clearfix firstfooter ">
                    <div className="getmail section clearfix">
                        <div className="container">
                            <div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                        <p className="clearfix">
                                            Đăng ký nhận thông tin từ Batdongsan.vn
                                        </p>
                                        <span className="title">Chúng tôi sẽ gửi bạn những thông tin bất động sản mới nhất</span>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 first_email">
                                        <div className="mail_footer subscribe clearfix">
                                            <form id="mc-form" className="newsletter-form" data-toggle="validator">
                                                <div className="input-group">
                                                    <div className="groupiput">
                                                        <input aria-label="Địa chỉ Email" type="email" className="form-control" placeholder="Nhập địa chỉ email của bạn..." name="EMAIL" required autoComplete="off" />
                                                    </div>
                                                    <span className="input-group-append subscribe">
                                                        <button className="btn btn-default" type="submit" aria-label="Đăng ký" name="subscribe"><i className="fas fa-paper-plane" /> Đăng ký ngay
                                                        </button>
                                                    </span>
                                                </div>
                                            </form>
                                            <div className="mailchimp-alerts ">
                                                <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
                                                <div className="mailchimp-success" />{/* mailchimp-success end */}
                                                <div className="mailchimp-error" />{/* mailchimp-error end */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-md-6 col-12">
                                <div className="widget-ft first clearfix">
                                    <h4 className="title-menu">
                                        <a role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu01" aria-controls="collapseListMenu01">
                                            Bất động sản hà nội <i className="fa fa-caret-down" aria-hidden="true" />
                                        </a>
                                    </h4>
                                    <div className="collapse" id="collapseListMenu01">
                                        <ul className="list-menu">
                                            <li className="li_menu"><a href="index.html" title="Trang chủ">Trang chủ</a></li>
                                            <li className="li_menu"><a href="gioi-thieu.html" title="Giới thiệu">Giới thiệu</a></li>
                                            <li className="li_menu"><a href="san-pham-noi-bat.html" title="Sản phẩm">Sản phẩm</a>
                                            </li>
                                            <li className="li_menu"><a href="tin-tuc.html" title="Tin tức">Tin tức</a></li>
                                            <li className="li_menu"><a href="lien-he.html" title="Liên hệ">Liên hệ</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-md-6 col-12">
                                <div className="widget-ft first clearfix">
                                    <h4 className="title-menu">
                                        <a role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu02" aria-controls="collapseListMenu02">
                                            Bất động sản tp.hcm <i className="fa fa-caret-down" aria-hidden="true" />
                                        </a>
                                    </h4>
                                    <div className="collapse" id="collapseListMenu02">
                                        <ul className="list-menu">
                                            <li className="li_menu"><a href="index.html" title="Trang chủ">Trang chủ</a></li>
                                            <li className="li_menu"><a href="gioi-thieu.html" title="Giới thiệu">Giới thiệu</a></li>
                                            <li className="li_menu"><a href="san-pham-noi-bat.html" title="Sản phẩm">Sản phẩm</a>
                                            </li>
                                            <li className="li_menu"><a href="tin-tuc.html" title="Tin tức">Tin tức</a></li>
                                            <li className="li_menu"><a href="lien-he.html" title="Liên hệ">Liên hệ</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-md-6 col-12">
                                <div className="widget-ft first clearfix">
                                    <h4 className="title-menu">
                                        <a role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu03" aria-controls="collapseListMenu03">
                                            mua bán bất động sản <i className="fa fa-caret-down" aria-hidden="true" />
                                        </a>
                                    </h4>
                                    <div className="collapse" id="collapseListMenu03">
                                        <ul className="list-menu">
                                            <li className="li_menu"><a href="index.html" title="Trang chủ">Trang chủ</a></li>
                                            <li className="li_menu"><a href="gioi-thieu.html" title="Giới thiệu">Giới thiệu</a></li>
                                            <li className="li_menu"><a href="san-pham-noi-bat.html" title="Sản phẩm">Sản phẩm</a>
                                            </li>
                                            <li className="li_menu"><a href="tin-tuc.html" title="Tin tức">Tin tức</a></li>
                                            <li className="li_menu"><a href="lien-he.html" title="Liên hệ">Liên hệ</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-md-6 col-12">
                                <div className="widget-ft first clearfix">
                                    <h4 className="title-menu">
                                        <a role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu04" aria-controls="collapseListMenu04">
                                            cho thuê bất động sản <i className="fa fa-caret-down" aria-hidden="true" />
                                        </a>
                                    </h4>
                                    <div className="collapse" id="collapseListMenu04">
                                        <ul className="list-menu">
                                            <li className="li_menu"><a href="index.html" title="Trang chủ">Trang chủ</a></li>
                                            <li className="li_menu"><a href="gioi-thieu.html" title="Giới thiệu">Giới thiệu</a></li>
                                            <li className="li_menu"><a href="san-pham-noi-bat.html" title="Sản phẩm">Sản phẩm</a>
                                            </li>
                                            <li className="li_menu"><a href="tin-tuc.html" title="Tin tức">Tin tức</a></li>
                                            <li className="li_menu"><a href="lien-he.html" title="Liên hệ">Liên hệ</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer clearfix">
                    <div className="mid-footer section clearfix">
                        <div className="container">
                            <div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
                                        <div className="widget-ft clearfix">
                                            <div className="section firstmenu clearfix">
                                                <a href="index.html" className="logo-footer">
                                                    <img src="../bizweb.dktcdn.net/100/393/384/themes/844266/assets/logofooterb338.png?1646297888986" alt="logo Template Bất Động Sản" />
                                                </a>
                                                <div className="time_work clearfix">
                                                    <div className="itemfooter cont clearfix">
                                                        <div className="r">
                                                            <i className="fas fa-map-marker-alt" />
                                                            <span><b>Địa chỉ: </b>Tầng 8 Ladeco, 266 Đội Cấn, Hà Nội</span>
                                                        </div>
                                                        <div className="r">
                                                            <i className="fas fa-phone" />
                                                            <a className="fone" href="tel:19006750"><b>Hotline: </b>1900 6750</a>
                                                        </div>
                                                        <div className="r">
                                                            <i className="fas fa-envelope" />
                                                            <a href="mailto:awesome160916@gmail.com"><b>Email:
                                                            </b>awesome160916@gmail.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                                        <div className="widget-ft first clearfix">
                                            <h4 className="title-menu">
                                                <a role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu05" aria-controls="collapseListMenu05">
                                                    Tài khoản <i className="fa fa-caret-down" aria-hidden="true" />
                                                </a>
                                            </h4>
                                            <div className="collapse" id="collapseListMenu05">
                                                <ul className="list-menu">
                                                    <li className="li_menu"><a href="index.html" title="Trang chủ">Trang chủ</a>
                                                    </li>
                                                    <li className="li_menu"><a href="gioi-thieu.html" title="Giới thiệu">Giới
                                                        thiệu</a></li>
                                                    <li className="li_menu"><a href="san-pham-noi-bat.html" title="Sản phẩm">Sản
                                                        phẩm</a></li>
                                                    <li className="li_menu"><a href="tin-tuc.html" title="Tin tức">Tin tức</a></li>
                                                    <li className="li_menu"><a href="lien-he.html" title="Liên hệ">Liên hệ</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                                        <div className="widget-ft first clearfix">
                                            <h4 className="title-menu">
                                                <a role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu06" aria-controls="collapseListMenu06">
                                                    Về Batdongsan.vn <i className="fa fa-caret-down" aria-hidden="true" />
                                                </a>
                                            </h4>
                                            <div className="collapse" id="collapseListMenu06">
                                                <ul className="list-menu">
                                                    <li className="li_menu"><a href="index.html" title="Trang chủ">Trang chủ</a>
                                                    </li>
                                                    <li className="li_menu"><a href="gioi-thieu.html" title="Giới thiệu">Giới
                                                        thiệu</a></li>
                                                    <li className="li_menu"><a href="san-pham-noi-bat.html" title="Sản phẩm">Sản
                                                        phẩm</a></li>
                                                    <li className="li_menu"><a href="tin-tuc.html" title="Tin tức">Tin tức</a></li>
                                                    <li className="li_menu"><a href="lien-he.html" title="Liên hệ">Liên hệ</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                                        <div className="widget-ft first clearfix">
                                            <h4 className="title-menu">
                                                <a role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu07" aria-controls="collapseListMenu07">
                                                    Quy định <i className="fa fa-caret-down" aria-hidden="true" />
                                                </a>
                                            </h4>
                                            <div className="collapse" id="collapseListMenu07">
                                                <ul className="list-menu">
                                                    <li className="li_menu"><a href="index.html" title="Trang chủ">Trang chủ</a>
                                                    </li>
                                                    <li className="li_menu"><a href="gioi-thieu.html" title="Giới thiệu">Giới
                                                        thiệu</a></li>
                                                    <li className="li_menu"><a href="san-pham-noi-bat.html" title="Sản phẩm">Sản
                                                        phẩm</a></li>
                                                    <li className="li_menu"><a href="tin-tuc.html" title="Tin tức">Tin tức</a></li>
                                                    <li className="li_menu"><a href="lien-he.html" title="Liên hệ">Liên hệ</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-footer-bottom copyright clearfix">
                        <div className="container">
                            <div className="inner clearfix">
                                <div className="row">
                                    <div className="col-xl-9 col-lg-8 col-12">
                                        <div id="copyright" className="fot_copyright">


                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-12">
                                        <div className="social clearfix">
                                            <span>Kết nối với chúng tôi trên:</span>
                                            <a className="fb" href="https://www.facebook.com/sapowebvietnam/" title="Theo dõi trên Facebook"><i className="fab fa-facebook" /></a>
                                            <a className="tw" href="https://twitter.com/" title="Theo dõi trên Twitter"><i className="fab fa-twitter" /></a>
                                            <a className="go" href="https://google.com.vn/" title="Theo dõi trên Google"><i className="fab fa-google" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="backtop" title="Lên đầu trang"><i className="fa fa-angle-up" aria-hidden="true" /></a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default WebsiteLayout