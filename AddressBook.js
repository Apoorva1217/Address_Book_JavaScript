console.log("Welcome to Address Book!");

// UC1 Ability to create a Address Book Contact with first and last names, address, city, state, zipCode, phone number and email.

class AddressBook {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zipCode = params[5];
        this.phoneNumber = params[6];
        this.emailId = params[7];
    }

    //UC2 Ability to ensure Valid Contacts are added
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else throw "First Name is should have minimum 3 character with first letter Capital!";
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else throw "Last Name is should have minimum 3 character with first letter Capital!";
    }

    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (addressRegex.test(address))
            this._address = address;
        else throw "Address is should have minimum 4 character with first letter Capital!";
    }

    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (cityRegex.test(city))
            this._city = city;
        else throw "City is should have minimum 3 character with first letter Capital!";
    }

    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (stateRegex.test(state))
            this._state = state;
        else throw "State is should have minimum 3 character with first letter Capital!";
    }
    get zipCode() { return this._zipCode; }
    set zipCode(zipCode) {
        let zipRegex = RegExp('^[1-9]{3}[0-9]{3}$');
        if (zipRegex.test(zipCode))
            this._zipCode = zipCode;
        else throw "Invalid Zip Code!";
    }
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp('^[0-9]{10}$');
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "Invalid Phone Number!";
    }
    get emailId() { return this._emailId; }
    set emailId(emailId) {
        let mailRegex = RegExp('^[0-9a-zA-Z]+([+_.-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{2,3}){1,2}$');
        if (mailRegex.test(emailId))
            this._emailId = emailId;
        else throw "Invalid Email ID!";
    }

    toString() {
        return "\n  FirstName    : " + this.firstName
            + "\n  LastName     : " + this.lastName
            + "\n  Address      : " + this.address
            + "\n  City         : " + this.city
            + "\n  State        : " + this.state
            + "\n  ZipCode      : " + this.zipCode
            + "\n  PhoneNumber  : " + this.phoneNumber
            + "\n  EmailID      : " + this.emailId + "\n" +
            "/****************************************/";
    }
}

//UC3 Ability to create a New Address Book array and add new Contacts to it
let AddressBookArr = new Array();
function AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId) {
    let addresBook = new AddressBook(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
    AddressBookArr.push(addresBook);
}
AddContact("Apoorva", "Rasal", "Kalwa", "Thane", "Thane", "Maharashtra", 400602, 9876543212, "Appu1@gmail.com");
console.log(AddressBookArr.toString());