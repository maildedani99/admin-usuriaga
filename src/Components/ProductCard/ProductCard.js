import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  console.log(data);

  const handleClick = () => {
    navigate("/productView", { state: data });
  };

  return (
    <div
      className="flex flex-col w-3/12 p-2 justify-center cursor-pointer mt-8"
      onClick={handleClick}
    >
      <img src={data.pic} alt="foto" />
      <span className=" text-xl mx-auto mt-2">{data.info}</span>
      <span className=" text-xl mx-auto mt-2 ">{data.precio} €</span>
      <input
        type="button"
        value="Añadir al carrito "
        style={{ backgroundColor: "#dac895", color: "white" }}
        className="w-2/6 p-2 mt-2 self-center	cursor-pointer"
      />
    </div>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
