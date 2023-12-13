'use client'
import useSWR from "swr";
import { Form, Image, Stack, Button } from "react-bootstrap";
import { FaRegClock, FaRegComment, FaRegShareSquare, FaRegStar, FaRegUser } from "react-icons/fa";
import dayjs from "dayjs";

const fetcher = (url) => fetch(url).then(res => res.json())
const BlogDetailPage = (props) => {
    const { params } = props
    console.log(params);
    const { data: blog, error, isLoading } = useSWR(
        `https://jsonserver-vercel-api.vercel.app/posts/${params?.id}`,
        fetcher
    )
    console.log(blog);
    return (
        <>
            {
                isLoading ? (<p>Loading...</p>) : (
                    <>
                        <Stack gap={3}>
                            <Image rounded src={blog?.imageUrl} fluid></Image>
                            <div className="d-flex justify-content-start text-secondary">
                                <div className="d-flex align-items-center me-3">
                                    <FaRegClock className="me-1" />
                                    {dayjs(blog?.createdAt).format('MMM DD YYYY')}
                                </div>
                                <div className="d-flex align-items-center me-3">
                                    <FaRegUser className="me-1" />
                                    {blog?.author}
                                </div>
                                <div className="d-flex align-items-center me-3" role="button">
                                    <FaRegComment className="me-1" />
                                    <span>Leave a comment</span>
                                </div>
                            </div>
                            <div>
                                {blog?.description}
                            </div>
                        </Stack>
                        <Stack gap={3} className="mt-4">
                            <h5>Rating</h5>
                            <div className="d-flex align-items-center justify-content-between">
                                <div role="button">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                                <div className="d-flex align-items-center" role="button">
                                    <FaRegShareSquare className="me-1" /> Share
                                </div>
                            </div>
                        </Stack>
                    </>
                )
            }
            <Stack gap={3} className="mt-4">
                <h5>Leave a comment</h5>
                <Form className="border p-2 rounded">
                    <Form.Group>
                        <Form.Control as='textarea' placeholder="Write a comment" rows={7}></Form.Control>
                        <Button type="submit" variant="secondary" className="mt-2 float-end">REPLY</Button>
                    </Form.Group>
                </Form>
            </Stack>
        </>
    )
}
export default BlogDetailPage;