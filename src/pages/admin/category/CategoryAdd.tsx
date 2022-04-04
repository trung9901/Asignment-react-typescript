import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CategoryType } from '../../../types/Category';
type CategoryAddProps = {
    onAdd: (props: CategoryType) => void
}
type FormInputs = {
    name: string,

}
const CategoryAdd = (props: CategoryAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()
    const Navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInputs> = (data: any) => {
        props.onAdd(data)
        // console.log(data)
        Navigate("/admin/Categories")
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input type="text" className="form-control" id="name" {...register('name')} />
                </div>

                <button type="submit" className="btn btn-primary">Thêm danh mục</button>

            </form>
        </div>
    )
}

export default CategoryAdd