const notfound = (req,res,next)=>{
    const error = new Error(`Not Found  ${req.originalUrl}`);
    console.log(req)
    res.status(404);
    next(error);
}

const errorHandler = (err,req,res,next)=>{
    let statusCode = res.statusCode === 500 ? res.statusCode : null;
    let message = err.message;
   // checks for mongodb cast error by objectID
    if(err.name === "CastError"  ){
        message = "Resource not found";
        statusCode = 404;
    }
    res.status(statusCode).json({
        message
    });
    
}
export default {notfound,errorHandler};    