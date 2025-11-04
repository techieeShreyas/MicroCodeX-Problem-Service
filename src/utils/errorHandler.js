const BaseError = require("../errors/base.error");
const { StatusCodes }=require('http-status-codes');
function errorHandler(err, req, res, next){
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            // Errname: err.name,
            success: false,
            message: err.message,
            error: err.details,
            data:{} //because this is an exception so no data is going to be provided
    });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            // Errname: err.name,
            success: false,
            message: 'Something went wrong',
            error: err,
            data:{} //because this is an exception so no data is going to be provided
    });
}

module.exports=errorHandler;