import Link from "next/link";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <Link className="navbar-brand" href={"/"}>
                    Khoa's Blog
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
            </div>
        </nav>

    )
}

export default Header;