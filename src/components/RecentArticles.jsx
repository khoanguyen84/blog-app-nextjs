'use client'
import Link from "next/link"
import { HiPaperAirplane } from "react-icons/hi2";
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())
const RecentArticles = () => {
    const { data: recentArticles } = useSWR(
        'https://jsonserver-vercel-api.vercel.app/posts?_page=1&_limit=5&_sort=createdAt&_order=desc',
        fetcher
    )
    return (
        <div className="bg-light-gray-2 rounded">
            <div className="p-2 d-flex flex-column">
                <h6>Recent Articles</h6>
                {
                    recentArticles?.map(blog => (
                        <div className="border-bottom mb-2 py-2 recent-articles" key={blog.id}>
                            <Link className="text-decoration-underline text-success d-flex align-items-center" href={`/blogs/${blog.id}`}>
                                <HiPaperAirplane className="me-2"/>
                                {blog.title}
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentArticles