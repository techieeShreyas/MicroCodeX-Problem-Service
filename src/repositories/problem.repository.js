const NotFound = require('../errors/notfound.error');
const { Problem }=require('../models');

class ProblemRepository{
    async createProblem(problemData){
        try{
            // throw {"err": "some error"};
            const problem=await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases)?problemData.testCases:[],
            });
            return problem;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }   

    async getAllProblems(){
        try{
            throw {"err": "Some error"};
            const problems=await Problem.find({});
            return problems;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async getproblem(id){
        try{
            const problem=await Problem.findById(id);
            console.log("Printing the result of findbyID", problem);
            if (!problem){
                console.log("Successfully coming inside if condition.");
                throw new NotFound("Problem", id);
            }
            return problem;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
}

module.exports=ProblemRepository;