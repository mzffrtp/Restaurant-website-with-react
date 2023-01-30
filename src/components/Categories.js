import React, { useState } from "react";

const Categories = ({ categories, filteredItems }) => {

    const [currentCategory, setCurrentCategory] = useState(0)

    const handleCategory = (category, index) => {
        filteredItems(category)
        setCurrentCategory(index)
        console.log(filteredItems);

    }
    return (

        <div className="btn-group gap-1 menuBtn">
            {
                categories.map((category, index) => {
                    return (
                        <button
                            type="button"
                            key={index}
                            className={`btncategory ${index === currentCategory ? `active` : " "}`}
                            onClick={() =>
                                handleCategory(category, index)}
                        >{category}</button>
                    );
                })}
        </div>
    );
};

export default Categories;