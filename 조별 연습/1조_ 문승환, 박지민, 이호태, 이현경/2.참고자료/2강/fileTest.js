let fs = require('fs');
let path = rwquire('path');
let data = { name: '문승환', age: 21 }

let newpath = path.join(__dirname, 'dtat.txt');


fs.writeFile(newpath, JSON.stringify(data), function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('success');
    }
})

fs.readFile(newpath, function (err, data) {
    if (err) {
        throw new Error
    }
    else {
        console.log(data.toString());
    }

}
)

