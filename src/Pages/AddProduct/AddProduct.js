import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import UploadPhoto from "../../Components/uploadphoto/uploadphotos";
import { UploadPhotoContext } from "../../contexts/uploadphoto_context";

const AddProduct = (props) => {
  const { uploadPhotoArray } = useContext(UploadPhotoContext);

  const [data, setData] = useState({});

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,  
    });
    //console.log(event.target.value);
  };

  const submitForm = () => {
    const url = "http://127.0.0.1:8000/api/products/create";

    const body = {
      name: data.name,
      description: data.description,
      price: data.price,
      category_id: data.category,
      images: uploadPhotoArray,
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
        if (response.status === 201) {
          console.log(response.status);
          return response.json();
        } else {
          return Promise.reject(response.status);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col flex-1 mt-32 ">
      <div className="flex flex-1  text-3xl justify-center  ">
        <span className="	">Añadir nuevo producto</span>
      </div>
      <div className="flex w-3/3 ">
        <div className="flex flex-col flex-1  ">
          <input
            className="border w-2/6 mx-auto p-4 mt-16 border-2"
            type="text"
            name="name"
            placeholder="Descripción *"
            onChange={handleInputChange}
          />
          <input
            className="border w-2/6 mx-auto p-4 mt-16 border-2"
            type="text"
            name="description"
            placeholder="Detalle *"
            onChange={handleInputChange}
          />
          <input
            className="border w-2/6 mx-auto p-4 mt-16 border-2"
            type="text"
            name="price"
            placeholder="Precio *"
            onChange={handleInputChange}
          />
          <input
            className="border w-2/6 mx-auto p-4 mt-16 border-2"
            type="number"
            name="category"
            placeholder="Category ID"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-wrap w-2/6 mt-16">
          <UploadPhoto name="image1" num={uploadPhotoArray[0]} />
          <UploadPhoto name="image2" num={uploadPhotoArray[1]} />
          <UploadPhoto name="image3" num={uploadPhotoArray[2]} />
          <UploadPhoto name="image4" num={uploadPhotoArray[3]} />
          <UploadPhoto name="image4" num={uploadPhotoArray[4]} />
          <UploadPhoto name="image4" num={uploadPhotoArray[5]} />

        </div>
      </div>
      <input
        onClick={submitForm}
        className="mt-16 p-4 text-xl text-white w-2/6 mx-auto text-center mb-8 cursor-pointer"
        defaultValue="Añadir producto"
        style={{ backgroundColor: "#dac895" }}
      />
    </div>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
