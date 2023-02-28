import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";
import LoginPage from "../LoginPage/LoginPage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import NewsPage from "../NewsPage/NewsPage";
import { AuthContextProvider } from "../../contexts/authentication/authentication.context";
import AddProduct from "../AddProduct/AddProduct";
import { UploadPhotoProvider } from "../../contexts/uploadphoto_context";
import ProductInfo from "../ProductInfo/ProductInfo";
import Categories from "../Categories";

const Landing = (props) => {
  /* const PrivateRoute = (props) => {
    const { state } = React.useContext(AuthContext);
    const { children, path } = props;
    return (
      <Route path={path}>
        {state.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: LOGINPAGE }} />
        )}
      </Route>
    );
  }; */

  return (
    <AuthContextProvider>
      <UploadPhotoProvider>
      <Router>
        <div className="flex flex-col flex-1 w-100	">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<AddProduct />} />
              <Route exact path="/newsPage" element={<NewsPage />} />
              <Route exact path="/productInfo" element={<ProductInfo />} />
            <Route exact path="/categories" element={<Categories />} />
              
              
          </Routes>
        </div>
      </Router>
                            </UploadPhotoProvider>
    </AuthContextProvider>
  );
};

Landing.propTypes = {};

export default Landing;
