import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="container">
                <nav className="navbar navbar-expand-sm nav-dark bg-light mb-3 py-0">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/about">
                                A propos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
