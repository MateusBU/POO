class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

function generateError(){
    throw new ValidationError("Invalid data");
}

try {
    generateError();
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}


try{
    //code that can generate excpetion
}
catch(e){
    //it treats exception
}
finally{
    //general treatment
}