import React from 'react';
import "./Navbar.css"


export default function ButtonAppBar() {

    return (
        <nav class="navbar">
            <div className="brand">
                <img src="https://www.zoomcar.com/build/img/logo.f0c7a9744cfeb3fb5c90eafda61dd2ce.svg" alt="" className="brand-img" />
            </div>
            <div className="nav-links">
                <a href="#">Offers</a>
                <a href="#">subscription</a>
                <a href="#">amigo</a>
                <a href="#">zms</a>
                <a href="#">mobile app</a>
                <a href="#">sign up</a>
                <a href="#">login</a>
            </div>
        </nav>
    );
}