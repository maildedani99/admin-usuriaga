import React from "react";
import PropTypes from "prop-types";
import { registerText } from "../../Constants/Constants";
import { Link } from "react-router-dom";

const RegisterPage = (props) => {
  return (
    <div className="flex flex-1 mt-48 justify-center">
      <div className="flex flex-col w-4/12 border	justify-center p-8">
        <span className=" text-4xl mt-8 mx-auto">Registrarse</span>
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
        <input
          className="border w-5/6 mx-auto p-4 mt-8 border-2"
          type="text"
          name="usuario"
          placeholder="Verifica tu contraseña *"
        />
        <span className="text-sm	font-light	w-5/6 text-justify mx-auto mt-8">
          {registerText}
        </span>
        <input
          className="mt-16 p-4 text-xl text-white w-5/6 mx-auto text-center mb-8"
          value="Acceder"
          style={{ backgroundColor: "#dac895" }}
        />
        <div className="flex w-5/6 mx-auto justify-center">
          <span className="font-light mr-2">¿Ya tienes cuenta?</span>
          <Link to="/loginPage">
            <span>Inicar sesion</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

RegisterPage.propTypes = {};

export default RegisterPage;
