import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  return (
    <div className="flex flex-1 mt-48 justify-center">
      <div className="flex flex-col w-4/12 border	justify-center p-8">
        <span className=" text-4xl mt-8 mx-auto">Iniciar Sesion</span>
        <input
          className="border w-5/6 mx-auto p-4 mt-16 border-2"
          type="text"
          name="usuario"
          placeholder="Nombre de usuario o correo electrónico *"
        />
        <input
          className="border w-5/6 mx-auto p-4 mt-8 border-2"
          type="text"
          name="usuario"
          placeholder="Contraseña *"
        />
        <span className="mt-4 mx-auto">¿Olvidaste la contraseña?</span>
        <input
          className="mt-16 p-4 text-xl text-white w-5/6 mx-auto text-center mb-8"
          value="Acceder"
          style={{ backgroundColor: "#dac895" }}
        />
       
      </div>
    </div>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
