import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            <Link to="/authors">Authors</Link>

        </nav>
    )
}

export default Header