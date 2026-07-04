import express from 'express';
// import { productslist } from '../data/product.js'; 
// import Product from '../model/productModel.js';
// import asyncHandler from '../middleware.js/asyncHandler.js';
import { getproducts, getproductbyid } from '../controllers/productController.js';

const router = express.Router();

// router.get('/', asyncHandler(async (req, res) => {
// //   const products = await Product.find({});
// //   console.log(products);
// //   res.json(products);

// //after seeding 

// // try{
// //     const products = await Product.find({});
// //     res.json(products);
// // }
// // catch(err){
// //     console.log(err);
// //     res.status(500).json({message:err.message})
// // }

// // asyncHandler 

// const products = await Product.find({}).lean()
// // throw new Error("Test Error Handler") for throwing error to test error handler middleware in your site
// res.json(products);
   
// }));

// router.get('/:id', asyncHandler(async (req, res) => {
//     // try{
//         const product = await Product.findById(
//     (req.params.id));

//    if(res.json(product)){
//      res.json(product)
//    }else{
//     res.statusMessage(404);
//    }
//     // // }catch(err){
//     //     console.log(err);
//     //     res.status(500).json({message:err.message})
//     // }
    
   
// }
// ));

router.route('/').get(getproducts);
;
router.route('/:id').get(getproductbyid);
export default router;
