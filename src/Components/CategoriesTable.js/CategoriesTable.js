import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import useCategories from "../../hooks/useCategories";
import { FiX } from "react-icons/fi";

const CategoriesTable = (props) => {
  const { categories, getCategories } = useCategories();

  useEffect(() => {
    getCategories();
    console.log(categories);
  }, []);

  return (
    <div className="flex flex-col w-2/3 p-3 text-2xl border-2 capitalize">
      {categories &&
        categories.map((category) => (
          <div key={category.id} className="flex  border-t py-1 ">
            <div className="flex w-6/12 ">{category.name}</div>
            <div className="flex flex-col w-6/12  border-t py-1  ">
              {category.subcategories.map((subcategory) => (
                <div className="flex flex-1 ">
                  <div key={subcategory.id} className="flex w-8/12 text-lg ">
                    {subcategory.name}
                  </div>
                  <div className="flex w-2/12 justify-center text-xl py-1">
                    <FiX
                      className="cursor-pointer"
                      size={18}
                      color="#636364"
                      onClick={() => console.log("coik en eliminar")}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

CategoriesTable.propTypes = {};

export default CategoriesTable;
