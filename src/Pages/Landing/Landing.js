import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewsPage from "../NewsPage/NewsPage";
import ProductsView from "../ProductsView/ProductsView";
import ProductView from "../ProductView/ProductView";

const Landing = (props) => {
  return (
    <Router>
      <div className="flex flex-col flex-1 w-100	">
        <Navbar />
        <LoginPage />
      
      </div>
    </Router>
  );
};

Landing.propTypes = {};

export default Landing;
