import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useCategories from "../../Pages/Categories/useCategories";

const CategoryCard = ({ category }) => {
  const { deleteSubcategory, deleteCategory, createSubcategory } =
    useCategories();
  const [data, setData] = useState({});

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
      category_id: category.id,
    });
  };


  return (
    <div className="flex flex-col border-2 p-4 text-center   ">
      <div className=" text-3xl font-medium	">{category.name}</div>
      <input
        className="cursor-pointer "
        type="text"
        name="eliminar"
        defaultValue="Eliminar"
        onClick={() => deleteCategory(category.id)}
      />
      <div className="flex flex-col text-left mt-4 ml-4">
        {category.subcategories.map((subcategory) => (
          <div key={subcategory.id}>
            <div className="text-2xl mt-2"> {subcategory.name} </div>
            <input
              className="cursor-pointer "
              type="text"
              name="eliminar"
              defaultValue="Eliminar"
              onClick={() => deleteSubcategory(subcategory.id)}
            />
          </div>
        ))}
      </div>
      <div className="flex   mx-auto text-sm mt-4    ">
        <input
          className=" p-1 border-2"
          type="text"
          name="name"
          placeholder="Añadir subcategoria"
          onChange={handleInputChange}
        />
        <input
          onClick={() => createSubcategory(data)}
          className="  text-white   text-center  cursor-pointer ml-2"
          defaultValue="Añadir"
          style={{ backgroundColor: "#dac895" }}
        />
      </div>
    </div>
  );
};

CategoryCard.propTypes = {};

export default CategoryCard;
