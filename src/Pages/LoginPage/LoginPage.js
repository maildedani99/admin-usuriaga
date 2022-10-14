import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication/authentication.context";


const LoginPage = () => {
  
  const { login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
      email: '',
      password: '',
  })

  const handleInputChange = (event) => {

      setData({
          ...data,
          [event.target.name]: event.target.value
      })
    console.log(data)
  }

  const SubmitLogin = () => {
    const url = 'http://127.0.0.1:8000/api/login';
    const body = {
        email: data.email,
        password: data.password,
    };
    console.log(body)

    const options = {
        method: 'POST',
        headers: new Headers({
            'Content-type': 'application/json'
        }),
        mode: 'cors',
        body: JSON.stringify(body),
    };
    fetch(url,options)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            return Promise.reject(response.status);
        })
        .then(payload => {
        
          login(payload)
          
            }
        )
        .catch(error => console.log(error));
}

  return (
    <div className="flex flex-1 mt-48 justify-center">
      <div className="flex flex-col w-4/12 border	justify-center p-8">
        <span className=" text-4xl mt-8 mx-auto">Iniciar Sesion</span>
        <input
          onChange={handleInputChange}
          className="border w-5/6 mx-auto p-4 mt-16 border-2"
          type="text"
          name="email"
          placeholder="Nombre de usuario o correo electrónico *"
        />
        <input
          onChange={handleInputChange}
          className="border w-5/6 mx-auto p-4 mt-8 border-2"
          type="text"
          name="password"
          placeholder="Contraseña *"
        />
        <span className="mt-4 mx-auto">¿Olvidaste la contraseña?</span>
        <input
          onClick={SubmitLogin}
          className="mt-16 p-4 text-xl text-white w-5/6 mx-auto text-center mb-8"
          value="Acceder"
          style={{ backgroundColor: "#dac895" }}
        />
        <input
          onClick={logout}
          className="mt-16 p-4 text-xl text-white w-5/6 mx-auto text-center mb-8"
          value="Logout"
          style={{ backgroundColor: "#dac895" }}
        />
       
      </div>
    </div>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
