import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
   <div>
  <div
    key={product._id}
    className="border p-4 rounded-lg shadow-md bg-black
               hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
  >
    <img
      src={product.image}
      alt={product.name}
      className="h-48 mx-auto object-contain rounded-md 
                 hover:scale-110 transition-transform duration-300 ease-in-out"
    />

    <h2 className="font-mono font-bold mt-2 text-gray-800 
                   hover:text-blue-600 transition-colors duration-300">
      {product.name}
    </h2>

    <p className="text-lg font-semibold text-green-700 mt-1">
      ${product.price}
    </p>

    <Link
      to={`/product/${product._id}`}
      className="inline-block mt-3 text-blue-600 underline 
                 hover:text-blue-800 hover:scale-105 transition-all duration-300"
    >
      View Details →
    </Link>
  </div>
</div>
  )
}

export default Product
