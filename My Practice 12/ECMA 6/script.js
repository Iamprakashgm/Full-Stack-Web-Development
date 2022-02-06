//ECMA Script 6
//ES6

//NEW : let, const and var
//OLD : var

/**
 * Supports default parameters on functions
 * Supports rest parameters
 * like function rest(numbers,...rest){
 * console.log(rest)}
 * rest(2,1,3,4,5,6.3)
 */

// function add(...all) {
//   let add = 0;
//   all.forEach((number) => {
//     add += number;
//   });
//   return add;
// }

// console.log(add(1, 2));
// console.log(add(1, 2, 3, 4, 5, 6, 7, 9));

// Spread Operator is ...

// let a = [1,2,3]
// let b = [0, ...a , 4,5,6] //contains all values of a
// console.log(b)

// let c = {
//     name : "John",
//     age : 22
// }

// let d = {
//     ...c,
//     age : 50,
//     location : "Nepal"
// }
// console.log(d)

// Array alternative using spread operator

// Push

// let e = [1,2,3]
// e.push(4) // [1,2,3,4]

// e = [...e , 5] // [1,2,3,4,5]
// console.log(e)

// Concat

// let a = [1,2,3]
// let b = [4,5,6]

// let c = a.concat(b)
// console.log(c)
// let d = [...a , ...b]
// console.log(d) // [1,2,3,4,5,6]

// soread on Strings

// let a = "HELLO"
// let c = new String("Hello")
// console.log(c)

// let b = ['A' , 'B' , ...a ] // ['A','B','H','E','L','L' 'O']
//                              //  0   1   2   3   4   5   6
// let d = {
//     name : 'john',
//     ...b, //{name : 'john , 0 : 'A' , 1: 'B' , 2 :'H' , 3:'E' ,4 :'L' , 5 : 'L' , 6: 'O'}
//     ...a  //{name : 'john , 0 : 'H' , 1: 'E' , 2 :'L' , 3:'L' ,4 :'O' , 5 : 'L' , 6: 'O'}
// }
// a[0]
// console.log(d)

// Object Literal

// let name = "John"
// let age = 22

// let john = {
//     name, //name : name => name : "John"
//     age, // age : age => age : 22
//     location : "Nepal"
// }
// console.log(john)

// // let a = {
// //     ['a' + 'b']  : "Hello"
// // }
// // console.log(a) // {ab : "Hello"}

// let a = {
//     name ,
//     [name] : 'hello'
// }

// console.log(a) // {name : "John" , John : "hello"}

// console.log(a.name) // John
// console.log(a[name]) //  Hello
// let b = {
//     name : " John",
//     surname : "Doe",
//     sayhello : function(){
//         console.log('Hello ')
//     }
// }

// let b2 = {
//     name : " John",
//     surname : "Doe",
//     sayhello(){
//         console.log('Hello ')
//     }
// }

// b.sayhello()
// b2.sayhello()

// let a = [1,2,3,4]

// // for key in iterable        //logs key
// // for value of iterable        //logs value

// for (let i in a) {
//     console.log(i)
// }
// for (let i of a) {
//     console.log(i , value)
// }

// Array Destructuring
// function getnumbers(){
//     return [1,2,3,4,5,6,7]
// }

// let x = getnumbers()[0] //1
// let y = getnumbers()[1] //2
// let z = getnumbers()[2] //3

// console.log(x,y,z)

// let [x1 , y1, z1, ...rest] = getnumbers() //[1,2,3]

// console.log(x1 , y1 , z1 , rest)

// function getnumbers(){
//     return [1,2]
// }
// let [x=4, y=5, z=6] = getnumbers()

// console.log(x,y,z)

// function getnumbers(){
//     return [1,2,3 ,[4,5,6] ,7,8,9]
// }

// let [a,b,c,[d,...rest2] , ...rest] = getnumbers()

// console.log(a,b,c,d, rest , rest2)

// function state(a ,b ){
//     return [
//         a+b ,
//         (a+b)/2,
//         a-b
//     ]
// }

// let [sum ,average , difference] = state(2,3)

// console.log(sum , average , difference)

// let person = {
//     firstname : 'John',
//     lastname : 'Doe',
//     age :34
// }

// let {firstname : fname , lastname , age = 22} = person

// console.log(fname , lastname , age )

// let a = 1
// let b = 2;
// [a,b] = [b,a]
// console.log(a)
// console.log(b)
