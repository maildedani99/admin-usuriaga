import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const useCategories = (props) => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    const url = "http://127.0.0.1:8000/api/categories/all";
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
        console.log(categories);
      })
      .catch((error) => console.log(error));
  };
  const deleteCategory = (id) => {
    const url = "http://127.0.0.1:8000/api/categories/" + id;
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
    
    
    
  const categoryCreate = (data) => {
    const url = "http://127.0.0.1:8000/api/categories/create/";
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
        console.log(categories);
      })
      .catch((error) => console.log(error));
  };

  return { categories, getCategories, deleteCategory, categoryCreate };
};

useCategories.propTypes = {};

export default useCategories;