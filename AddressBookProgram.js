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
        //Regex patterns for validating contact details(UC2&&UC3)
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        let addressPattern = new RegExp('^[A-Za-z0-9]{4,}$');
        let zipCodePattern = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        let phoneNumPattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
        let emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
        if (!namePattern.test(parameters[0]) && !namePattern.test(parameters[1]))
            throw 'First or last name should have minimum 3 characters';
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        if (!addressPattern.test(parameters[2]) && !addressPattern.test(parameters[3]) && !addressPattern.test(parameters[4]))
            throw 'It Should have minimum 4 characters';
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        if (!zipCodePattern.test(parameters[5]))
            throw 'Zipcode is not valid';
        this.zipCode = parameters[5];
        if (!phoneNumPattern.test(parameters[6]))
            throw 'Phone number is not valid';
        this.phoneNumber = parameters[6];
        if (!emailIdPattern.test(parameters[7]))
            throw 'Email id is not valid';
        this.emailId = parameters[7];
    }

    //Method to return values in string format
    toString() {
        return `First Name: ${this.firstName}\tLast Name: ${this.lastName}\nAddress: ${this.address}\tCity: ${this.city}\tState: ${this.state}\nZipCode: ${this.zipCode} \tPhone Number: ${this.phoneNumber}\nEmail-Id: ${this.emailId}\n`;
    }
}

//Initializing an addressbook contact array(UC3)
var addressBookContactArr = new Array();

//Displaying the welcome message
console.log("Welcome To The AddressBook Program Using Js")

//Function to return object of added contacts(UC1)
function addContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId) {
    try {
        //Using filter to ensure no duplicate entry is done in the addressbook contact(UC7) 
        let checkContact = addressBookContactArr.filter((contact) => contact.firstName == firstName && contact.lastName == lastName);
        if (checkContact.length == 0) {
            let contact = new Contact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
            addressBookContactArr.push(contact)
        } else console.log("Contact With Same Name Is Already Present")
    } catch (e) {
        console.error(e)
    }
}

//Fucntion to add default contact into an array(C3)
function addDefaultContactDetails() {
    try {
        addContact("Rajkumar", "Verma", "Ghansoli", "NaviMumbai", "Maharashtra", "456123", "91 9517534561", "raj123@gmail.com");
        addContact("Yash", "Verma", "Sec-45", "Noida", "Delhi", "789456", "91 7412589631", "yash456@gmail.com");
        addContact("Ajay", "Matkar", "Chembur", "Mumbai", "Maharashtra", "456123", "91 8523697412", "ajay789@gmail.com");
        addContact("Aman", "Nikam", "Boriwali", "Mumbai", "Maharashtra", "401 567", "918562497412", "aman789@gmail.com");
        if (addressBookContactArr.length != 0)
            console.log("Added The Default Contacts Succesfully");
    } catch (e) {
        console.error(e);
    }
}

//Function to get the details of the contact from the user(UC1 && UC2)
function getContactDetails() {
    try {
        let firstName = prompt('Enter Your FirstName Start With Capital : ');
        let lastName = prompt('Enter Your LastName Start With Capital : ');
        let address = prompt('Enter Your Address : ');
        let city = prompt('Enter Your City Name: ');
        let state = prompt('Enter Your State Name : ');
        let zipCode = prompt('Enter Your Zip Code : ');
        let phoneNumber = prompt('Enter Your Phone Number : ');
        let emailId = prompt('Enter Your Email Id : ');
        addContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
        console.log("Added The Contact Succesfully");
    } catch (e) {
        console.error(e);
    }
}

//Function to display contacts(UC3)
function displayContact() {
    try {
        console.log("\n**************Details Of AddressBook Contacts*********************\n");
        addressBookContactArr.forEach(contact => console.log(contact.toString()));
    } catch (e) {
        console.error(e);
    }
}

//Function to view edit contacts based on the given name(UC4)
function viewAndEditContact() {
    try {
        let name = prompt('Enter The Name Of Contact View And Modify : ');
        addressBookContactArr.forEach((contact) => {
            if (contact.firstName == name) {
                console.log(contact.toString());
                while (true) {
                    console.log("1: First Name \n2: Last Name \n3: Address \n4: City \n5: State \n6: Zipcode \n7: Phone Number \n8: Email Address \n9: Go Back")
                    let choice = parseInt(prompt("Enter The Choice From Above That You Want Modified : "));
                    switch (choice) {
                        case 1:
                            let newFirstName = prompt("Enter The New First Name : ");
                            contact.firstName = newFirstName;
                            break;
                        case 2:
                            let newLastName = prompt("Enter The New First Name : ");
                            contact.lastName = newLastName;
                            break;
                        case 3:
                            let newAddress = prompt("Enter The New Address : ");
                            contact.address = newAddress;
                            break;
                        case 4:
                            let newCity = prompt("Enter The New City Name : ");
                            contact.city = newCity;
                            break;
                        case 5:
                            let newState = prompt("Enter The New State Name : ");
                            contact.state = newState;
                            break;
                        case 6:
                            let newZipCode = prompt("Enter The New Zip Code : ");
                            contact.zipCode = newZipCode;
                            break;
                        case 7:
                            let newPhoneNum = prompt("Enter The New Phone Number : ");
                            contact.phoneNumber = newPhoneNum;
                            break;
                        case 8:
                            let newEmailId = prompt("Enter The New Email Id : ");
                            contact.email = newEmailId;
                            break;
                        case 9:
                            return;
                        default:
                            console.log("Invalid Option");
                            break;
                    }
                }
            }
        });
        console.log("No Contact Found")
    } catch (e) {
        console.error(e);
    }
}

//Function to delete contact based on name(UC5)
function deleteContact() {
    try {
        let name = prompt('Enter The Name Of The Contact To View And Modify Contact : ');
        const index = addressBookContactArr.findIndex((contact) => contact.firstName == name);;
        //using splice remove the element
        if (index != -1)
            addressBookContactArr.splice(index, 1);
    } catch (e) {
        console.error(e);
    }
}

//Function to count contact in addressbook(UC6)
function countContact() {
    try {
        let countContact = addressBookContactArr.reduce((contact) => contact + 1, 0)
        console.log(`Total Number Of Contacts Is : ${countContact}`);
    } catch (e) {
        console.error(e);
    }
}

//Function to seach person in a particular city or state(UC8)
function seachPersonByCityOrState() {
    try {
        let cityOrState = prompt("Enter A City Or State Name To Find Person : ");
        let contact = addressBookContactArr.filter((contact) => contact.city == cityOrState || contact.state == cityOrState);
        console.log(contact.join("\n"));
    } catch (e) {
        console.error(e);
    }
}

//Function to view person by city or state(UC9)
function viewPersonsByCityOrState() {
    try {
        let cityOrState = prompt("Enter A City Or State Name To Find Person : ");
        addressBookContactArr.filter((contact) => contact.city == cityOrState || contact.state == cityOrState).map((cs) => {
            cs.city.includes(cityOrState) ? console.log(`${cs.firstName} ${cs.lastName} Lives In City ${cs.city}`) : console.log(`${cs.firstName} ${cs.lastName} Lives In State ${cs.state}`)
        });
    } catch (e) {
        console.error(e);
    }
}

//Function to perform addressbook operations(UC3-UC9)
function addressBookOperations() {
    try {
        while (true) {
            console.log("1: Add New Contact \n2: Add Default Contacts \n3: Display Contact\n4: Edit And View Contact \n5: Delete Contact \n6: Count Contacts \n7: Search Person \n8: View Persons By City Or State \n9: Exit");
            switch (parseInt(prompt('Enter the choice : '))) {
                case 1:
                    getContactDetails();
                    break;
                case 2:
                    addDefaultContactDetails();
                    break;
                case 3:
                    displayContact();
                    break;
                case 4:
                    viewAndEditContact();
                    break;
                case 5:
                    deleteContact();
                    break;
                case 6:
                    countContact();
                    break;
                case 7:
                    seachPersonByCityOrState();
                    break;
                case 8:
                    viewPersonsByCityOrState();
                    break;
                case 9:
                    console.log("Exited");
                    process.exit(1)
                    break;
                default:
                    console.log("Wrong Choice");
                    break;
            }
        }
    } catch (e) {
        console.error(e);
    }
}
//Calling the addressbook operation functions(UC3-UC9)
addressBookOperations();