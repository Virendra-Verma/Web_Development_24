const fs = require('fs');
console.log(fs)
console.log("Starting")
fs.writeFileSync('hello.txt', 'Hello from Node.js');
console.log("Ending...")