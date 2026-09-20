"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(5, 10, 20);
console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());
///// note////
// for config tsc
/*
step 1: type in the terminal "tsc --init"
step 2: then we see there create a "tsconfig.json" File
step 3: open tsconfig.json file and
step 4 : set "verbatimModuleSyntax": false,
step 5: set "noEmitOnError": true,

thats it end!

*/
/*

tsc --init → config ফাইল বানায়।

verbatimModuleSyntax: false → export syntax flexible করে।

noEmitOnError: true → ভুল থাকলে JS ফাইল বানাবে না।

*/ 
//# sourceMappingURL=Driver.js.map