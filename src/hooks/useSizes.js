import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CONECTION_API } from '../routes/routes';

const useSizes = props => {

    const [sizes, setSizes] = useState([])

    const getSizes = () => {
        const url = CONECTION_API + 'sizes/all';
        const options = {
          method: "GET",
          headers: new Headers(),
        };
    
        fetch(url, options)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            }
            return Promise.reject(response.status);
          })
          .then((payload) => {
            setSizes(payload);
          })
          .catch((error) => console.log(error));
      };

  return { getSizes, sizes }
}

useSizes.propTypes = {}

export default useSizes