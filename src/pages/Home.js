import React from "react";
import { Link } from "react-router-dom";

import deliver from "../assets/imgs/deliveryr.png";
import background from "../assets/imgs/background.jpg";
import "../assets/styles/home.css"





const Home = () => {
    return (
        <main className="home" style={{ backgroundImage: `url(${background})`, zIndex: "-1" }}>
            <div className="mainContainer"  >
                <h1>com€@t</h1>
                <p>As your own home...<br /> with delicious options</p>
                <div className="orderBox">
                    <Link to={"/menu"}>
                        <button>Order now</button>
                        <img src={deliver} style={{ marginLeft: "70px" }} />
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home