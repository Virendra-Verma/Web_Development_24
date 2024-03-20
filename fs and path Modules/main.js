const e = require('express');
const fs = require('fs');
console.log(fs)
console.log("Starting")
// fs.writeFileSync('hello.txt', 'Hello from Node.js');
fs.writeFile("hello.txt", "Hello from Node.js", () =>{
    console.log("File written")
    fs.readFile("hello.txt", "utf8", (err, data) =>{
     console.log(err, data.toString)
})
})
fs.appendFile("hello.txt", "Hello again", () =>{
    console.log("File written")
    fs.readFile("hello.txt", "utf8", (err, data) =>{
     console.log(err, data.toString )

console.log("Ending...")