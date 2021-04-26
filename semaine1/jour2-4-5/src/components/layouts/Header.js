import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-sm nav-dark bg-dark mb-3 py-0">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                A propos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cours">
                                Cours
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
