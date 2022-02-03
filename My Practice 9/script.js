
// DOM = Document Object Model    


// document.body.childNodes[1].childNodes[1].style.background = 'blue';
// document.body.childNodes[1].childNodes[1].nextElementSibling.style.background = 'red';

// document.body.childNodes[1].lastElementChild.lastElementChild.style.background = 'yellow';
// document.body.childNodes[1].lastElementChild.lastElementChild.firstElementChild.firstElementChild.style.color = 'red';
// document.body.childNodes[1].lastElementChild.lastElementChild.firstElementChild.nextElementSibling.firstElementChild.style.color = 'green';
// document.body.childNodes[1].lastElementChild.lastElementChild.lastElementChild.firstElementChild.style.color = 'blue';

// DOM Searching Methods
/**
 * qeurySelectorAll() //NodeList
 * querySelector()
 * getElementById()
 * getElementsByTagName() //HTML Collection===No forEach() Loop
 * getElementsByName()     //NodeList
 * getElementsByClassName() //HTML Collection
 * closest()
 * matches()
 */

// let listItems = document.querySelectorAll('li');
// console.log(listItems);
// let listItem = document.querySelector('li');
// console.log(listItem);

// let paragraph = document.getElementById('paragraph');
// paragraph.innerText = 'My Name is Prakash Gharti Magar.';
// // paragraph.innerHTML = '<h1>This is My Paragraph</h1>';

// let taglist = document.getElementsByTagName('li'); //Gives HTML Collection
// console.log(taglist);                        //We can't apply forEach() loop


// let tagname = document.getElementsByName('para');
// console.log(tagname);


// let heading = document.getElementsByClassName('test');
// console.log(heading);

// let closeElement = document.getElementById('paragraph');
// console.log(closeElement.closest('.test'))


// let element = document.getElementById('paragraph');
// console.log(element.classList);

// element.classList.add('paragraph1');
// console.log(element.classList);
// element.classList.add('paragraph2');
// console.log(element.classList);
// element.classList.remove('paragraph2');
// console.log(element.classList);


// Modifying Document

// let element = document.getElementById('paragraph');
// let heading = document.createElement('h1');
// heading.innerText = 'This is my JavaScript Heading.';

// element.append(heading); //after()
// element.prepend(heading); //before()
// element.replaceWith(heading);




