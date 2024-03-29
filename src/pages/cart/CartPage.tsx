import React, { useEffect, useState } from 'react'
import { ProductType } from '../../types/Product';

type Props = {
    onIncreaseItemInCart: (id: number) => void
    onDecreaseItemInCart: (id: number) => void
    onRemoveCart: (id: number) => void

}

const CartPage = (props: Props) => {
    // const [cartItem, setCart] = useState<any>([])
    // useEffect(() => {
    //     const getCart = () => {
    //         let cart: any = [];
    //         if (localStorage.getItem('cart')) {
    //             cart = JSON.parse(localStorage.getItem('cart') as string);
    //         }
    //         console.log(cart)
    //         setCart(cart)
    //     }
    //     getCart()
    // }, [])
    let cart: any = [];
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart') as string);
    }
    return (
        <div>
            <div className="main-index my-5">

                <section className="main-cart-page main-container col1-layout">
                    <div className="main container cartpcstyle">
                        <div className="wrap_background_aside margin-bottom-40">
                            <div className="header-cart">
                                <div className="title-block-page">
                                    <h1 className="title_cart">
                                        <span>Giỏ hàng của bạn</span>
                                    </h1>
                                </div>
                            </div>
                            <div className="cart-page d-xl-block d-none">
                                <div className="drawer__inner">
                                    <div className="CartPageContainer">
                                        <form method="post" noValidate className="cart ajaxcart cartpage">
                                            <div className="cart-header-info">
                                                <div>Thông tin sản phẩm</div><div>Đơn giá</div><div>Số lượng</div><div>Thành tiền</div>
                                            </div>
                                            {/* --------------------- */}
                                            {cart?.map((item: any, index: number) => {
                                                return (<div className="ajaxcart__inner ajaxcart__inner--has-fixed-footer cart_body items my-1" key={index} >
                                                    <div className="ajaxcart__row">
                                                        <div className="ajaxcart__product cart_product" data-line={1}>
                                                            <a href="/samsung-galaxy-note-21" className="ajaxcart__product-image cart_image" title="Samsung Galaxy Note 21"><img src="//bizweb.dktcdn.net/thumb/compact/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg" alt="Samsung Galaxy Note 21" /></a>
                                                            <div className="grid__item cart_info">
                                                                <div className="ajaxcart__product-name-wrapper cart_name">
                                                                    <a href="/samsung-galaxy-note-21" className="ajaxcart__product-name h4" title="Samsung Galaxy Note 21">{item.name}</a>
                                                                    <a className="cart__btn-remove remove-item-cart ajaxifyCart--remove" onClick={() => { props.onRemoveCart(item._id) }} >Xóa</a>
                                                                </div>
                                                                <div className="grid">
                                                                    <div className="grid__item one-half text-right cart_prices">
                                                                        <span className="cart-price">{item.price}₫</span>
                                                                    </div>
                                                                </div>
                                                                <div className="grid">
                                                                    <div className="grid__item one-half cart_select">
                                                                        <div className="ajaxcart__qty input-group-btn">
                                                                            <button type="button" className="ajaxcart__qty-adjust ajaxcart__qty--minus items-count" data-id data-qty={2} data-line={1} aria-label="-" onClick={() => props.onDecreaseItemInCart(item._id)}>
                                                                                -
                                                                            </button>
                                                                            <input type="text" name="" className="ajaxcart__qty-num number-sidebar" value={item.quantity} />
                                                                            <button type="button" className="ajaxcart__qty-adjust ajaxcart__qty--plus items-count" data-id data-line={1} data-qty={4} aria-label="+" onClick={() => { props.onIncreaseItemInCart(item._id) }}>
                                                                                +
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="grid">
                                                                    <div className="grid__item one-half text-right cart_prices">
                                                                        <span className="cart-price">₫</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>)

                                            })}

                                            {/* --------------------- */}

                                            <div className="ajaxcart__footer ajaxcart__footer--fixed cart-footer">
                                                <div className="row">
                                                    <div className="col-lg-4 col-12 offset-md-8 offset-lg-8 offset-xl-8">
                                                        <div className="ajaxcart__subtotal">
                                                            <div className="cart__subtotal">
                                                                <div className="cart__col-6">Tổng tiền:</div>
                                                                <div className="text-right cart__totle"><span className="total-price">₫</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="cart__btn-proceed-checkout-dt">
                                                            <button type="button" className="button btn btn-default cart__btn-proceed-checkout" id="btn-proceed-checkout" title="Thanh toán">Thanh toán</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-mobile-page d-block d-xl-none">
                                <div className="CartMobileContainer" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default CartPage