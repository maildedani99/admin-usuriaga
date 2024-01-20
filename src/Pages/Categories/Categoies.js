import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useCategories from "../../hooks/useCategories";
import CategoriesTable from "../../Components/CategoriesTable.js/CategoriesTable";
import CategoryCard from "../../Components/CategoryCard";

const Categories = (props) => {
  const { getCategories, createCategory } = useCategories();

  const [data, setData] = useState({});
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const onCreateCategory = (data) => {
    createCategory(data);
  };

  const prueba = () => {};

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log(data);
  };

  const fetchData = async () => {
    try {
      const response = await getCategories();
      setCategories(response);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [refresh]);

  return (
    <div className="flex flex-col flex-1 mt-32 ">
      <div className="flex flex-1  text-3xl justify-center   ">
        <span className="	">Categorias</span>
      </div>
      <div className="flex  p-2 mx-auto mt-16 text-xl   ">
        <input
          className=" p-2 border-2"
          type="text"
          name="name"
          placeholder="Nueva categoria*"
          onChange={handleInputChange}
        />
        <input
          onClick={() => createCategory(data)}
          className="  text-white   text-center  cursor-pointer ml-2"
          defaultValue="Añadir"
          style={{ backgroundColor: "#dac895" }}
        />
      </div>
      <div className="flex flex-wrap w-10/12 mx-auto   mt-16      ">
        {categories &&
          categories.map((category) => (
            <div key={category.id} className="flex flex-1 p-4  m-2">
              <CategoryCard category={category} />
            </div>
          ))}
      </div>
    </div>
  );
};

Categories.propTypes = {};

export default Categories;
