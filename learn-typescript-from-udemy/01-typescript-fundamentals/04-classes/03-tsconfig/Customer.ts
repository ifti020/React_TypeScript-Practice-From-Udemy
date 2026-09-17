
class Customer {
  private _firstName: string;
  private _lastName: string;

  constructor(theFirst: string, theLast: string) {
    this._firstName = theFirst;
    this._lastName = theLast;
  }

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(firstName) {
    this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}

// lets create an instance
let myCustomer = new Customer("Parama", "Haque");

// myCustomer.firstName = "Parama";
// myCustomer.lastName="Farhat";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
