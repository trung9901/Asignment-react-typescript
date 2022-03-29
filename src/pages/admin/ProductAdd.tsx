import React from 'react'

import { useForm, SubmitHandler } from 'react-hook-form';
type Props = {}
type FormInputs = {
    name: string,
    price: number,
    img: string,
    quantity: number,
    description: string
}
const ProductAdd = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()
    const onSubmit: SubmitHandler<FormInputs> = (data: any) => {
        console.log(data)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Tên sản phẩm" {...register('name')} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">image</label>
                    <input type="file" className="form-control-file" id="img" {...register('img')} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input type="number" className="form-control" id="price" placeholder="Giá" {...register('price')} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Quantity</label>
                    <input type="number" className="form-control" id="quantity" placeholder="Số lượng" {...register('quantity')} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="description" {...register('description')} />
                </div>
                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>

            </form>
        </div>
    )
}

export default ProductAdd