
// DOM Events


// click-event
// let paragraph = document.getElementById('para');
// let counterstatus = 0;
// window.addEventListener('click', function(){
//     counterstatus++;
//     paragraph.innerText = `You have clicked ${counterstatus} times`;
//     // console.log('clicked')
// })
// let paragraph = document.getElementById('para');
// let button = document.getElementById('button');
// let counterstatus = 0;
// button.addEventListener('click', function(){
//     counterstatus++;
//     paragraph.innerText = `You have clicked ${counterstatus} times`;
// })

// let div = document.querySelector('.div1');
// let heading = document.getElementById('heading');
// div.addEventListener('click',function(){
//     heading.innerText = 'Click';            //click
// })

// // contextmenu event
// div.addEventListener('contextmenu',function(){
//     heading.innerText = 'contextmenu';        //right click
// })

// // mouseover event
// div.addEventListener('mouseover',function(){
//     heading.innerText = 'mouseover'; 
// })
// // mousedown event
// div.addEventListener('mousedown',function(){
//     heading.innerText = 'mousedown'; 
// })
// // mousemove event
// div.addEventListener('mousemove',function(){
//     heading.innerText = 'mousemove'; 
// })


// button.addEventListener('click', function(){
//     div.classList.toggle('red');
// })


// DOMContentLoaded event

// Bubbling and Capturing
// Bubbling: Propagation of event from child to parent
// to stop bubbling : use stopPropagation() method
// let div1 = document.getElementById('div1');
// let div2 = document.getElementById('div2');
// let div3 = document.getElementById('div3');
// let div4 = document.getElementById('div4');

// div1.addEventListener('click',function(event){
    //     console.log('div1');
//     event.target.style.background = 'navy';
// })
// div2.addEventListener('click',function(){
//     console.log('div2');
// })
// div3.addEventListener('click',function(){
//     console.log('div3');
// })
// div4.addEventListener('click',function(event){
//     console.log('div4');
//     event.stopPropagation();  //stopped for div4 event propagation
//     // console.log(event.target);  //finds the target
// })

// let para = document.getElementById('para');


// div1.addEventListener('click',function(event){
//     para.innerText = `You have clicked ${event.target.id}`;
// })
// div2.addEventListener('click',function(event){
//     para.innerText = `You have clicked ${event.target.id}`;
// })
// div3.addEventListener('click',function(event){
//     para.innerText = `You have clicked ${event.target.id}`;
// })
// div4.addEventListener('click',function(event){
//     para.innerText = `You have clicked ${event.target.id}`;
    // console.log('div4');
    // event.stopPropagation();  //stopped for div4 event propagation
    // console.log(event.target);  //finds the target
// })


//preventDefault() method


// let google = document.getElementById('google');
// google.addEventListener('click', function(event){
//     event.preventDefault();
//     let a = confirm('Do you want to open Google??');
//     if (a) {
//         window.open('https://google.com');
//     }
// })

//keyup event

// window.addEventListener('keyup', function(event){
//     console.log(event.key);
// })
// window.addEventListener('keyup', function(event){
//     console.log(event.code);
// })


let form = document.getElementById('form');
let errorlist = document.getElementById('errorlist');
form.addEventListener('submit', function(event){
    event.preventDefault();
    errorlist.innerHTML = '';
    let name = form.elements.name.value;
    let age = form.elements.age.value;
    let email = form.elements.email.value;
    let password = form.elements.password.value;
    function errorShow(errorValue){
        let errorListItem = document.createElement('li');
        errorlist.appendChild(errorListItem);
        errorListItem.innerText = errorValue;
    }
    if (name.length < 4) {
        errorShow('Name must have minimum 8 characters.');
    }
    
    // for email spit('@') 
    
    if (!email.includes('@')) {
        errorShow("E-mail must include '@' Sign");
    }
    if (!email.includes('.')) {
        errorShow("E-mail must include '.' Sign");
    }
    let emailsplitted = email.split('@');
    console.log(emailsplitted.length)

    let dotsplitted = email.split('.');
    if (emailsplitted.length != 2 || 
        dotsplitted.length !=2 || 
        emailsplitted[0].includes('.') || 
        dotsplitted[1].includes('@')) {
        errorShow('Must be a valid e-mail.');
    }
    if (password.length < 8) {
        errorShow('Password length must be of minimum 8 characters.');
    }
})






