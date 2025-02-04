//03c_const.js
function testConst(){
    const const01={propriedade: "valor"}
    console.log("01a."+const01.propriedade)

    const01= {propriedade: "novo valor"}  //ERROR, because it changes the object
    console.log("02a."+const01.propriedade)
};
testConst();