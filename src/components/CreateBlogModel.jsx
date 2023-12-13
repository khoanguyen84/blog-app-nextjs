import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { v4 as uuid } from "uuid";

const CreateBlogModel = ({ openCreateModel, setOpenCreateModel }) => {
    const [post, setPost] = useState({
        id: uuid(),
        title: '',
        author: '',
        description: '',
        createdAt: ((new Date()).getTime()),
        updatedAt: ((new Date()).getTime()),
        imageUrl: ''
    })

    const handleInputPost = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleCloseModel = () => {
        setOpenCreateModel(false)
        setPost({
            id: uuid(),
            title: '',
            author: '',
            description: '',
            createdAt: ((new Date()).getTime()),
            updatedAt: ((new Date()).getTime()),
            imageUrl: ''
        })
    }

    const handleCreatePost = async (e) => {
        e.preventDefault();
        let createRes = await fetch('https://jsonserver-vercel-api.vercel.app/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        const result = await createRes.json()
        if (result) {
            handleCloseModel();
            toast.success('Blog created success')
            mutate('https://jsonserver-vercel-api.vercel.app/posts?_page=1&_limit=15&_sort=createdAt&_order=desc')
        }
    }
    return (
        <>
            <Modal
                show={openCreateModel}
                onHide={() => setOpenCreateModel(false)}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Form onSubmit={handleCreatePost}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label className="col-form-label-sm">Title</Form.Label>
                            <Form.Control type="text" size="sm" placeholder="title..."
                                name="title"
                                value={post.title}
                                onInput={handleInputPost}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="col-form-label-sm">Image URL</Form.Label>
                            <Form.Control type="url" size="sm" placeholder="image url..."
                                name="imageUrl"
                                value={post.imageUrl}
                                onInput={handleInputPost}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="col-form-label-sm">Author</Form.Label>
                            <Form.Control type="text" size="sm" placeholder="author..."
                                name="author"
                                value={post.author}
                                onInput={handleInputPost}
                            />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label className="col-form-label-sm">Description</Form.Label>
                            <Form.Control as='textarea' size="sm" placeholder="description..." cols="30" rows="5"
                                name="description"
                                value={post.description}
                                onInput={handleInputPost}
                            ></Form.Control>
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" variant="secondary" onClick={() => setOpenCreateModel(false)}>
                            Close
                        </Button>
                        <Button size="sm" type="submit" variant="primary">Create</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>

    )
}

export default CreateBlogModel;