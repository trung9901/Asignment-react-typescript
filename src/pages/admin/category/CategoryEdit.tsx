import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { readCategory } from '../../../api/Category'
import { CategoryType } from '../../../types/Category'

type CategoryAddProps = {
    onUpdate: (props: CategoryType) => void
}
type FormInputs = {
    name: string
}
const CategoryEdit = (props: CategoryAddProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>()
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getCategories = async () => {
            const { data } = await readCategory(id);
            reset(data);
        }
        getCategories();
    }, [])

    const onSubmit: SubmitHandler<FormInputs> = (data: any) => {
        props.onUpdate(data)
        // console.log(data)
        Navigate("/admin/categories")
    }
    return (
        <div>
            <h2>Sửa danh mục</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Tên danh mục" {...register('name')} />
                </div>

                <button type="submit" className="btn btn-primary">Sửa danh mục</button>

            </form>
        </div>
    )
}

export default CategoryEdit