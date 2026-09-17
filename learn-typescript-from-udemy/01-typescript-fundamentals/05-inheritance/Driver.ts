import {Shape} from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10,15);
console.log(myShape.getInfo());

let myCircle = new Circle(5,10, 20);
console.log(myCircle.getInfo());


let myRectangle = new Rectangle(0,0,3,7);
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