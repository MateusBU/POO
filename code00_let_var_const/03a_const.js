function testConst(){
    const const01="const01"
    {
        const const02="const02"
        console.log("01a."+const01)
        console.log("01b."+const02)
    }
    const01= "novo valor"   // NOT POSSIBLE, IT IS A CONSTANT
    console.log("02a."+const01)
    console.log("02b."+const02)
};
testConst();