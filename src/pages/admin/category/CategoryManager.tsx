import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryType } from '../../../types/Category'

type CategoryManagerProps = {
    categories: CategoryType[]
    onRemove: (id: number) => void
}

const CategoryManager = (props: CategoryManagerProps) => {
    return (
        <div>
            <h2>Quản lý danh mục</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên </th>
                        <th scope="col">Ảnh</th>

                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {props.categories?.map((category, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{category.name}</td>
                                <td scope="row" ><img src={`${category.img}`} alt="" width="10%" /> </td>

                                <td className="d-flex">
                                    <div className="px-2">
                                        <Link to={`${category._id}/edit`} className="btn btn-success">Update</Link>
                                        {/* <a href={`/products/${product._id}/edit`} className="btn btn-success">update</a> */}
                                    </div>
                                    <div className="">
                                        <button onClick={() => props.onRemove(category._id)} className="btn btn-danger">delete</button>
                                    </div>

                                </td>
                            </tr>)
                    })}


                </tbody>
            </table>
        </div>
    )
}

export default CategoryManager