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
      <Router>
        <div className="flex flex-col flex-1 w-100	">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/newsPage" element={<NewsPage />} />
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
};

Landing.propTypes = {};

export default Landing;
