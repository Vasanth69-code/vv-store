import {productslist} from "./data/product.js";
import user from "./data/users.js";

import User from "./model/userModel.js";
import Product from "./model/productModel.js";

import connectDB from "./config/db.js";




connectDB();

const importData = async () => { 
    try{
        await User.deleteMany()
        await Product.deleteMany()

        const createdUsers = await User.insertMany(user);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = productslist.map(product => {
            return {...product, user: adminUser}
        });

        await Product.insertMany(sampleProducts);
        console.log("Data imported successfully");
        process.exit();



    }catch(err){
        console.log("error",err);
        process.exit(1);
    }
}


const destroyData = async ()=>{
    try{
         await User.deleteMany()
        await Product.deleteMany()
        console.log("Data destroyed successfully");
        process.exit();
    }
    catch(err){
        console.log("error",err);   
        process.exit(1);
    }
}

if(process.argv[2]=== "-d"){
    destroyData();
}
else{
    importData();
}