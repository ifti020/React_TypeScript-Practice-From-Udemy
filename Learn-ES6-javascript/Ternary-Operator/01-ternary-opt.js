
// normal way
var age = 19;

var type = (age >=18)
{
    if(age>=18)
    {
        type= "adult";
    }
    else {
        type = "child";
    }
}
console.log(type);
console.log();
// now use ternary operator


var old = 18;

var type =( old >= 18) ? "adult" : "child";
console.log(type);
console.log();
// nested way

var age1 = 7;

var type = age1 >= 18 ? "adult" : age1 < 10 ? "kid" : "child";
console.log(type);

console.log();

var isLoggedin= true;

var access = isLoggedin ? true : false;
console.log(access);