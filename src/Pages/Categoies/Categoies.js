import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useCategories from "./useCategories";
import CategoriesTable from "../../Components/CategoriesTable.js/CategoriesTable";

const Categoies = (props) => {

    const { categoryCreate } = useCategories()

  const [data, setData] = useState({});
    
    
    const handleInputChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value,  
        });
      };
  

  return (
    <div className="flex  w-3/6  mt-48 mx-auto justify-center ">
          <CategoriesTable />
          <div className="flex flex-col flex-1  ">
          <input
            className="border w-6/6 mx-auto p-4 mt-16 border-2"
            type="text"
            name="name"
            placeholder="Nueva categoria*"
            onChange={handleInputChange}
          />
          <input
        onClick={()=>categoryCreate(data)}
        className="mt-16 p-4 text-xl text-white w-5/6 mx-auto text-center mb-8 cursor-pointer"
        defaultValue="Añadir producto"
        style={{ backgroundColor: "#dac895" }}
      />
          </div>
    </div>
  );
};

Categoies.propTypes = {};

export default Categoies;
