'use client'
import useSWR from "swr"
import dayjs from "dayjs"
import { useState } from "react"
import Link from "next/link"
import { Row, Col, Pagination } from 'react-bootstrap';

const fetcher = (url) => fetch(url).then((res) => res.json())
const BlogPage = () => {
    const [page, setPage] = useState(1)
    const [direction, setDirection] = useState('next')
    const { data: blogList, error, isLoading } = useSWR(
        `https://jsonserver-vercel-api.vercel.app/posts?_page=${page}&_limit=6&_sort=createdAt&_order=desc`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )
    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1)
            setDirection('prev')
        }
    }

    const handleNextPage = () => {
        if (page < 6) {
            setPage(page + 1)
            setDirection('next')
        }
    }

    return (
        <>
            <Row>
                {
                    isLoading ? <p>Loading ...</p> : (
                        blogList?.map((blog) => (
                            <Col key={blog.id} md={6} className="mb-3 ">
                                <Link href={`/blogs/${blog.id}`}>
                                    <div className="bg-light-gray-2 rounded p-3">
                                        <img style={{ maxWidth: '100%' }} className="mb-3" src={blog.imageUrl} alt="" />
                                        <span className="text-secondary">Travel, {dayjs(blog.createdAt).format('MMM DD YYYY')}</span>
                                        <p className="fw-bolder my-2">{blog.title}</p>
                                        <p className="show-limit-chars">{blog.description}</p>
                                    </div>
                                </Link>
                            </Col>
                        )))
                }
            </Row>
            <Row >
                <Col xs={12} md={12}>
                    <Pagination size="sm" >
                        <Pagination.Item role="button" key={'prev'} active={direction == 'prev'} 
                            disabled={page <= 1}
                            onClick={handlePreviousPage}
                        >
                            Previous
                        </Pagination.Item>
                        <Pagination.Item role="button" key={'next'} active={direction == 'next'} 
                            disabled={page >= 6}
                            onClick={handleNextPage}
                        >
                            Next
                        </Pagination.Item>
                    </Pagination>
                </Col>
            </Row>
        </>
    )
}

export default BlogPage