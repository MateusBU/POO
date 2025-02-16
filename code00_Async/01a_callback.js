const fs = require('fs')
//const { console } = require('inspector/promises')

const onRead = function onRead(err, buf){
    if(err)
        console.log("There is an error");
    else
        console.log(buf.toString())
}

fs.readFile('01a_anyText.txt', onRead);