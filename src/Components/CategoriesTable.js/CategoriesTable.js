import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import useCategories from "../../Pages/Categoies/useCategories";
import { FiX } from "react-icons/fi";

const CategoriesTable = (props) => {
  const { categories, getCategories } = useCategories();

  useEffect(() => {
    getCategories();
    console.log(categories);
  }, []);

  return (
      <div className="flex flex-col w-2/3 p-3 text-2xl border-2 capitalize">
        <div className="flex  text-bold mb-4">
          <div className="flex w-3/12 justify-center">id</div>
          <div className="flex w-6/12 justify-center">Nombre</div>
          <div className="flex w-3/12 justify-center text-xl py-1">Eliminar</div>
        </div>
        {categories &&
          categories.map((category) => (
            <div className="flex  border-t py-1 ">
              <div className="flex w-3/12 justify-center">  {category.id}</div>
              <div className="flex w-6/12 justify-center">{category.name}</div>
              <div className="flex w-3/12 justify-center text-xl py-1">
                <FiX className="cursor-pointer" size={22} color="#636364" onClick={()=>console.log("coik en eliminar")}/>
              </div>
            </div>
          ))}
      </div>
  );
};

CategoriesTable.propTypes = {};

export default CategoriesTable;
