import React from "react";
import "../assets/styles/menuitems.css"

const MenuItems = ({ data }) => {
    return (
        <div className="itemContainer">
            {
                data.map(item => {
                    const { id, title, img, desc, price } = item;
                    console.log(img);
                    return (
                        <article
                            key={id}
                            className="menuItem my-3">
                            <img
                                src={img}
                                alt={title}
                                className="itemPhoto" />
                            <div className="itemInfo">
                                <header>
                                    <h4>{title}</h4>
                                    <h4
                                        className="itemPrice"
                                    >€ {price}</h4>
                                </header>
                                <p
                                    className="itemDesc my-2"
                                >{desc}</p>
                            </div>
                        </article>
                    )

                })
            }
        </div>
    )
}

export default MenuItems;