import React from "react";
import { Link } from "react-router-dom";


import logo from "../assets/imgs/food.png";
import delicious from "../assets/imgs/deliciousace.gif";



import "../assets/styles/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navberLeft d-flex justify-content-between align-items-center gap-5">
                <div className="d-flex align-items-center gap-2">
                    <img src={logo} style={{ width: "100px" }} />
                    <h1 style={{ color: "crimson" }}>com€at</h1>
                </div>
                <div>
                    <img className="navimg" src={delicious} />
                </div>
            </div>
            <div className="navbarRight">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/menu"}>Menu</Link>
            </div>
        </nav>
    )
}

export default Navbar