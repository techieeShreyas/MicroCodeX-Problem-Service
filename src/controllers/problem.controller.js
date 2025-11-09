const NotImplemented = require('../errors/Notimplemented.error');
const { ProblemService }=require('../services');
const { ProblemRepository}=require('../repositories');
const { StatusCodes }=require('http-status-codes');

const problemService=new ProblemService(new ProblemRepository());

function pingProblemController(req, res){
    return res.json({message: 'Problem Controller is up.'})
}

async function addProblem(req, res, next){
    try{
        console.log("I am at problem.controller.js file");
        console.log("incoming request body", req.body);
        const newproblem=await problemService.createProblem(req.body);
        console.log("new problem created successfully !!");
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message:'Successfully created a new problem.',
            error:{},
            data: newproblem
        })
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