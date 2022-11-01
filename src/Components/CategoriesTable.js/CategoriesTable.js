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
    <div className="flex flex-wrap justify-center p-8 bg-blue-100 ">
      {categories &&
        categories.map((category) => (
          <div className="flex w-2/12 flex-col  border-2 py-1 " >
            <div
              key={category.id}
              className="flex text-xl   "
            >
              {category.name}
              <div className="flex flex-1 justify-end  text-xl py-1">
                <FiX
                  className="cursor-pointer"
                  size={18}
                  color="#636364"
                  onClick={() => console.log("coik en eliminar")}
                />
              </div>
            </div>
              <div className="flex flex-col">
              {category.subcategories &&
                category.subcategories.map((subcategory) => (
                  <span>{subcategory.name} </span>
                ) )
              }
              </div>
          </div>
        ))}
    </div>
  );
};

CategoriesTable.propTypes = {};

export default CategoriesTable;
