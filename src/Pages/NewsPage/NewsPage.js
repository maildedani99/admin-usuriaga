import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from "../../Components/ProductCard";
import { data } from "../../DevAssets/data/data";

const NewsPage = props => {
  return (
    <div className="flex flex-wrap	  p-10 mt-32">
    {data.map((item) => (
      <ProductCard data={item} key={item.id} />
    ))}
  </div>
  )
}

NewsPage.propTypes = {}

export default NewsPage