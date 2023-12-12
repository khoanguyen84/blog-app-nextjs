import { useState } from "react";
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
        if(result){
            handleCloseModel();
            toast.success('Blog created success')
            mutate('https://jsonserver-vercel-api.vercel.app/posts?_page=1&_limit=15&_sort=createdAt&_order=desc')
        }
    }
    return (
        <>
            <div className="modal fade show" style={{ display: openCreateModel ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleCreatePost}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5">Create Blog</h1>
                                <button type="button" className="btn-close"
                                    onClick={handleCloseModel}
                                />
                            </div>
                            <div className="modal-body">
                                <div className="form-group mb-3">
                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control form-control-sm" placeholder="title..."
                                        name="title"
                                        value={post.title}
                                        onInput={handleInputPost}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Image URL</label>
                                    <input type="url" className="form-control form-control-sm" placeholder="image url..."
                                        name="imageUrl"
                                        value={post.imageUrl}
                                        onInput={handleInputPost}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Author</label>
                                    <input type="text" className="form-control form-control-sm" placeholder="author..."
                                        name="author"
                                        value={post.author}
                                        onInput={handleInputPost}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" placeholder="description..." cols="30" rows="5"
                                        name="description"
                                        value={post.description}
                                        onInput={handleInputPost}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                    onClick={handleCloseModel}
                                >
                                    Close
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateBlogModel;