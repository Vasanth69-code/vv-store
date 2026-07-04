
// import { productslist } from "../../product";
import Product from "../Components/Product";
// import { useState,useEffect } from "react";
// import axios from "axios";
import { useGetProductsQuery } from "../slice/productapiSlice";

const Homepage = () => {

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //     const fetchproduct = async () => {
  //       const {data} = await axios.get("http://localhost:7000/api/products")  
  //       setProducts(data);
  //     }

  //     fetchproduct();
  // }, 
  
  // []);

  const {data:products,error,isLoading} = useGetProductsQuery();
  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Error fetching products: {error.message}</p>



  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
         <Product product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default Homepage;






{/*another method before seeding*/}


// import Product from "../Components/Product";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const Homepage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchproduct = async () => {
//       try {
//         const response = await axios.get("http://localhost:7000/api/products");
//         console.log("Products from API:", response.data); 
//         setProducts(response.data); 
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchproduct();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {products.map((product) => (
//         <Product product={product} key={product._id} />
//       ))}
//     </div>
//   );
// };

// export default Homepage;
