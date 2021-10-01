import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/createblog">Add a Blog</Link>
            </li>
        </ul>
        </div>
    );
};

export default NavBar;