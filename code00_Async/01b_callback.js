const fs = require('fs');

fs.readFile(
    '01a_anyText.txt',
    (err, buf) => {
        if(err)
            console.log('There is an error');
        else
            console.log(buf.toString());
    }
)