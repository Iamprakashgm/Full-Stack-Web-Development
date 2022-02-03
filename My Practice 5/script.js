// Day 5 
// Creating an object
// Using object literal
// let person = {
//     name : "Prakash",
//     surName : "Gharti Magar",
//     age : 21,
//     address : "Rolpa"
// };
// person.faculty = "Geomatics Engineering";
// console.log(person);
// console.log(person.address);
// console.log(person['age']);
// console.log(person['sur'+'Name']);


// using new keyword
// const animal = new Object(); //Even it is constant we can add key values in object
// animal.name = "Dog";
// console.log(animal);

// Objects are mutable and it can be nested
// this keyword is used to represent the parent object
// let person = {
//     firstName : "Prakash",
//     lastName : "Gharti Magar",
//     fullName : function(){
//         return this.firstName + ' ' + this.lastName;
//     }
// };
// console.log(person.fullName());


// Challenge 5
// Question No.1
// let person = {
//     name : "Prakash Gharti Magar",
//     age : 21,
//     gender : "Male",
//     location : "Rolpa",
//     maritalStatus : "Single",
//     moveTo : function(location){
//         this.location = location;
//     },
//     celebratedBirthday : function(){
//         this.age++;
//     },
//     married : function(){
//         if(this.maritalStatus === "married"){
//             console.error("Ohh no!! Already married.");
//         }else{
//             this.maritalStatus = "married";
//         }
//     },
//     divorced : function(){
//         if(this.maritalStatus === "married"){
//             this.maritalStatus = "Single";
//         }else{
//             console.error("Get married first!!!.");
//         }
//     }
// };
// console.log(person.location);
// person.moveTo("Pokhara");
// console.log(person.location);

// console.log(person.age);
// person.celebratedBirthday();
// console.log(person.age);

// console.log(person.maritalStatus);
// person.married();
// console.log(person.maritalStatus);
// person.married();

// console.log(person.maritalStatus);
// person.divorced();
// console.log(person.maritalStatus);
// person.divorced();

// console.log() it doesnot return the value 

// Some Built in Objects
// let date = new Date();
// Date() object contains many methods like
// getFullYear(),getMonth(),getDay(),getHours(),getMinutes(),getSeconds(),getMiliseconds() etc...
// console.log(date);


// Math() object
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.LN2);
// console.log(Math.E);


// Math Mehods
// console.log(Math.sqrt(9));
// console.log(((Math.random())*6).toFixed(0));
// console.log(Math.round(3.6));
// console.log(Math.ceil(3.6));
// console.log(Math.floor(3.6));
// console.log(Math.trunc(3.6));
// console.log(Math.pow(3,2));
// console.log(Math.abs(-65));
// console.log(Math.min(1,2,3,4,5,6));
// console.log(Math.max(1,2,3,4,5,6));


// Popups 
// Alert()
// window.alert("Are you serious about programming??");
// alert("You have to read your course now");
// let a = window.alert("Are you serious about programming??");
// let b = alert("You have to read your course now");
// console.log(a,b);  //returns undefined


// Confirm Box
// window.confirm("Do you want to continue?");
// confirm("You wanna leave this site.");
// let a = window.confirm("Do you want to continue?");
// let b = confirm("You wanna leave this site.");
// console.log(a,b); //returns value either true or false


// Prompt Box
// let a = window.prompt("What is your name?");
// let b = prompt("Is that your name?","Prakash Gharti Magar");
// console.log(a);
// console.log(b);
// window.close();

// Challenge 6

// Question No.1
// let userName = prompt("What is your name,pleasee?");
// let userLocation = prompt("Please, Drop your location.");
// alert("Your name is " + userName + " and location is " + userLocation + ", right??");

// Question No.2
// let contacts = [];
// function getContactString(){
//     let contactString = "Your Contacts";
//     for (let i = 0; i < 5; i++) {
//         if (contacts[i]) {
//             contactString += `\n ${i}, Name : ${contacts[i].name}, Email : ${contacts[i].email}`;
//         }
//     }
//     return contactString; 
// }

// for (let i = 1; i > 0; i++) {
//     let input = prompt(getContactString());
//     switch(input){
//         case 'a' :
//             let name = prompt("Enter your name please.");
//             let email = prompt("Enter your email please.");
//             contacts.push({
//             name : name,
//             email : email
//         });
//         break;
//         case 'b' :
//             let contactName = prompt("Please enter the name.");
//             let contactString = "Your search results are:";
//             for (let i = 0; i < contacts.length; i++) {
//                 if (contacts[i].name === contactName) {
//                     contactString += `\n ${i}, Name : ${contacts[i].name}, Email : ${contacts[i].email}`;
//                 }
//             }
//             alert(contactString);  
//             break;
//         case 'c' :
//             let contactIndex = prompt("Enter the contact index that your want to delete.");
//             contacts = contacts.filter(function(value,index){
//                 return index !== parseInt(contactIndex);
//             })
//             break;
//         case 'd' :
//             i = -1;
//             break;
//         default :
//             break;
//     }
// }