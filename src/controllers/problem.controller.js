const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/Notimplemented.error');


function pingProblemController(req, res){
    return res.json({message: 'Problem Controller is up.'})
}

function addProblem(req, res, next){
    try{
        //nothing implemented
        // throw new NotImplemented('addProblem');
        throw new NotImplemented('addProblem');

    }
    catch(error){
        next(error);
    }
    
    // return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    //     message: "Not Implemented."
    // });

}

function getProblem(req, res){
    // return res.status(501).json({
    //     message: "Not Implemented."
    // });
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented."
    });
}

function getProblems(req, res){
    // return res.status(501).json({
    //     message: "Not Implemented."
    // });
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented."
    });
}

function deleteProblem(req, res){
    // return res.status(501).json({
    //     message: "Not Implemented."
    // });
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented."
    });
}

function updateProblem(req, res){
    // return res.status(501).json({
    //     message: "Not Implemented."
    // });
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented."
    });
}

module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem, 
    pingProblemController,
}

/**
 * 
 * res
 * 
 * res.status -> returns the same response object with status property set
 * .json -> return the same response object which has status set but this json to be returned is also set.
 */