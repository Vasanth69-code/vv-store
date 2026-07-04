// import { useEffect } from "react";
// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// // import { productslist } from "../../product";

// const Productpage = () => {
//   const { id } = useParams();

//   // const product = products.find(
//   //   (item) => item._id === Number(id)
//   // );
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
// const fetchproduct = async () => {
//   const data = await fetch(`http://localhost:7000/api/products/${id}`)
//   .then((res) => res.json());
//   setProduct(data);
// }
// fetchproduct();

//    }, [id]);

//   // if (!product) {
//   //   return <h2>Product not found</h2>;
//   // }

//   return (
//     <div className="p-6">
//   <Link 
//     to="/" 
//     className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//   >
//     ← Back
//   </Link>

//   <div 
//     className="flex gap-6 mt-6 border rounded-lg shadow-lg p-6 
//                hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out 
//                bg-white"
//   >
//     <img
//       src={product.image}
//       alt={product.name}
//       className="w-64 object-contain rounded-md 
//                  hover:rotate-1 hover:scale-105 transition-transform duration-300 ease-in-out"
//     />

//     <div className="flex flex-col justify-between">
//       <h1 className="font-mono text-2xl font-bold text-gray-800 
//                      hover:text-blue-600 transition-colors duration-300">
//         {product.name}
//       </h1>

//       <p className="text-gray-600 mt-2">{product.description}</p>

//       <p className="font-semibold text-lg text-green-700 mt-2">
//         ${product.price}
//       </p>

//       <p className="mt-1 text-yellow-500">⭐ {product.rating}</p>

//      <p
//   className={`mt-1 font-medium ${
//     product?.countInStock && Number(product.countInStock) > 0
//       ? "text-green-600"
//       : "text-red-600"
//   }`}
// >
//   {product?.countInStock && Number(product.countInStock) > 0
//     ? "In countInStock"
//     : "Out of countInStock"}
// </p> 


//       <button 
//         className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md 
//                    hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out"
//       >
//         Add to Cart
//       </button>
//     </div>
//   </div>
// </div>
//   );
// };

// export default Productpage;
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

import { addtoCard } from "../slice/cardSlice";


const Productpage = () => {

  const [qty,setQty]= useState(1);
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addtocardHandler = () =>{
      dispatch(addtoCard({...product,qty}))   
  }

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `http://localhost:7000/api/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Loading State
  if (loading) {
    return <h2 className="p-6 text-xl">Loading...</h2>;
  }

 
  if (error) {
    return <h2 className="p-6 text-red-600">{error}</h2>;
  }

  //  Extra Safety
  if (!product) {
    return <h2 className="p-6 text-red-600">Product not found</h2>;
  }

  return (
    <div className="p-6">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >
        ← Back
      </Link>

      <div
        className="flex gap-6 mt-6 border rounded-lg shadow-lg p-6 
                   hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out 
                   bg-white"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-64 object-contain rounded-md 
                     hover:rotate-1 hover:scale-105 transition-transform duration-300 ease-in-out"
        />

        <div className="flex flex-col justify-between">
          <h1
            className="font-mono text-2xl font-bold text-gray-800 
                       hover:text-blue-600 transition-colors duration-300"
          >
            {product.name}
          </h1>

          <p className="text-gray-600 mt-2">
            {product.description}
          </p>

          <p className="font-semibold text-lg text-green-700 mt-2">
            ${product.price}
          </p>

          <p className="mt-1 text-yellow-500">
            ⭐ {product.rating}
          </p>

          {/* ✅ Correct countInStock Logic */}
          <p
            className={`mt-1 font-medium ${
              Number(product.countInStock) > 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {Number(product.countInStock) > 0
              ? "In Stock"
              : "Out of Stock"}
          </p>

          <button onClick={addtocardHandler}
            disabled={Number(product.countInStock) === 0}
            className={`mt-4 px-4 py-2 text-white rounded-md transition-all duration-300 ease-in-out ${
              Number(product.countInStock) > 0
                ? "bg-blue-600 hover:bg-blue-700 hover:scale-105"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
