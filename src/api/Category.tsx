import { CategoryType } from '../types/Category'
import instance from './instance';

export const list = () => {
    const url = "/categories";
    return instance.get(url);
}

export const read = (id: number) => {
    const url = `/categories/${id}`;
    return instance.get(url);
}
export const create = (category: CategoryType) => {
    const url = `/categories`;
    return instance.post(url, category);
}
export const remove = (id: number) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
}
export const update = (category: CategoryType) => {
    const url = `/categories/${category._id}`;
    return instance.put(url, category);
}


// export const SearchProductByName = (keyword: String) => {
//     const url = `/categories?productname_like=${keyword}`;
//     return instance.get(url);
// };