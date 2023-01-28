import React from "react";

import "../assets/styles/footer.css"

const Footer = () => {
    return (
        <div
            className="footer"
            style={{ backgroundColor: "chartreuse" }}>
            <div 
            className="footer d-flex gap-3 justify-content-center "
            style={{fontWeight:"bolder"}}
            >
                <p>&copy; 2023 com€@t.com</p>
                <a
                className="github"
                style={{textDecoration:"none", color:"black"}}
                >https://github.com/mzffrtp</a>
            </div>
        </div>
    )
}

export default Footer