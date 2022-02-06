
// ASYNCHRONOUS NATURE OF JAVASCRIPT

// console.log('Prakash')
// setTimeout(() => {
//     console.log('Gharti');
// }, 5000);
// console.log('Magar');

// Promise

// let promise = new Promise(function(resolve , reject){
//     setTimeout(() => {
//         resolve('Problem Solved.');
//     }, 1000);
// })

// let promise = new Promise(function(resolve , reject){
//     setTimeout(() => {
//         // resolve('Yeah solved.')
//         reject(new Error('Oh no! Problem not solved.'));
//     }, 1000);
// })
// console.log(promise);

// promise.then(function(result){
//     console.log(result);
// },function(error){
//     console.log(error);
// })


// function asyncJS(value){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             if (value > 2) {
//                 // resolve('Yes!! Our answer is right.🤭🤭🤭')
//                 resolve(value + 3)
//             }else{
//                 reject(new Error('Oh no! Our answer is wrong.🤔🤔'));
//             }
//         }, 3000);
//     })
// }
// asyncJS(5).then(function(result){
//     console.log('First Result ',result);
//     // return result + 4;
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             if (result > 7) {
//                 // resolve('Yes!! Our answer is right.🤭🤭🤭')
//                 resolve(result + 4)
//             }else{
//                 reject(new Error('Oh no! Our answer is wrong.🤔🤔'));
//             }
//         }, 3000);
//     })
// }).then(function(result){
//     console.log('Second Result ',result);
// }).catch(function(error){
//     console.log(error);
// });
// let div = document.createElement('div')
// let titles = document.createElement('h2');
// let bodies = document.createElement('p');
// titles.innerHTML = 'Hello'
// document.body.appendChild(titles)
fetch('https://jsonplaceholder.typicode.com/posts')  //fetches any link for data and returns a promise
.then(function(response){
    return response.json()
})
.then(function(posts){
    // console.log(posts); //Returns JS object/Array
    posts.forEach(element => {
        let post_div = document.createElement('div')
        post_div.classList.add('posts')
        let title = document.createElement('h2');
        title.classList.add('title')
        let body = document.createElement('p');
        body.classList.add('body')
        title.innerText = element.title;
        body.innerText = element.body;
        // console.log(body)
        post_div.appendChild(title)
        post_div.appendChild(body)
        document.body.appendChild(post_div)
    });
})
.catch(function(error){
        console.log(error);
    })







