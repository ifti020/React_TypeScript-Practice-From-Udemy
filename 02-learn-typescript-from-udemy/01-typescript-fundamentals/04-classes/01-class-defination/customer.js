"use strict";
class Customer {
    firstName = '';
    lastName = '';
    constructor(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}
// lets create an instance
let myCustomer = new Customer("Parama", "Haque");
// myCustomer.firstName = "Parama";
// myCustomer.lastName="Farhat";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
