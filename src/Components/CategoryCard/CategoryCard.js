import React from "react";
import PropTypes from "prop-types";
import useCategories from "../../Pages/Categories/useCategories";

const CategoryCard = ({ category }) => {

  const { deleteCategory } = useCategories();

  return (
    <div className="flex flex-col border-2 p-4 text-center   ">
      <div className=" text-3xl font-medium	">{category.name}</div>
      <input className="cursor-pointer " type="text" name="eliminar" defaultValue="Eliminar" onClick={()=> deleteCategory(category.id)}/>
      <div className="flex flex-col text-left mt-4 ml-4">
        {category.subcategories.map((subcategories) => (
          <div className="text-2xl mt-2"> {subcategories.name} </div>
        ))}
        
      </div>
      <div className="flex   mx-auto text-sm mt-4    ">
        <input
          className=" p-1 border-2"
          type="text"
          name="name"
          placeholder="Nueva categoria*"
          //onChange={handleInputChange}
        />
        <input
          //onClick={() => categoryCreate(data)}
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
