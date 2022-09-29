import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../../Components/ProductCard'
import { data } from '../../DevAssets/data/data'

const ProductView = ({data}) => {
  return (
    <div>
      <ProductCard data={data} />
    </div>
  )
}

ProductView.propTypes = {}

export default ProductView