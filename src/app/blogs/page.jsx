'use client'
import useSWR from "swr"
import dayjs from "dayjs"
import CreateBlogModel from "@/components/CreateBlogModel"
import { useState } from "react"

const fetcher = (url) => fetch(url).then((res) => res.json())
const BlogPage = () => {
    const [selectPost, setSelectPost] = useState({})
    const [openCreateModel, setOpenCreateModel] = useState(false)
    const { data: blogList, error, isLoading } = useSWR(
        'https://jsonserver-vercel-api.vercel.app/posts?_page=1&_limit=15&_sort=createdAt&_order=desc',
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )
    if (isLoading) {
        return <p>Loading ...</p>
    }
    return (
        <>
            <div className="d-flex align-items-center justify-content-between">
                <h5>Blog List</h5>
                <button className="btn btn-sm btn-warning"
                    onClick={() => setOpenCreateModel(true)}
                >Add Blog</button>
            </div>
            <div className="mt-1">
                <table className="table table-striped table-hover" role="button">
                    <thead className="table-success">
                        <tr>
                            <th>
                                <input type="checkbox" className="form-checkbox" />
                            </th>
                            <th>Title</th>
                            <th>Author</th>
                            <th className="text-end">Created Date</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogList?.map((blog) => (
                                <tr key={blog.id}>
                                    <td>
                                        <input type="checkbox" className="form-checkbox" />
                                    </td>
                                    <td>
                                        {blog.title}
                                    </td>
                                    <td>
                                        {blog.author}
                                    </td>
                                    <td className="text-end">
                                        {dayjs(blog.createdAt).format('MMM DD YYYY')}
                                    </td>
                                    <td className="text-end">
                                        <button className="btn btn-sm btn-primary">View</button>
                                        <button className="btn btn-sm btn-warning mx-1">Edit</button>
                                        <button className="btn btn-sm btn-danger">Remove</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <CreateBlogModel openCreateModel={openCreateModel} setOpenCreateModel={setOpenCreateModel}/>
        </>
    )
}

export default BlogPage