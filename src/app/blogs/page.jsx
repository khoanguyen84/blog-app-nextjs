'use client'
import useSWR from "swr"
import dayjs from "dayjs"
import CreateBlogModel from "@/components/CreateBlogModel"
import { useState } from "react"
import { FaPlus, FaRegEdit, FaRegEye, FaRegTrashAlt, FaSearch } from "react-icons/fa"
import Link from "next/link"
import { Container, Row, Col, Stack, Form, ListGroup, ListGroupItem } from 'react-bootstrap';

const fetcher = (url) => fetch(url).then((res) => res.json())
const BlogPage = () => {
    const { data: blogList, error, isLoading } = useSWR(
        'https://jsonserver-vercel-api.vercel.app/posts?_page=1&_limit=6&_sort=createdAt&_order=desc',
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
            <Container className="mt-2">
                <Row>
                    <Col xs={3}>
                        <Stack gap={4}>
                            <div>
                                <Form className="d-flex align-items-center">
                                    <Form.Control size="sm" placeholder="search..." />
                                    <FaSearch size={14} className="text-secondary" style={{ marginLeft: '-22px' }} />
                                </Form>
                            </div>
                            <div>
                                <h6>Categories</h6>
                                <ListGroup>
                                    <ListGroupItem active role="button">Culture</ListGroupItem>
                                    <ListGroupItem role="button">Creativity</ListGroupItem>
                                    <ListGroupItem role="button">Food</ListGroupItem>
                                    <ListGroupItem role="button">Travel</ListGroupItem>
                                    <ListGroupItem role="button">Music</ListGroupItem>
                                </ListGroup>
                            </div>
                            <div className="p-3 bg-light-gray rounded">
                                <h6>Top Blogs</h6>
                                <div className="d-flex mb-2">
                                    <h2 className="fw-bolder me-2">1</h2>
                                    <div className="d-flex flex-column">
                                        <span className="fw-bolder">Exercitation dolore veniam et aliqua.</span>
                                        <span className="text-secondary fst-italic">Dolor ad ea incididunt elit velit nisi deserunt et esse esse sit non duis.</span>
                                    </div>
                                </div>
                                <div className="d-flex mb-2">
                                    <h2 className="fw-bolder me-2">2</h2>
                                    <div className="d-flex flex-column">
                                        <span className="fw-bolder">Exercitation dolore veniam et aliqua.</span>
                                        <span className="text-secondary fst-italic">Dolor ad ea incididunt elit velit nisi deserunt et esse esse sit non duis.</span>
                                    </div>
                                </div>
                                <div className="d-flex mb-2">
                                    <h2 className="fw-bolder me-2">3</h2>
                                    <div className="d-flex flex-column">
                                        <span className="fw-bolder">Exercitation dolore veniam et aliqua.</span>
                                        <span className="text-secondary fst-italic">Dolor ad ea incididunt elit velit nisi deserunt et esse esse sit non duis.</span>
                                    </div>
                                </div>
                            </div>
                        </Stack>
                    </Col>
                    <Col xs={9} className="">
                        <Row>
                            {
                                blogList?.map((blog) => (
                                    <Col key={blog.id} md={6} className="mb-3 ">
                                        <Link href={'/'}>
                                            <div className="bg-light-gray-2 rounded p-3">
                                                <img style={{ maxWidth: '100%' }} className="mb-3" src={blog.imageUrl} alt="" />
                                                <span className="text-secondary">Travel, {dayjs(blog.createdAt).format('MMM DD YYYY')}</span>
                                                <p className="fw-bolder my-2">{blog.title}</p>
                                                <p className="show-limit-chars">{blog.description}</p>
                                            </div>
                                        </Link>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BlogPage