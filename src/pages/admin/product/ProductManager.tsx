import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../../types/Product'

type ProductManagerProps = {
    products: ProductType[]
    onRemove: (id: number) => void
}

const ProductManager = (props: ProductManagerProps) => {
    return (
        <div>
            <h2>Quản lý sản phẩm</h2>
            <Link to={`add`} className="btn btn-primary my-3" >Thêm sản phẩm </Link>
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
                    {props.products?.map((product, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{product.name}</td>
                                <td scope="row" ><img src={`${product.img}`} alt="" width="10%" /> </td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.description}</td>
                                <td className="d-flex">
                                    <div className="px-2">
                                        <Link to={`${product._id}/edit`} className="btn btn-success">Update</Link>
                                        {/* <a href={`/products/${product._id}/edit`} className="btn btn-success">update</a> */}
                                    </div>
                                    <div className="">
                                        <button onClick={() => props.onRemove(product._id)} className="btn btn-danger">delete</button>
                                    </div>

                                </td>
                            </tr>)
                    })}


                </tbody>
            </table>

        </div>
    )
}

export default ProductManager