'use client'
import { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { MdOutlineMenuOpen } from "react-icons/md";


const categoryList = [
    {
        id: 1,
        name: 'Culture'
    },
    {
        id: 2,
        name: 'Creativity'
    },
    {
        id: 3,
        name: 'Food'
    },
    {
        id: 4,
        name: 'Travel'
    },
    {
        id: 5,
        name: 'Music'
    },
]
const Category = () => {
    const [selectCategory, setSelectCategory] = useState('Culture')
    return (
        <>
            <div>
                <h6>Categories</h6>
                <ListGroup>
                    {
                        categoryList?.map((cat) => (
                            <ListGroupItem key={cat.id} role="button"
                                className="d-flex align-items-center"
                                active = {cat.name === selectCategory}
                                onClick={() => setSelectCategory(cat.name)}
                            >
                                <MdOutlineMenuOpen className="me-2"/>
                                {cat.name}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        </>
    )
}

export default Category;