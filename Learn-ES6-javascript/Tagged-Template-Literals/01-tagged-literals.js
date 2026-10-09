function modifier(strings, ...values)
{
console.log(strings);
console.log(values);

const add = strings.reduce((prev,current) =>
{

    return prev + current + (values.length ? "Md. " + values.shift() : "");

}, "");
return add;
}
var p1 = "Ifti"
var p2 = "Java"

console.log(modifier `we have ${p1} and ${p2} in our Programming Team`);
