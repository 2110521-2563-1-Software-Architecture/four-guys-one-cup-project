import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import LoginModal from "../Modal/LoginModal"
import RegisterModal from "../Modal/RegisterModal"

const NavBar = (props) => {

    const conditionalRender = () => {
        if (!props.jwt) {
            return (
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <RegisterModal/>
                        </li>
                        <li className="nav-item">
                            <LoginModal/>
                        </li>
                    </ul>
                    )
        }
        return (<ul className="navbar-nav ml-auto">
                    <li className="nav-item" onClick={()=>{localStorage.removeItem("token");window.location.reload();}}>
                        <a className="nav-link" href="#">
                            Logout
                        </a>
                    </li>
                </ul>)
        }

    
    return (
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/">
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
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                Product
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                Payment
                            </a>
                        </li>
                    </ul>
                    <SearchBar />
                    {conditionalRender()}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
