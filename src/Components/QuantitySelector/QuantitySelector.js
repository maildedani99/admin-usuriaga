import React from "react";
import PropTypes from "prop-types";
import { FiMinus, FiPlus } from "react-icons/fi";

const QuantitySelector = ({ quantity, setQuantity }) => {
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  return (
    <div className="mx-auto text-slate-500">
      <div className="flex border px-3 py-2 my-auto">
        <FiMinus
          size={15}
          color="#636364"
          className="mt-1.5 cursor-pointer"
          onClick={handleMinus}
        />
        <span className="mx-6 select-none text-base ">{quantity}</span>
        <FiPlus
          size={15}
          color="#636364"
          className="mt-1.5 cursor-pointer"
          onClick={handlePlus}
        />
      </div>
      <div></div>
    </div>
  );
};

QuantitySelector.propTypes = {};

export default QuantitySelector;
