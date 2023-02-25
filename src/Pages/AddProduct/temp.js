<div className="flex flex-col flex-1 mt-32 bg-red-200">
      <div className="flex flex-1 mt-8 text-3xl justify-center   ">
        <span className="	">Añadir nuevo producto</span>
      </div>
      <div className="flex w-7/12  mt-16 mx-auto min-w-[800px] bg-gray-200  ">
        <div className="flex flex-col w-3/6 mt-4  bg-pink-200">
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
        <div className="flex flex-col  w-3/6  mt-4 bg-yellow-200">
          <span className="ml-4">Agregar imagenes:</span>
          <div className="flex flex-wrap  ">
            <UploadPhoto name="image1" num={uploadPhotoArray[0]} />
            <UploadPhoto name="image2" num={uploadPhotoArray[1]} />
            <UploadPhoto name="image3" num={uploadPhotoArray[2]} />
            <UploadPhoto name="image4" num={uploadPhotoArray[3]} />
            <UploadPhoto name="image4" num={uploadPhotoArray[4]} />
            <UploadPhoto name="image4" num={uploadPhotoArray[5]} />
          </div>
        </div>
      </div>
      <div className="flex w-7/12  mx-auto min-w-[800px] bg-blue-200">
        <div className="flex  w-5/6  mx-auto ">
          <div className="flex flex-col mx-auto w-5/12 mt-8 ">
            <span>Categoria:</span>
            <select
              name="category_id"
              className="flex w-100   mx-auto p-2 mt-2 border-2 bg-white "
              onChange={handleInputChange}
            >
              <option disabled selected value>
                {" "}
              </option>
              {categories &&
                categories.map((category) => (
                  <option value={category.id}>{category.name}</option>
                ))}
            </select>
          </div>
          <div className="flex flex-col mx-auto w-5/12 mt-8">
            <span>Sub-Categoria:</span>
            <select
              name="subcategory_id"
              className="flex w-100   mx-auto p-2 mt-2 border-2 bg-white "
              onChange={handleInputChange}
            >
              <option disabled selected value>
                {" "}
              </option>
              {subCategories &&
                subCategories.map((subCategory) => (
                  <option value={subCategory.id}>{subCategory.name}</option>
                ))}
            </select>
          </div>
        </div>
        <div className="flex  w-5/6  mx-auto ">
          <div className="flex w-5/12 mt-8 flex-col mx-auto  ">
            <span>Precio:</span>
            <input
              className=" w-100 mt-2 mx-auto p-2   border-2"
              type="text"
              name="price"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex  w-5/6  mx-auto  ">
          <div className="flex flex-1  mt-8 justify-start	    ">
            <input
              className="w-10 justify-self-start	"
              type="checkbox"
              value={novelty}
              onChange={handleCheckbox}
            />
            <span className="ml-2">Añadir a novedades</span>
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