import {Shape} from './Shape';
import { Circle } from './Circle';

let myShape = new Shape(10,15);
console.log(myShape.getInfo());

let myCircle = new Circle(5,1, 4);
console.log(myCircle.getInfo());


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