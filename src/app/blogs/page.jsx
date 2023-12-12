'use client'
import useSWR from "swr"
import dayjs from "dayjs"

const fetcher = (url) => fetch(url).then((res) => res.json())
const BlogPage = () => {
    const { data: blogList, error, isLoading } = useSWR('https://jsonserver-vercel-api.vercel.app/posts?_page=1&_limit=20', fetcher)
    if (isLoading) {
        return <p>Loading ...</p>
    }
    return (
        <>
            <div className="d-flex align-items-center justify-content-between">
                <h5>Blog List</h5>
                <button className="btn btn-sm btn-warning">Add Blog</button>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" className="form-checkbox" />
                            </th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Created Date</th>
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
                                    <td>
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
        </>
    )
}

export default BlogPage