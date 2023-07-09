import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">About</a>
                    <a className="nav-link" href="#">Services</a>
                    <a className="nav-link" href="#">Portfolio</a>
                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;

