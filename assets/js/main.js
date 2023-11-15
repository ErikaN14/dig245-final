/* javascript */

//Retrieving Data from form
let fname = document.querySelector("#fname").value;
let lname = document.querySelector("#lname").value;
console.log(fname);
// let userAge = document.querySelector("#age").value;

// store the data
let userName = localStorage.setItem('fname',fname);
//console.log(userName); //-> "Erika"


