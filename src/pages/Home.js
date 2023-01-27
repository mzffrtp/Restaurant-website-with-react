import React from "react";
import { Link } from "react-router-dom";

import deliver from "../assets/imgs/deliver.png";
import background from "../assets/imgs/background.jpg";
import "../assets/styles/home.css"





const Home = () =>{
    return(
        <main className="home" style={{backgroundImage:`url(${background})`, zIndex:"-1"}}>
            <div className="mainContainer"  >
                <h1>com€at Restaur@nt</h1>
                <p>As your own home...<br/> with delicious options</p>
                <Link to={"/menu"}>
                    <button>Order now</button>
                    <img src = {deliver} style={{marginLeft:"20px"}} />
                    </Link>
            </div>
        </main>
    )
}

export default Home