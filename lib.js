var fs = require('fs');


exports.readFile = function(filename){
    return fs.readFileSync(filename, 'utf-8');
}


