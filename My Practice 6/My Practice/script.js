// Functions in JavaScript
// Function Definition
// function printMyName(){
//     console.log('Prakash Gharti Magar');
// }
// printMyName();
// // Function Declaration
// let printName = function(){
//     console.log('Chang Gharti Magar');
// }
// printName();
// // Arrow Function
// let myName = () =>{
//     console.log('Peter Gharti Magar');
// }
// myName();

// Higher Order Function
// Function within function
let changeNumber = function(f,s,callBack){
    return callBack(f,s);
}
let final = changeNumber(4,10,function callBack(a,b){
    return (a + b);
});
console.log(final);