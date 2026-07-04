import asyncHandler from '../middleware.js/asyncHandler.js';
import Product from "../model/productModel.js";

const getproducts= asyncHandler(async (req, res) => {
    const products = await Product.find({}).lean()
    // throw new Error("Test Error Handler") for throwing error to test error handler middleware in your site
    res.json(products);
       
    });

const getproductbyid=asyncHandler(async (req, res) => {
    // try{
        const product = await Product.findById(
    (req.params.id));

   if(res.json(product)){
     res.json(product)
   }else{
    res.statusMessage(404);
   }
    // // }catch(err){
    //     console.log(err);
    //     res.status(500).json({message:err.message})
    // }
    
   
}
);
    
export {getproducts,getproductbyid};