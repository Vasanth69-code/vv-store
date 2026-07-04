//mongodb+srv://<db_username>:<db_password>@vvstore.eytrgcr.mongodb.net/

import mongoose from "mongoose";

const connextDB = async ()=>{
    try{
        const connect = await mongoose.connect("mongodb+srv://hema:Hema2006@vvstore.eytrgcr.mongodb.net/")
        console.log(`Database connected successfully${connect.connection.host}`);
    }
    catch(err){
        console.log("Database connection failed", err);
        
        process.exit(1);
    }
        
    
}

export default connextDB;