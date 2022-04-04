import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { PostType } from '../../../types/Post'

type PostAddProps = {
    onAdd: (props: PostType) => void
}
type FormInputs = {
    title: string,
    content: string,
    img: string
}
const PostAdd = (props: PostAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()
    const Navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInputs> = (data: any) => {
        props.onAdd(data)
        // console.log(data)
        Navigate("/admin/posts")
    }
    return (
        <div>
            <h2>Thêm bài viết</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Tiêu đề" {...register('title')} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Content</label>
                    <textarea cols={30} rows={10} defaultValue={""} id="content" {...register('content')} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Image</label>
                    <input type="text" className="form-control" id="img"  {...register('img')} />
                </div>

                <button type="submit" className="btn btn-primary">Thêm bài viết</button>

            </form>
        </div>
    )
}

export default PostAdd