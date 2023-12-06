/* javascript */

//Retrieving Data from form
let fname = document.querySelector("#fname").value;

//Defining the form being used
myForm.addEventListener("submit", (event) => {
  // prevent default behavior of form
  event.preventDefault();

  // create variables for all items
  let fname = this.fname.value;
  localStorage.setItem("fname", fname);
  document.querySelector(".fname").innerHTML = localStorage.getItem("fname");
});

// example object (use this example to set up tasks page)
let taskList = [
  {
    name: "Replace plastic water bottle use with a reusable water bottle",
    status: false,
    id: 1,
    value: 5,
  },
  {
    name: "Bike or walk instead of drive somewhere",
    status: false,
    id: 2,
    value: 5,
  },
  { name: "Recycle any material you use", 
    status: false, 
    id: 3, 
    value: 5
  }
];
showTasks(".taskList", taskList);

// serialize and save an object
localStorage.setItem("_taskList", JSON.stringify(taskList));
// get and deserialize the object
let newTasks = JSON.parse(localStorage.getItem("_taskList"));
showTasks(".newTasks", newTasks);

function showTasks(newTasks, data) {
  let score = 0;
  let str = "";
  for (let i = 0; i < taskList.length; i++) {
    //Check box code from W3 Schools
    str += `
		<label class="container">
    <input type="checkbox" checked = false id="${data[i].id}">
    ${data[i].name}
	  </label>
		`;

    //Conditional to check if the checkbox is checked (make status true and increase score if checked)
    if((data[i].status == false) && (checkbox.checked == checked)){
      data[i].status = true;
      score += data[i].value;
      console.log(data[i].id);

    };
  }
  document.querySelector(newTasks).innerHTML = str;
}
