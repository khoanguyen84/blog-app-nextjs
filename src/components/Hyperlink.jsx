'use client'

import Link from "next/link"
import { FaLink } from "react-icons/fa"

const Hyperlink = () => {
    return (
        <div className="bg-light-gray-2 rounded">
            <div className="p-2 d-flex flex-column">
                <h6>Links</h6>
                <div className="border-bottom mb-2 py-2">
                    <Link className="text-decoration-underline text-success" href={'/'}>
                        <FaLink className="me-2" />
                        Fullstack
                    </Link>
                </div>
                <div className="border-bottom mb-2 py-2">
                    <Link className="text-decoration-underline text-success" href={'/'}>
                        <FaLink className="me-2" />
                        Easy Frontend
                    </Link>
                </div>
                <div className="border-bottom mb-2 py-2">
                    <Link className="text-decoration-underline text-success" href={'/'}>
                        <FaLink className="me-2" />
                        HoleTex
                    </Link>
                </div>
                <div className="border-bottom mb-2 py-2">
                    <Link className="text-decoration-underline text-success" href={'/'}>
                        <FaLink className="me-2" />
                        HoiDanIT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hyperlink