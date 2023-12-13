'use client'

import Link from "next/link"

const TopBlogs = () => {
    return (
        <div className="bg-light-gray-2 rounded">
            <div className="p-2 d-flex flex-column">
                <h6>Recent Articles</h6>
                <div className="border-bottom mb-2 py-2">
                    <Link className="text-decoration-underline text-success" href={'/'}>
                        Esse enim cillum et laborum veniam reprehenderit do ex.
                    </Link>
                </div>
                <div className="border-bottom mb-2 py-2">
                    <Link className="text-decoration-underline text-success" href={'/'}>Esse enim cillum et laborum veniam reprehenderit do ex.</Link>
                </div>
                <div className="border-bottom mb-2 py-2">
                    <Link className="text-decoration-underline text-success" href={'/'}>Esse enim cillum et laborum veniam reprehenderit do ex.</Link>
                </div>
                <div className="border-bottom mb-2 py-2">
                    <Link className="text-decoration-underline text-success" href={'/'}>Esse enim cillum et laborum veniam reprehenderit do ex.</Link>
                </div>
            </div>
        </div>
    )
}

export default TopBlogs