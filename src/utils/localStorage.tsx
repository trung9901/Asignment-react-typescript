import { ProductType } from "../types/Product";
import { UserType } from "../types/User";
// import { AddtoCart } from './../api/Cart';

export const authenticated = (user: UserType, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user));
    next();
}
export const isAuthenticate = () => {
    if (!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.getItem('user') as string)
}

let cart: ProductType[];
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart') as string);
}
export const addToCart = (newProduct: ProductType, next: () => void) => {
    const existProduct = cart.find(product => product._id === newProduct._id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity++;
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    next();
}

// export const increaseItemInCart = (id: Number | String, next: () => void) => {
//     cart.find(product => product.id === id).quantity++;
//     localStorage.setItem('cart', JSON.stringify(cart))
//     next();
// }

// export const decreaseItemInCart = (id, next) => {
//     const currenProduct = cart.find(product => product.id === id);
//     currenProduct.quantity--;
//     // nếu sản phẩm giảm nhỏ hơn 1 thì xóa
//     if (currenProduct.quantity < 1) {
//         const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?');
//         if (confirm) {
//             cart = cart.filter(item => item.id !== currenProduct.id);
//         } else {
//             currenProduct.quantity++;
//         }
//     }
//     localStorage.setItem('cart', JSON.stringify(cart))
//     next();
// }

export const removeItemInCart = (id: Number | String, next: () => void) => {
    const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?');
    if (confirm) {
        cart = cart.filter(item => item._id !== id);
        console.log(cart)
    } else {

    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}

