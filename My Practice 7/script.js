
/**
 * Properties of Object
 * =>Data Properties
 * 1. Value
 * 2. Writable
 * 3. Enumerable
 * 4. Configurable
 * =>Accessor Properties
 * 1. Getter
 * 2. Setter
 */


// let person ={
//     name:'Prakash',
//     age:22,
//     faculty:'Geomatics Engineering'
// }

// let descriptor = Object.defineProperty(person,'faculty',{
//     writable:false, //cant change the value of defined key
//     enumerable:false,//cant apply the loop in this defined key
//     configurable:false // cant delete the defined key
// })
// let a = Object.getOwnPropertyDescriptor(person,'faculty');
// console.log(a);

// Object.defineProperties(person,
//     {name:{writable:false},age:{configurable:false},faculty:{enumerable:false}
// }})
// Object.seal() //cant add property
// Object.freeze()//Prevents the modification of existing 
// property attributes and values, and //prevents the addition of new propertie

// Getter and Setter 
// Getter doesnot take any parameter
// Setter must have parameter

// let circle = {
//     radius:4,
//     get area(){
//         return Math.PI*(this.radius**2);
//     },
//     set area(value){
//         this.radius = Math.sqrt(value/Math.PI);
//     }
// }

// circle.area = 49;
// console.log(circle.area);
// console.log(circle.radius);

// For Object Code Reusubality=Inheritence

// let vehicle = {fuel:'Diesel',seats:6}
// let car = {tyres:4,owner:'Prakash'}
// car.__proto__ = vehicle;
// console.log(car);
// let Tesla = {fuel : 'Electricity'}
// Tesla.__proto__ = car;
// console.log(Tesla);

// let vehicle = {fuel:'Diesel',seats:6}
// let car = Object.create(vehicle,{tyre:{value:4}});
// console.log(car)

// function person(fname, mname, lname, age, faculty){
//     this.firstName = fname;
//     this.middleName = mname;
//     this.lastName = lname;
//     this.age = age;
//     this.faculty = faculty;
//     this.campus = 'WRC';
// }

// let prakash = new person('Prakash', 'Gharti', 'Magar', 22, 'Geomatics Engineering');
// console.log(prakash);
// let john = new person('John', '', 'Doe', 21, 'Civil Engineering');
// console.log(john);

// There are other default Objects
// String
// Number
// Boolean
// Array

/**
 * To create object constructor Use new Keyword
 * To convert String object into Primitive datatype-->Use toString() method
 * To convert Number object into Primitive datatype-->Use valueOf() method
 */

// String.prototype.addp = function(){
//     return this.toString() + 'p';
// }

// let a = new String('Prakash');
// console.log(a.addp());
// let b = 'Gharti';
// console.log(b.addp());


// Challange

// function Person(name, surName, dateOfBirth){
//     this.name = name;
//     this.surName = surName;
//     this.dateOfBirth = new Date(dateOfBirth);
//     Object.defineProperty(this,'age',{
//         get : function(){
//             let currentYear = new Date();
//             return currentYear.getYear()-this.dateOfBirth.getYear();
//         }
//     });
//     this.married = false;
//     this.marriedTo = function(Person){
//         this.married = true;
//         this.spouse = Person;
//         Person.married = true;
//         Person.spouse = this;
//     }
// }

// function Girl(name, surName, dateOfBirth){
//     let person = new Person(name,surName,dateOfBirth); //To know the age of girl
//     this.__proto__ = person;                          // To access the age of girl from Person
//     this.marriedTo = function(person){
//         person.married = true;
//         person.spouse = this;
//         this.married = true;
//         this.spouse = person;
//         this.surName = person.surName;
//     }
// }


// let boy = new Person('Prakash', 'Gharti Magar', 'Dec 30 1999');
// let girl = new Girl('Julia', 'Stark','Jan 15 2000');
// boy.marriedTo(girl);
// girl.marriedTo(boy);
// console.log(boy.age)
// console.log(girl.age)


// Create a empty array named contacts
// Create a prompt that lists the first 5 contacts
// in your contact array
// the prompt takes 4 values a , b and c and d
// option a is to add contact
// option b is to search contact
// option c is to delete contact
// option d is to exit
// a contact is a object with 2 properties name and email
// while displaying contact also show the index of contact
// to delete you should prompt the index of contact

let contacts = {
    list : [],
    addContact : function(name, email){
        this.list.push({
            name : name,
            email : email
        })
    },
    searchContact : function(name){
        let contactstring = 'Searched Contacts:';
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name === name) {
                contactstring += `\n${i}. Name: ${this.list[i].name}, E-mail: ${this.list[i].email}`;
            }
        }
        return contactstring;
    },
    deleteContact : function(contactIndex){
        this.list = this.list.filter(function(value,index){
            return index !== parseInt(contactIndex);
        })
    },
    get contactString(){
        let contactstring = 'Your Contacts:';
        for (let i = 0; i < 5; i++) {
            if (this.list[i]) {
                contactstring += `\n${i}. Name: ${this.list[i].name}, E-mail: ${this.list[i].email}`;
            }
        }
        return contactstring;
    }
}

for (let i = 1; i >0; i++) {
    let input = prompt(contacts.contactString);
    switch (input) {
        case 'a':
            let name = prompt('Enter Your Name');
            let email = prompt('Enter Your E-mail');
            contacts.addContact(name,email);
            break;
        case 'b':
            let contactname = prompt('Enter Search-Name');
            let contactstring = contacts.searchContact(contactname);
            alert(contactstring);
            break;
        case 'c':
            let contactIndex = prompt('Enter Contact-Index');
            contacts.deleteContact(contactIndex);
            break;
        case 'd':
            i = -5;
            break;
    
        default:
            break;
    }
}





