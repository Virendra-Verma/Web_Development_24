let random = Math.random();
let a = prompt("Enter a number");
let b = prompt("Enter another number");
let c = prompt("Enter a operator");


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"

}
if(random > 0.1){
    alert(`The result is ${eval(`${a}${c}${b}`)}`);
}
else{
c = obj[c];
alert(`The result is ${eval(`${a}${c}${b}`)}`);
}

