'use client'
import Link from "next/link"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())
const TopBlogs = () => {
    const { data: topBlogs } = useSWR(
        'https://jsonserver-vercel-api.vercel.app/posts?_page=1&_limit=3&_sort=createdAt&_order=desc',
        fetcher
    )
    return (
        <>
            <div className="p-3 bg-light-gray rounded">
                <h6>Top Blogs</h6>
                {
                    topBlogs?.map((blog, index) => (
                        <Link href={`blogs/${blog.id}`} className="d-flex mb-2 top-blogs" key={blog.id}>
                            <h2 className="fw-bolder me-2">{index + 1}</h2>
                            <div className="d-flex flex-column">
                                <span className="fw-bolder">{blog.title}</span>
                                <span className="text-secondary fst-italic show-limit-chars">{blog.description}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default TopBlogs