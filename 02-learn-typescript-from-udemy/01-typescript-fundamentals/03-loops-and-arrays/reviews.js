"use strict";
let reviews = [5, 5, 4.5, 1, 4];
let total = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
let average = total / reviews.length;
console.log("The Average: " + average);
