import React from 'react'
import { Link } from 'react-router-dom'
import { UserType } from '../../../types/User'

type UserManagerProps = {
    users: UserType[]
    onRemove: (id: number) => void
}

const UserManager = ({ users, onRemove }: UserManagerProps) => {
    return (
        <div>
            <h2>Quản lý khách hàng</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên </th>
                        <th scope="col">Email</th>
                        <th scope="col">Mật khẩu</th>
                        <th scope="col">Phân quyền</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>

                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.role}</td>
                                <td className="d-flex">
                                    <div className="px-2">
                                        <Link to={`${user._id}/edit`} className="btn btn-success">Update</Link>
                                    </div>
                                    <div className="">
                                        <button onClick={() => onRemove(user._id)} className="btn btn-danger">delete</button>
                                    </div>

                                </td>
                            </tr>)
                    })}


                </tbody>
            </table>

        </div>
    )
}

export default UserManager