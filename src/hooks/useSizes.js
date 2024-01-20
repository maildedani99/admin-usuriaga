import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CONECTION_API } from '../routes/routes';

const useSizes = props => {


    const getSizes = async () => {
        const url = CONECTION_API + 'sizes/all';
        const options = {
          method: "GET",
          headers: new Headers(),
        };
    
        try {
          const response = await fetch(url, options);
          const payload = await response.json();
          if (response.ok) {
            console.log(payload);
            return payload;
          } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        } catch (error) {
          console.log(error);
        }
      };

  return { getSizes }
}

useSizes.propTypes = {}

export default useSizes