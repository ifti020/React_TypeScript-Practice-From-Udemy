var num = [2,3,4,5,6,7,8,9,10];

var res = num.findIndex((currentValue, index , arr) =>{
    console.log(currentValue);
    return (currentValue %2);
});
console.log(res);


var num1 = [1,2,3,4,5];
var reslt = num1.slice(3,4);
console.log(reslt);