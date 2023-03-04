import React from 'react'
import PropTypes from 'prop-types'

const useProduct = ({ data, uploadPhotoArray }) => {

  const getCategories = () => {
    const url = CONECTION_API + 'categories/all';
    const options = {
      method: 'GET',
      headers: new Headers(),
    };

    fetch(url, options)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      }
      )
      .then(payload => {
        console.log("All products");
        setProducts(payload);
      }
      )
      .catch(error => console.log(error));
  };
}
  

  const submitForm = () => {
    const url = CONECTION_API + 'products/create';
    console.log(data);
    const body = {
      name: data.name,
      description: data.description,
      price: data.price,
      category_id: data.category,
      images: uploadPhotoArray,
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
    fetch(url, options)
      .then((response) => {
        if (response.status === 201) {
          console.log(response.status);
          return response.json();
        } else {
          return Promise.reject(response.status);
        }
      })
      .catch((error) => console.log(error));
  };

  
  return [submitForm]
  
  
}
useProduct.propTypes = {}

export default useProduct