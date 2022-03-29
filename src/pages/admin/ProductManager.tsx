import React from 'react'
import { ProductType } from '../../types/Product'

type ProductManagerProps = {
    products: ProductType[]
    onRemove: (id: number) => void
}

const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
    return (
        <div>
            <h2>Quản lý sản phẩm</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên </th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {products?.map((product, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{product.name}</td>
                                <td><a href={`${product.img}`}></a></td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.description}</td>
                                <td>
                                    <div className="">
                                        <button onClick={() => onRemove(product.id)} className="btn btn-danger">delete</button>
                                    </div>
                                    <div className=""></div>
                                </td>
                            </tr>)
                    })}


                </tbody>
            </table>

        </div>
    )
}

export default ProductManager