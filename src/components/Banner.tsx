import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div>

            <div className="section_slider ">
                <div className="container">
                    <div className="swiper-container slide-container">
                        <div className="swiper-main">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <a href="#" className="clearfix" title="HOT SALE - Sập Sàn">
                                        <picture>
                                            <source media="(min-width: 1200px)" srcSet="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/slider_1.jpg?1646907197259" />
                                            <source media="(min-width: 992px)" srcSet="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/slider_1.jpg?1646907197259" />
                                            <source media="(min-width: 569px)" srcSet="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/slider_1.jpg?1646907197259" />
                                            <source media="(max-width: 480px)" srcSet="//bizweb.dktcdn.net/thumb/grande/100/429/689/themes/841362/assets/slider_1.jpg?1646907197259" />
                                            <img src="//bizweb.dktcdn.net/100/429/689/themes/841362/assets/slider_1.jpg?1646907197259" alt="HOT SALE - Sập Sàn" className="img-responsive center-block" />
                                        </picture>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner