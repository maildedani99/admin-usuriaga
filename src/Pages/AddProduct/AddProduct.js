import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import UploadPhoto from "../../Components/uploadphoto/uploadphotos";
import { UploadPhotoContext } from "../../contexts/uploadphoto_context";
import useCategories from "../../hooks/useCategories";
import { CONECTION_API } from "../../routes/routes";
import useSizes from "../../hooks/useSizes";

const AddProduct = (props) => {
  //hooks
  const { uploadPhotoArray } = useContext(UploadPhotoContext);
  const { getCategories, subCategories, getSubCategories } = useCategories();
  const { getSizes, sizes } = useSizes();
  //constants
  const [data, setData] = useState({});
  const [novelty, setNovelty] = useState(true);
  const [sizesList, setSizesList] = useState([]);
  const [checkedList, setCheckList] = useState({});
  //
  var checkedListArray = []
  //

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log(data);
  };

  const handleNoveltyCheckbox = (event) => {
    setNovelty(event);
  };

  const handleSizesCheckbox = (event) => {
    setCheckList({
      ...checkedList,
      [event.target.id]: event.target.checked,
  })
  };
  const selectTrue = () => {
    for (const property in checkedList) {
        if (checkedList[property] === true) {
            checkedListArray.push(property)
        }
    }
    setData({
        ...data,
        features: checkedListArray,
    })
}

  const submitForm = () => {
    selectTrue();
    const url = CONECTION_API + "products/create";

    const body = {
      name: data.name,
      description: data.description,
      price: data.price,
      subcategory_id: data.subcategory_id,
      images: uploadPhotoArray,
      novelty: novelty ? 1 : 0,
      sizes: checkedListArray
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
    console.log(body);
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

  useEffect(() => {
    getSubCategories();
    getSizes();
  }, []);

  return (
    <div className="flex flex-col flex-1 mt-32 ">
      <div className="flex flex-1 mt-8 text-3xl justify-center   ">
        <span className="	">Añadir nuevo producto</span>
      </div>
      <div className="flex w-7/12 mx-auto min-w-[800px] mt-4  p-4">
        <div className="flex flex-col flex-1">
          <div className="flex flex-1">
            <div className="flex flex-col flex-1 mx-auto ">
              <div className="flex flex-col mx-auto w-5/6 ">
                <span>Descripción:</span>
                <input
                  className="flex w-100   mx-auto p-2 mt-2  border-2 "
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col mt-8 mx-auto w-5/6 ">
                <label>Detalles:</label>
                <textarea
                  rows="6"
                  cols="50"
                  className=" w-100 mx-auto mt-2 p-2  border-2 "
                  type="text"
                  name="description"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col flex-1    mx-auto  ">
              <div className="flex flex-col ">
                <div className="flex flex-1">
                  <div className="flex flex-col mx-auto w-5/12  ">
                    <span>Precio:</span>
                    <input
                      className=" w-100 mt-2 mx-auto p-2   border-2"
                      type="text"
                      name="price"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col mx-auto w-5/12 ">
                    <span>Sub-Categoria:</span>
                    <select
                      name="subcategory_id"
                      className="flex w-100   mx-auto p-2 mt-2 border-2 bg-white "
                      onChange={handleInputChange}
                      defaultValue={" "}
                    >
                      <option value={" "} disabled></option>
                      {subCategories &&
                        subCategories.map((subcategory) => (
                          <option key={subcategory.id} value={subcategory.id}>
                            {subcategory.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="flex mt-2    ">
                  <div className="flex flex-col  mt-4 ">
                    <span className="ml-4">Agregar imagenes:</span>
                    <div className="flex flex-wrap  ">
                      <UploadPhoto name="image1" num={uploadPhotoArray[0]} />
                      <UploadPhoto name="image2" num={uploadPhotoArray[1]} />
                      <UploadPhoto name="image3" num={uploadPhotoArray[2]} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 mt-4 ml-2 justify-start	    ">
                  <input
                    className="w-10 justify-self-start	"
                    name="novelty"
                    type="checkbox"
                    value={novelty}
                    onChange={(e) => handleNoveltyCheckbox(e.target.checked)}
                    defaultChecked={true}
                  />
                  <span className="ml-2">Añadir a Novedades</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap mt-4 ml-2 justify-start	    ">
            <span className="ml-4">Tallas:</span>
            {sizes &&
              sizes.map((size) => (
                <div key={size.id} className="flex flex-row flex-1">
                  <input
                    className="w-5 justify-self-start 	"
                    id={size.id}
                    
                    name={size.name}
                    type="checkbox"
                    value={novelty}
                    onChange={(e) => handleSizesCheckbox(e)}
                    //defaultChecked={false}
                  />
                  <span className="ml-2">{size.name}</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      <input
        onClick={submitForm}
        className="mt-16 p-6 text-white w-1/6 mx-auto text-center mb-8 cursor-pointer"
        defaultValue="Añadir producto"
        style={{ backgroundColor: "#dac895" }}
      />
    </div>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
