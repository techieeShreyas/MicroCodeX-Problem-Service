const sanitizeMarkdownContent=require('../utils/markdownSanitizer')

class ProblemService{
    constructor(problemRepository){ 
        this.problemRepository=problemRepository;
    }
    // Constructor used for loose coupling.

    async createProblem(problemData){
        try{
            // 1. Sanitize the markdown for description
            problemData.description=sanitizeMarkdownContent(problemData.description);

            console.log("Problem data: ", problemData);
            const problem=await this.problemRepository.createProblem(problemData);
            console.log("Problem created: ", problem);

            return problem;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try{
            const problems=await this.problemRepository.getAllProblems();
            return problems;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async getProblem(problemid){
        try{
            const problem=await this.problemRepository.getproblem(problemid);
            return problem;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
}

module.exports=ProblemService;