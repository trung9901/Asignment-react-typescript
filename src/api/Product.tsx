import { ProductType } from '../types/Product'
import instance from './instance';
import { isAuthenticate } from "../utils/localStorage";

const user = isAuthenticate();

export const list = () => {
    const url = "/products";
    return instance.get(url);
}

export const read = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const create = (product: ProductType) => {
    const url = `/products/${user?.user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
    // const url = `/products`;
    // return instance.post(url, product);
}
export const remove = (id: number) => {
    // const url = `/products/${id}`;
    // return instance.delete(url);
    const url = `/products/${user?.user._id}/${id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
}
export const update = (product: ProductType) => {
    // const url = `/products/${product._id}`;
    // return instance.put(url, product);
    const url = `/products/${user?.user._id}/${product._id}`;
    return instance.put(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
}


// export const SearchProductByName = (keyword: String) => {
//     const url = `/products?productname_like=${keyword}`;
//     return instance.get(url);
// };