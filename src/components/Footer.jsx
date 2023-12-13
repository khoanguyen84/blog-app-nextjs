const Footer = () => {
    return (
        <footer className="text-center bg-secondary text-white py-2 fixed-bottom">
            <span>&copy;{(new Date()).getFullYear()} - Khoa Nguyễn</span>
        </footer>
    )
}

export default Footer;