import Link from "next/link";
import { Container } from "react-bootstrap";
import { FaKickstarterK, FaUserCircle } from "react-icons/fa";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <Container>
                <Link className="navbar-brand d-flex align-items-center" href={"/"}>
                    <FaKickstarterK size={35} className="text-warning" />'s Blog
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" href={"/blogs"}>
                                Blogs
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="justify-content-end">
                    <div>
                        <Link href={"/dashboard/blogs"}>
                            <FaUserCircle size={20} className="text-white" />
                        </Link>
                    </div>
                </div>
            </Container>
        </nav>

    )
}

export default Header;