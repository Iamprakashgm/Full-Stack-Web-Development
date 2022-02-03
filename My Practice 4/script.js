// Array Methods

// join() method
// let a = ['P','r','a','k','a','s','h'];
// console.log(a.join('-'));

// toString() method
// console.log(a.toString());

// pop() method pops last value
// Returns popped value
// let b = [1,2,3,4,5];
// console.log(b.pop());
// console.log(b);

// push() method puts new value at last of array
// Returns length of new array
// let c = b.push(6)
// console.log(b);

// shift() method shifts first element from an array
// Returns the removed element
// let e = b.shift();
// console.log(b);
// console.log(e);

// unshift() method puts the new value at first of an array
// Returns the length of new array
// let f = b.unshift(0);
// console.log(b);
// console.log(f);

// splice() method puts the value between the array
// Returns the array of removed element
// Takes more than three parameters
// let g = b.splice(0,0,-1); 
//starting index,no. of element to be removed,no. of element to be added
// console.log(b);
// console.log(g);

// concat() method 
// Creates new array and returns new concatinated array

// let a = [1,2,3]
// let b = [4,5,6]
// let d = [7,8,9]
// let c = a.concat(b,d)

// console.log(a)
// console.log(b)
// console.log(d)
// console.log(c)

// slice() method
// Slices or copies an array from given first position to last position
// But it returns the original sliced array
// let i = [1,2,3,4,5,6];
// let j = i.slice(2)
// console.log(i);
// console.log(j);

// sort() method
// Sorts the original array and returns the same sorted array
// Takes a function which sorts an array and objects
// let a = [1,3,2,5,4,6];
// let b = a.sort()
// console.log(a);
// console.log(b);
// let c = a.sort(function(a,b){
//     return a-b;
// })
// console.log(c);
// Array of object sorting
// let a = [
//     {
//         value : 2
//     },
//     {
//         value : 5
//     },
//     {
//         value : 1
//     }
// ];
// let b = a.sort(function(a,b){
//     return a.value - b.value;
// })
// console.log(b);

// reverse() method
// Reverses an array and also returns reversed array 
// let a = [1,2,3,4,5,6];
// let b = a.reverse();
// console.log(a);
// console.log(b);

// includes() method
// Returns true or false
// let c = [1,2,3,4,5];
// console.log(c.includes(4));

// indexOf() method
// Returns the index of searched value
// console.log(c.indexOf(4,1));  //value,search after index
// lastIndexOf() method
// console.log(c.lastIndexOf(4,4));

// forEach() method
// Takes callback function
// let a = [1,2,3,4,5];
// console.log(a.forEach(function(element,index,array){
//     console.log(element, index, array);
// }));

// filter() method
//
// let b = a.filter(function(element){
//     return element%2 === 0;
// });
// console.log(b);

// map() method
// calls callback function
// let b = a.map(function(element){
//     return element + 2;
// });
// console.log(b);
// console.log(a);



// Challenge 4

// Question No.1
// let a = [1,2,3,4];
function push(array,value){
    array[array.length] = value;
    return array;
}
// console.log(push(a,5));

// Question No.2
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// function concat(array1,array2){
//     let new_arr = [];
//     for (let i = 0; i < array1.length; i++) {
//         push(new_arr,array1[i]);
//     }
//     for (let j = 0; j < array2.length; j++) {
//         push(new_arr,array2[j]);
//     }
//     return new_arr;
// };
// console.log(concat(a,b));

// Question No.3
// let a = [1,2,3,4,5];
// function reverse(array){
//     let new_arr = [];
//     for (let i = (array.length-1); i >= 0; i--) {
//         push(new_arr,array[i]);
//     }
//     return new_arr;
// }
// console.log(reverse(a));

// Question No. 4
// let a = [1,2,3,4,5];
function forEach(array,callback){
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
// forEach(a,function(element,index,array){
//     console.log(element,index,array)
// }
// );

// Question No.5
// function filter(array,callback){
//     let new_arr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i],i,array)) {
//             push(new_arr,array[i]);
//         }
//     }
//     return new_arr;
// };
// let a = [1,2,3,4,5,6];
// let b = filter(a,function(element){
//     return element%2 === 0;
// });
// console.log(b);

// Question No.6
// function map(array,callback){
//     let new_arr = [];
//     for (let i = 0; i < array.length; i++) {
//         push(new_arr,callback(array[i],i,array))
//     }
//     return new_arr;
// };

function map2(array,callback){
    let new_arr = [];
    forEach(array,function(element,i,array){
        push(new_arr,callback(element,i,array))
    })
    return new_arr;
};
let a = [1,2,3,4,5];

// let a = [1,2,3];
let b = map2(a,function(element,index,array){
    return element + 2;
});
console.log(b);


