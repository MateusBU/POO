let json = "incorrect";

try{
    let person = JSON.parse(json);
    console.log(person.name);
}
catch(err){
    if(err instanceof SyntaxError){
        console.log(`Erro ${err.name}: ${err.message}`);
    }
    else{
        console.log("Release Expection because it does not how to treat");
        throw err;
    }
}
finally{
    console.log("Treatment done");
}