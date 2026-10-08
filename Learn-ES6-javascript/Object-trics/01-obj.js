
var myObj = {
    name : "javascript",
    founder: "Brendan Eich",
    estd: "1995",
    ranking: 1,
};
// print key & values without loops 
var keys = Object.keys(myObj);
console.log(keys);
var values = Object.values(myObj);
console.log(values);

// key value pair like a map
var entries = Object.entries(myObj);
console.log(entries);