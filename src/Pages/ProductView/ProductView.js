import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../../Components/ProductCard'
import { data } from '../../DevAssets/data/data'

const ProductView = ({product}) => {
  return (
    <div>
      <ProductCard product={product} />
    </div>
  )
}

ProductView.propTypes = {}

export default ProductView