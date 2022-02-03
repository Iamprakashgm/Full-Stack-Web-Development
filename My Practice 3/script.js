
// setTimeout() is used to run the program after some time
// setTimeout(
//     function(){
//         console.log('Excuted after some time.');
//     },5000
// )
// console.log('Excuted before the setTimeout Function');
// Challange 3

// Question No. 1
// function add_by_number(array,number){
//     let Array = [];
//     for(let i = 0;i<array.length;i++){
//         Array.push(array[i] + number);
//     }
//     return Array;
// }
// let array = [2,3,4,5,6];
// let addedArray = add_by_number(array,2);
// console.log(addedArray);

// Question No.2
// function filterEvenNumbers(array){
//     let Array = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2 == 0) {
//             Array.push(array[i]);
//         }
//     }
//     return Array;
// }
// let array = [2,3,4,5,6];
// let filteredEvenNumbers = filterEvenNumbers(array);
// console.log(filteredEvenNumbers);

// Question No. 3
// function replace_a_with_b(array){
//     let new_array = [];
//     for (let i = 0; i < array.length; i++) {
//         new_array.push(array[i].replaceAll('a','b'));
//     }
//     return new_array;
// }
// let array = ['mango','apple','pineapple','banana','orange'];
// let replaced_a_with_b = replace_a_with_b(array);
// console.log(replaced_a_with_b);

// Question No. 4
function mapArray(array,callBack){
    let new_arr = [];
    for (let i = 0; i < array.length; i++) {
        new_arr.push(callBack(array[i]));
    }
    return new_arr;
}
let numbers = [2,3,4,5,6];
let finalArray = mapArray(numbers,function(element)
{
    return element + 2;
});
console.log(finalArray); 

// Replace a with b next method using callback method
let a = ['mango','apple','pineapple','banana','orange'];
function replace_a_with_b2(array){
    function callBack(element){
        return element.replaceAll('a','b');
    }
    return mapArray(array,callBack);
}
console.log(replace_a_with_b2(a));;

