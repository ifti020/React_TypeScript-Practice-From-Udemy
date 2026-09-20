class Customer {

// parameter properties shortcut
  constructor(private _firstName: string,
              private _lastName: string) {}
 

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
let myCustomer = new Customer("Ifti", "Haque");



console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
