// This is normal function 

function number(){
    return 100;

}
console.log(number());

// now convert this in ArrowFunction

console.log("Now Using Arrow Function");

let ifti = () => {
    return 200;
 }

 console.log(ifti());
 
 // arrow function with multiple parameter

 let number2=(x, y) => {
    return x+y;
 };
 console.log(number2(5,10));