"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    _firstName;
    _lastName;
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// lets create an instance
let myCustomer = new Customer("Ifti", "Haque");

myCustomer.firstName = "Parama";
myCustomer.lastName="Farhat";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
//# sourceMappingURL=Customer.js.map