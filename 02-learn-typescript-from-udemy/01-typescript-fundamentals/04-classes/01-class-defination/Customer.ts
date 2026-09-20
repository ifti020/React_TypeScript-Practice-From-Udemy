class Customer{

        firstName: string='';
        lastName: string='';

        constructor(theFirst: string , theLast:string)
        {
            this.firstName=theFirst;
            this.lastName=theLast;
        }

}

// lets create an instance
let myCustomer = new Customer("Parama", "Haque");

// myCustomer.firstName = "Parama";
// myCustomer.lastName="Farhat";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);