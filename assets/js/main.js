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






