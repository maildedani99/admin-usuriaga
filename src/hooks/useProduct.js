import React from 'react'
import PropTypes from 'prop-types'
import { CONECTION_API } from '../routes/routes';

const useProduct = (props) => {

  const createProduct = async (data, checkedListArray, uploadPhotoArray) => {
  const url = CONECTION_API + "products/create";

  const body = {
    name: data.name,
    description: data.description,
    price: data.price,
    subcategory_id: data.subcategory_id,
    images: uploadPhotoArray,
    novelty: data.novelty ? data.novelty : true,
    sizes: checkedListArray,
    outlet: data.outlet ? data.outlet : false,
    discount: data.discount ? data.discount : false,
    reduced_price: data.reduced_price ? data.reduced_price : 0,
  };
  console.log(body);
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

  
  return {createProduct}
  
  
}
useProduct.propTypes = {}

export default useProduct