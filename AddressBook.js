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
        let phoneRegex = RegExp('^[7-9]{1}[0-9]{9}$');
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
        return "\n FirstName   : " + this.firstName
            + "\n LastName    : " + this.lastName
            + "\n Address     : " + this.address
            + "\n City        : " + this.city
            + "\n State       : " + this.state
            + "\n ZipCode     : " + this.zipCode
            + "\n PhoneNumber : " + this.phoneNumber
            + "\n EmailID     : " + this.emailId + "\n" +
            "/--------------------------------------/";
    }
}

//UC3 Ability to create a New Address Book array and add new Contacts to it
//UC7 Ability to ensure there is noDuplicate Entry of the same Person in the Address Book

let AddressBookArr = new Array();
function AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId) {
    try {
        let addresBook = new AddressBook(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
        if (AddressBookArr.find(contact => contact.firstName == addresBook.firstName && contact.lastName == addresBook.lastName)) {
            throw "Duplicate entries are not allowed!";
        }
        else { AddressBookArr.push(addresBook); }
    } catch (e) {
        console.error(e);
    }
}
AddContact("Apoorva", "Rasal", "Kalwa", "Thane", "Maharashtra", 436278, 9876543212, "Appu1@gmail.com");
AddContact("Yash", "Kadam", "Bandra", "Mumbai", "Maharashtra", 411212, 9080908078, "Yash17@gmail.com");
AddContact("Shreya", "Shinde", "Ghansoli", "Navimumbai", "Maharashtra", 421345, 9089098789, "Shreya98@gmail.com");
console.log("Contacts are Added...");
console.log(AddressBookArr.toString());

//UC4 Ability to find existing contact person using their name and edit it
AddressBookArr.filter(addresBook => addresBook.firstName == "Apoorva" && addresBook.lastName == "Rasal")
    .forEach(addresBook => { addresBook.address = "Kharadi"; addresBook.city = "Pune"; addresBook.state = "Maharashtra" });
console.log("\nEdited Contact...");
AddressBookArr.forEach(addresBook => console.log(addresBook.toString()));

//UC5 Ability to find a person with name delete it from the array
for (let index = 0; index < AddressBookArr.length; index++) {
    if (AddressBookArr[index].firstName == "Apoorva" && AddressBookArr[index].lastName == "Rasal") {
        AddressBookArr.splice(index, 1);
    }
}
console.log("\nContact Deleted...");
console.log("After Deletion...");
console.log(AddressBookArr.toString());

//UC6 Ability to find number of contacts in the address book
let countofContact = AddressBookArr.reduce(((countofContact) => {
    countofContact = countofContact + 1;
    return countofContact;
}), 0);
console.log("\nCount of Contact: " + countofContact);

//UC8 Ability to search Person in a particular City or State
AddressBookArr.filter(addresBook => addresBook.city.includes("Mumbai"))
    .forEach(addresBook => console.log("\nPerson in a Particular City: " + addresBook.toString()));
AddressBookArr.filter(addresBook => addresBook.state.includes("Maharashtra"))
    .forEach(addresBook => console.log("\nPerson in a Particular State: " + addresBook.toString()));

//UC9 Ability to view Persons by City or State
function viewByCity(city) {
    AddressBookArr.filter(addresBook => addresBook.city == city)
        .forEach(addresBook => console.log(addresBook.toString()));
}
console.log("\nView Person by City:");
viewByCity("Mumbai");

function viewByState(state) {
    AddressBookArr.filter(addresBook => addresBook.state == state)
        .forEach(addresBook => console.log(addresBook.toString()));
}
console.log("\nView Person by State:");
viewByState("Maharashtra");

//UC10 Ability to get number of contact persons i.e. count by City or State
function countByCity(city) {

    let cityCount = AddressBookArr.filter(contact => contact.city == city)
        .reduce((countOfContact) => countOfContact = countOfContact + 1, 0);
    console.log("\nCount of Person by City : " + cityCount);
}
countByCity("Mumbai");

function countByState(state) {

    let stateCount = AddressBookArr.filter(contact => contact.state == state)
        .reduce((countOfContact) => countOfContact = countOfContact + 1, 0);
    console.log("\nCount of Person by State : " + stateCount);
}
countByState("Maharashtra");

//UC11 Ability to sort the entries in the address book alphabetically by Person’s name
function sortByPersonName() {
    AddressBookArr.sort((a, b) => a.firstName.localeCompare(b.firstName));
    AddressBookArr.forEach(addresBook => console.log(addresBook.toString()));
}
console.log("\nSorted by FirstName:");
sortByPersonName();

//UC12 Ability to sort the entries in the address book by City, State, or Zip
function sortByCity() {
    AddressBookArr.sort((a, b) => a.city.localeCompare(b.city));
    AddressBookArr.forEach(addresBook => console.log(addresBook.toString()));
}
console.log("\nSorted by City:");
sortByCity();

function sortByState() {
    AddressBookArr.sort((a, b) => a.state.localeCompare(b.state));
    AddressBookArr.forEach(addresBook => console.log(addresBook.toString()));
}
console.log("\nSorted by State:");
sortByState();

function sortByZipCode() {
    AddressBookArr.sort((a, b) => a.zipCode == b.zipCode);
    AddressBookArr.forEach(addresBook => console.log(addresBook.toString()));
}
console.log("\nSorted by ZipCode:");
sortByZipCode();