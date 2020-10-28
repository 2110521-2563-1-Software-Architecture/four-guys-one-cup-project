import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import LoginModal from "../Modal/LoginModal"

const NavBar = () => {
    return (
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    3Guys1Cup
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Product
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Payment
                            </a>
                        </li>
                    </ul>
                    <SearchBar />
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">
                                Login
                            </a> */}
                            <LoginModal/>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                English
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <a className="dropdown-item" href="#">
                                    Thai
                                </a>
                                <a className="dropdown-item" href="#">
                                    Chinese
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
