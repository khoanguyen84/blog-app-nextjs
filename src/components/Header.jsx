import Link from "next/link";
import { FaKickstarterK } from "react-icons/fa";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" href={"/"}>
                    <FaKickstarterK size={35} className="text-warning"/>'s Blog
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" href={"/dashboard/blogs"}>
                                Management Blogs
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header;