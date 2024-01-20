import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { CONECTION_API } from "../routes/routes";

const useCategories = (props) => {
  
  const getCategories = async () => {
    const url = CONECTION_API + "categories/all";
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    try {
      const response = await fetch(url, options);
      const payload = await response.json();
      if (response.ok) {
        console.log(payload);
        return payload;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSubCategories = async () => {
    const url = CONECTION_API + "subcategories/all";
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    try {
      const response = await fetch(url, options);
      const payload = await response.json();
      if (response.ok) {
        console.log(payload);
        return payload;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id) => {
    const url = CONECTION_API + "categories/delete/" + id;
    const options = {
      method: "POST",
      headers: new Headers(),
    };

    try {
      const response = await fetch(url, options);
      const payload = await response.json();
      if (response.ok) {
        console.log(payload);
        return payload;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createCategory = async (data) => {
    const url = CONECTION_API + "categories/create";
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
  
    try {
      const response = await fetch(url, options);
      const payload = await response.json();
      if (response.ok) {
        console.log(payload);
        return payload;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSubcategory = async (id) => {
    const url = CONECTION_API + "subcategories/delete/" + id;
    const options = {
      method: "POST",
      headers: new Headers(),
    };
    try {
      const response = await fetch(url, options);
      const payload = await response.json();
      if (response.ok) {
        console.log(payload);
        return payload;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createSubcategory = async (data) => {
    const url = CONECTION_API + "subcategories/create";
    const body = {
      name: data.name,
      category_id: data.category_id,
    };

    const options = {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      mode: "cors",
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(url, options);
      const payload = await response.json();
      if (response.ok) {
        console.log(payload);
        return payload;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getCategories,
    getSubCategories,
    deleteCategory,
    createCategory,
    deleteSubcategory,
    createSubcategory,
  };
};

useCategories.propTypes = {};

export default useCategories;
