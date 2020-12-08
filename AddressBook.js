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

    get firstName() { return this._firstName; }
    set firstName(firstName) { return this._firstName; }

    get lastName() { return this._lastName; }
    set lastName(lastName) { return this._lastName; }

    get address() { return this._address; }
    set address(address) { return this._address; }

    get city() { return this._city; }
    set city(city) { return this._city; }

    get state() { return this._state; }
    set state(state) { return this._state; }

    get zipCode() { return this._zipCode; }
    set zipCode(zipCode) { return this._zipCode; }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) { return this._phoneNumber; }

    get emailId() { return this._emailId; }
    set emailId(emailId) { return this._emailId; }
}