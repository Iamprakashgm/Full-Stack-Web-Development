//Local storage

// localStorage.Name = "Prakash Gharti Magar";
// localStorage.Age = 22;
// localStorage.Address = "Rolpa";
// localStorage.Level = "Bachelor of Engineering";
// localStorage.Faculty = "Undergraduate Geomatics Engineering";

// JSON OBJECT
console.log(JSON);
let student = {
  Name: "Prakash Gharti Magar",
  Age: 22,
  Address: "Rolpa",
  Level: "Bachelor of Engineering",
  Faculty: "Undergraduate Geomatics Engineering",
};

let convertIntoJSONstring = JSON.stringify(student); //converts into json string
console.log(convertIntoJSONstring);

let convertJSONintoObject = JSON.parse(convertIntoJSONstring);
console.log(convertJSONintoObject, typeof convertJSONintoObject);
