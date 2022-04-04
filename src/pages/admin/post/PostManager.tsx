import React from 'react'
import { Link } from 'react-router-dom'
import { PostType } from '../../../types/Post'

type PostManagerProps = {
    posts: PostType[]
    onRemove: (id: number) => void
}

const PostManager = (props: PostManagerProps) => {
    return (
        <div>
            <h2>Quản lý bài viết</h2>
            <Link to={`add`} className="btn btn-primary my-3" >Thêm bài viết </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tiêu đề </th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Nội dung</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {props.posts?.map((post, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{post.title}</td>
                                <td scope="row" ><img src={`${post.img}`} alt="" width="10%" /> </td>
                                <td>
                                    <textarea cols={30} rows={10} defaultValue={`${post.content}`} />

                                </td>
                                <td className="d-flex">
                                    <div className="px-2">
                                        <Link to={`${post._id}/edit`} className="btn btn-success">Update</Link>

                                    </div>
                                    <div className="">
                                        <button onClick={() => props.onRemove(post._id)} className="btn btn-danger">delete</button>
                                    </div>

                                </td>
                            </tr>)
                    })}


                </tbody>
            </table>
        </div>
    )
}

export default PostManager