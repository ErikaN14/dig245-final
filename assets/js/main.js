/* javascript */

//Retrieving Data from form
let fname = document.querySelector("#fname").value;
let lname = document.querySelector("#lname").value;
let userAge = document.querySelector("#age").value;


//Defining the form being used
myForm.addEventListener("submit", (event) => {

    // prevent default behavior of form
	event.preventDefault();

    // create variables for all items
	let fname = this.fname.value;
	let lname = this.lname.value;
    let userAge = this.age.value;

    localStorage.setItem('fname',fname);
    let userFirstName = localStorage.getItem("fname");
    console.log(userFirstName);


    localStorage.setItem('lname',lname);
    let userLastName = localStorage.getItem("lname");
    console.log(userLastName);

    localStorage.setItem('userAge',userAge);
    let age = localStorage.getItem("userAge");
    console.log(age);

    //Used to show fname value on webpage 
    var firstName = document.getElementById('content-holder');
    firstName.innerHTML = userFirstName; 


});

// // save primitive value
// localStorage.setItem("_a", 123);

// // example object 
// let tasks = [
// 	{ name: "Replace plastic water bottle use with a reusable water bottle", status: false },
// 	{ name: "Bike or walk instead of drive somewhere", status: true },
// 	{ name: "Recycle any material you use", status: false }
// ];
// showTasks(tasks);

// // serialize and save an object 
// localStorage.setItem("_tasks", JSON.stringify(tasks));
// // get and deserialize the object
// let newTasks = JSON.parse(localStorage.getItem("_tasks"));
// showTasks(newTasks);

// function showTasks(data) {
// 	let str = "";
// 	for (let i = 0; i < tasks.length; i++) {
// 		str += data[i].name + " - " + data[i].status + "<br>";
// 	}
// 	document.body.innerHTML += str;
// }







