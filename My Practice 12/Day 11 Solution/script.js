/**
 * Create a form
 * Create an empty array
 * Form have 2 fields name and age
 * When form is submitted, create a object with keys name and age
 * Push the object to the array
 * Save the array to localStorage
 * Load the saved array on page init
 */

let personlist = [];
if (localStorage.personlist) {
  personlist = JSON.parse(localStorage.personlist);
}
let form = document.getElementById("form");
let list = document.getElementById("list");
let error = document.getElementById("error");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(form.elements);
  let person = {
    key: form.elements.key.value,
    name: form.elements.name.value,
    age: form.elements.age.value,
  };
  //check if the key already exists or not
  let index = personlist.findIndex((element) => {
    return element.key == person.key;
  });
  //if key exists dont allow to add it on the list
  if (index == -1) {
    personlist.push(person);
    renderList();
    localStorage.personlist = JSON.stringify(personlist);
    form.reset();
  } else {
    error.innerText = `The key ${person.key} is already exists so please try another key`;
    form.reset();
  }
});

function renderList() {
  list.innerHTML = "";
  personlist.forEach((person) => {
    let listItem = document.createElement("li");
    listItem.innerText = `Name : ${person.name} Age: ${person.age} \n Added to the list.`;
    let deletebutton = document.createElement("button");
    deletebutton.innerText = "Delete Item";
    deletebutton.addEventListener("click", function () {
      personlist = personlist.filter((people) => {
        return people.key !== person.key;
      });
      renderList();
      localStorage.personlist = JSON.stringify(personlist);
    });
    listItem.appendChild(deletebutton);
    list.appendChild(listItem);
  });
}

renderList();
