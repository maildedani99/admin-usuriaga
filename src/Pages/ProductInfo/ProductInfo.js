import React, { useState } from "react";
import PropTypes from "prop-types";
import pic from "../../DevAssets/Img/1C29092F-1EF9-46C6-96B7-D0D816E0B25B.JPG";
import { item, item2 } from "../../DevAssets/data/data";
import { FiPlus, FiMinus } from "react-icons/fi";
import QuantitySelector from "../../Components/QuantitySelector/QuantitySelector";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import pic1 from "../../DevAssets/Img/04762B1F-9D8A-42F6-96FB-B1ED35F21655.JPG";
import pic2 from "../../DevAssets/Img/262E5F1A-F105-4BB7-81B1-83EA49ECE53C.JPG";
import pic3 from "../../DevAssets/Img/1C29092F-1EF9-46C6-96B7-D0D816E0B25B.JPG";

const ProductInfo = ({product}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex  w-5/6  mt-48 mx-auto justify-center ">
      <div className=" flex 	w-4/6  top-10	">
        <div className="mx-auto  flex flex-wrap ">
        {/*   <img src={pic1} alt="" />
          <img src={pic2} alt="" />
          <img src={pic3} alt="" /> */}
        </div>
      </div>
      <div className="text-2xl flex flex-col  	w-2/6 ">
        <div className="flex flex-col p-8 text-justify mx-auto	w-6/6">
          <span className="text-3xl mt-4">{product.name}</span>
          <span className="text-lg mt-4">{product.precio}€</span>
          <span className="text-sm text-secondary 	mt-4">
            {product.descripcion}
          </span>
        </div>
        <div className="flex flex-col mx-auto w-5/6   text-lg justify-between">
          <div className="flex text-secondary  ">
            {/* Tallas disponibles */}
           {/*  <div className="flex  space-arround flex-wrap mt-1	 ">
              {item.tallas.map((t) => (
                <div className="border p-2 mx-1 text-base">
                  <span>{t}</span>
                </div>
              ))}
            </div> */}
          </div>
          <div className="flex ">
            {/*  <span className="text-secondary  ">Cantidad</span> */}
            <div className="mt-1">
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
        </div>
        <div className="flex w-5/6 p-8 mx-auto">
          <input
            className=" flex flex-1 p-4 text-xl text-white   text-center mb-8 capitalize "
            value="Comprar"
            style={{ backgroundColor: "#dac895" }}
          />
        </div>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {};

export default ProductInfo;
