import React from 'react'
import PropTypes from 'prop-types'
import { data } from '../../DevAssets/data/data'
import ProductCard from '../../Components/ProductCard'

const ProductsView = props => {
  return (
    <div className="flex flex-wrap	  p-10 mt-32">
    {data.map((item) => (
      <ProductCard data={item} key={item.id} />
    ))}
  </div>
  )
}

ProductsView.propTypes = {}

export default ProductsView