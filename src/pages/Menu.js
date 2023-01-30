import React, { useState } from "react";

import "../assets/styles/menu.css";
import menu from "../assets/imgs/menu.png";

import Categories from "../components/Categories";
import MenuItems from "../components/MenuItems";
import data from "../assets/Data";




const Menu = () => {

    const allCategories = ["all", ...new Set(data.map(item => item.category))];

    const [categories, setCategories] = useState(allCategories);
    const [menuItem, setMenuItem] = useState(data);

    const filteredItems = category => {
        if (category == "all") {
            setMenuItem(data);
            return;
        }
        const newMenuItems = data.filter((item) => 
            item.category === category);
            setMenuItem(newMenuItems);

    }

    return (
        <section>
            <div className="container d-flex justify-content-center align-items-center menuContainer gap-3">
                <h1 className="menuTitle">Menu</h1>
                <img src={menu} />
            </div>
            <div className="titleLine"></div>
            <Categories categories={categories} filteredItems={filteredItems} />
            <MenuItems data={menuItem} />
        </section>


    )
}

export default Menu