import { ProductType } from '../types/Product'
import instance from './instance';
export const list = () => {
    const url = "/products";
    return instance.get(url);
}

export const read = (id: number) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const create = (product: ProductType) => {
    const url = `/products`;
    return instance.post(url, product);
}
export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const update = (product: ProductType) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}


export const SearchProductByName = (keyword: String) => {
    const url = `/products?productname_like=${keyword}`;
    return instance.get(url);
};