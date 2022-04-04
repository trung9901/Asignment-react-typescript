import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { readPost } from '../../../api/Post'
import { PostType } from '../../../types/Post'


type PostAddProps = {
    onUpdate: (props: PostType) => void
}
type FormInputs = {
    title: string,
    content: string,
    img: string
}
const PostEdit = (props: PostAddProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>()
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getPosts = async () => {
            const { data } = await readPost(id);
            reset(data);
        }
        getPosts();
    }, [])
    const onSubmit: SubmitHandler<FormInputs> = (data: any) => {
        props.onUpdate(data)
        // console.log(data)
        Navigate("/admin/posts")
    }
    return (
        <div>
            <h2>Sửa bài viết</h2>
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

                <button type="submit" className="btn btn-primary">Sửa bài viết</button>

            </form>
        </div>
    )
}

export default PostEdit