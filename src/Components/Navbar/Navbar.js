import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logonegro.png";
import logo2 from "../../assets/logonegrofull.png";
import bag from "../../assets/bag.svg";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { navLinkStyle, navLinkStyleHover } from "../../astyles/navbarStyles";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  const activeStyleLink = {
    fontSize: "40",
  };

  return (
    <div className="flex w-full fixed flex-col bg-white -mt-1	">
      <div
        className="flex  flex-1 border-b 	"
        style={{ backgroundColor: "#dac895" }}
      >
      {/*   <div className="flex flex-1 w-3/5 justify-center text-white p-1 font-light 	">
          <span>ENVÍOS GRATIS para compras superiores a 40€</span>
        </div> */}
      </div>
      <div
        className="flex flex-row flex-1 border-b " style={{backgroundColor:"#dac895"}} 
      >
        <div className=" p-6 w-3/12	my-auto ">
          <img className="mx-auto" src={logo} alt="Usuriaga" width="200" />
        </div>
        {/*  <div className=" p-8 	">
        <img src={logo2} alt="Usuriaga" width="300" />
      </div> */}
        <div className="flex w-6/12 justify-center  ">
          <div className=" self-center">
            <NavLink to="/newsPage">
              <span className="mx-6  cursor-pointer   text-4xl tracking-widest		 ">
                dashboard
              </span>
            </NavLink>
            <NavLink
              to="/loginPage"
              /*   style={({ isActive }) => ({
                color: isActive ? "#DAC895" : "#000000",
              })} */
            >
              
            </NavLink>
            
           
           
          </div>
        </div>
        <div className="flex  	align-middle	p-10 justify-center w-3/12 max-w-sm">
          <span>hola: Lidia</span>
        </div>
      </div>
    </div>
  );
};
/* bg-neutral-100	 */

Navbar.propTypes = {};

export default Navbar;
