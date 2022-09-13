import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { readusers } from '../../../api/User'
import { UserType } from '../../../types/User'

type UserEditProps = {
    onUpdate: (props: UserType) => void
}
type FormInputs = {
    name: string,
    email: string,
    password: string,
    role: string | number
}
const UserEdit = (props: UserEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>()
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getUsers = async () => {
            const { data } = await readusers(id);
            reset(data);
        }
        getUsers();
    }, [])

    const onSubmit: SubmitHandler<FormInputs> = (data: any) => {
        props.onUpdate(data)
        Navigate("/admin/users")
    }
    return (
        <div>
            <h2>Cập nhật tài khoản</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Tên sản phẩm" {...register('name')} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Giá" {...register('email')} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="text" className="form-control" id="password" placeholder="Số lượng" {...register('password')} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Phân quyền</label>
                    <input type="number" id="role" {...register('role')} />
                </div>
                <button type="submit" className="btn btn-primary">Cập nhật tài khoản</button>

            </form>
        </div>
    )
}

export default UserEdit