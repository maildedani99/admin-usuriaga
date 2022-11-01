import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useCategories from "./useCategories";
import CategoriesTable from "../../Components/CategoriesTable.js/CategoriesTable";
import { FiX } from "react-icons/fi";

const Categoies = (props) => {
  const { categories, getCategories } = useCategories();
  const { categoryCreate } = useCategories();

  const [data, setData] = useState({});

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    getCategories();
    console.log(categories);
  }, []);

  return (
    <div className="flex flex-wrap justify-between mt-48 mx-16   ">
      {categories &&
        categories.map((category) => (
          <div className="flex w-2/12 flex-col   border-2 p-3 my-8 mx-16 " >
            <div
              key={category.id}
              className="flex text-xl mb-3  "
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

Categoies.propTypes = {};

export default Categoies;
