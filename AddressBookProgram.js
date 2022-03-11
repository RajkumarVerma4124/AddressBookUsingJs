//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });

//Created contact class(UC1)
class Contact {
    //Declaring the properties(UC1)
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailId;

    //Initializing the parameterized constructor of class using constructor keyword(UC1)
    constructor(...parameters) {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zipCode = parameters[5];
        this.phoneNumber = parameters[6];
        this.emailId = parameters[7];
    }

    //Method to return values in string format
    toString() {
        return `First Name: ${this.firstName}\tLast Name: ${this.lastName}\nAddress: ${this.address}\tCity: ${this.city}\tState: ${this.state}\nZipCode: ${this.zipCode}\tPhone Number: ${this.phoneNumber}\nEmail-Id: ${this.emailId}\n`;
    }
}

//Displaying the welcome message
console.log("Welcome To The AddressBook Program Using Js")

//Function to return object of added contacts(UC1)
function returnAddedContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId) {
    let contact
    try {
        //Object for class
        contact = new Contact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
    } catch (e) {
        console.error(e)
    }
    return contact;
}

//Function to get the details of the contact from the user(UC1 && UC2)
function getContactDetails() {
    try {
        //Regex patterns for validating contact details(UC2)
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        let addressPattern = new RegExp('^[A-Za-z]{4,}$');
        let zipCodePattern = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        let phoneNumPattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
        let emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
        //Validating first name(UC2)
        let firstName = prompt('Enter Your FirstName Start With Capital : ');
        if (!namePattern.test(firstName))
            throw 'First name should have minimum 3 characters';
        //Validating last name(UC2)
        let lastName = prompt('Enter Your LastName Start With Capital : ');
        if (!namePattern.test(lastName))
            throw 'First name should have minimum 3 characters';
        //Validating address(UC2)
        let address = prompt('Enter Your Address : ');
        if (!addressPattern.test(address))
            throw 'Address should have minimum 4 characters';
        //Validating city name(UC2)
        let city = prompt('Enter Your City Name: ');
        if (!addressPattern.test(city))
            throw 'City should have minimum 4 characters';
        //Validating states name(UC2)
        let state = prompt('Enter Your State Name : ');
        if (!addressPattern.test(state))
            throw 'State should have minimum 4 characters';
        //Validating zip code(UC2)
        let zipCode = prompt('Enter Your Zip Code : ');
        if (!zipCodePattern.test(zipCode))
            throw 'Zipcode is not valid';
        //Validating phone number(UC2)
        let phoneNumber = prompt('Enter Your Phone Number : ');
        if (!phoneNumPattern.test(phoneNumber))
            throw 'Phone number is not valid';
        //Validating email id(UC2)
        let emailId = prompt('Enter Your Email Id : ');
        if (!emailIdPattern.test(emailId))
            throw 'Email id is not valid';
        let contactDetails = returnAddedContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
        console.log("\nDetails Of Contacts");
        console.log(contactDetails.toString());
    } catch (e) {
        console.error(e);
    }
}

//Calling the function(UC1)
getContactDetails();