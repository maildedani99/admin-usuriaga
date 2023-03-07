import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { CONECTION_API } from "../routes/routes";

const useCategories = (props) => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const getCategories = () => {
    const url = CONECTION_API + 'categories/all';
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((payload) => {
        setCategories(payload);
      })
      .catch((error) => console.log(error));
  };


  const getSubCategories = () => {
    const url = CONECTION_API + 'subcategories/all';
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((payload) => {
        setSubCategories(payload);
      })
      .catch((error) => console.log(error));
  };

  const deleteCategory = (id) => {
    const url = "http://127.0.0.1:8000/api/categories/delete/" + id;
    const options = {
      method: "POST",
      headers: new Headers(),
    };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((payload) => {
        setCategories(payload);
        console.log(categories);
      })
      .catch((error) => console.log(error));
  };
        
  const createCategory = (data) => {
    const url = CONECTION_API + 'categories/create';
    const body = {
        name: data.name,
      };
  
      const options = {
        method: "POST",
        headers: new Headers({
          "Content-type": "application/json",
        }),
        mode: "cors",
        body: JSON.stringify(body),
      };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((payload) => {
        setCategories(payload);
      })
      .catch((error) => console.log(error));
  };

  const deleteSubcategory = (id) => {
    const url = CONECTION_API + 'subcategories/delete/' + id;
    const options = {
      method: "POST",
      headers: new Headers(),
    };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((payload) => {
        setSubCategories(payload);
      })
      .catch((error) => console.log(error));
  };

  const createSubcategory = (data) => {
    const url = CONECTION_API + 'subcategories/create';
    const body = {
      name: data.name,
      category_id: data.category_id
      };
  
      const options = {
        method: "POST",
        headers: new Headers({
          "Content-type": "application/json",
        }),
        mode: "cors",
        body: JSON.stringify(body),
      };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((payload) => {
        setSubCategories(payload);
      })
      .catch((error) => console.log(error));
  };

  return { categories, getCategories, subCategories, getSubCategories, setSubCategories, deleteCategory, createCategory, deleteSubcategory, createSubcategory };
};

useCategories.propTypes = {};

export default useCategories;
