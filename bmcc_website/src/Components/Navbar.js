import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-items">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/learn" className="nav-link">Learn</Link>
                    <Link to="#" className="nav-link">About</Link>
            </ul>
        </nav>
    );
}

export default Navbar;
