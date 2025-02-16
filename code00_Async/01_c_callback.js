const fs = require('fs');

fs.readFile(
    '01a_anyText.txt',
    (err, buf) => {
        if(err)
            throw err;
        else
            console.log(buf.toString());
    }
)