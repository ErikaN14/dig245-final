/* javascript */

// TO:DO:
//   - Add a submit button for user to click after they type their name
//   - Complete functions needed (focus on score function)


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
let tasksCompleted = getTasks(); // array of ids
let tasksToDisplay = []; // task objects from the master list
console.log("tasksCompleted", tasksCompleted);

async function updateTasksToDisplay() {
  tasksCompleted = getTasks();
  tasksToDisplay = [];

  // first time visit
  for (let i = 0; i < taskListMaster.length; i++) {
    if (!tasksCompleted || !tasksCompleted.includes(taskListMaster[i].id)) {
      tasksToDisplay.push(taskListMaster[i]);
    }
    console.log("updateTasksToDisplay()", tasksToDisplay);
    // only allows 3
    if (tasksToDisplay.length >= 3) break;
  }
}
(async function () {
  await updateTasksToDisplay();
  showTasks();
})();

// FUNCTIONS

function getTasks() {
  // get and deserialize the object
  return JSON.parse(localStorage.getItem("_tasksCompleted")) || [];
}

function setTasks(list) {
  // serialize and save an object
  localStorage.setItem("_tasksCompleted", JSON.stringify(list));
}

function showTasks() {
  console.log("showTasks()", tasksToDisplay);
  let str = "";
  for (let i = 0; i < tasksToDisplay.length; i++) {
    //Check box code from W3 Schools
    let checked = "";
    if (tasksCompleted.includes(tasksToDisplay[i].id)) {
      checked = "checked";
    }
    str += `<label class="container">
            <input type="checkbox" ${checked} data-id="${tasksToDisplay[i].id}" class="checkbox">
            ${tasksToDisplay[i].name}
            </label>
            `;
  }
  document.querySelector(".taskList").innerHTML = str;
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("checkbox")) {
    // console.log(e.target.classList.contains("checkbox"));
    //   console.log("a checkbox was clicked");
    if (e.target.checked == true) {
      //   console.log("a checkbox IS TRUE");

      // get the id
      let id = Number(e.target.dataset.id);
      console.log(taskListMaster[id]);

      if (tasksCompleted.includes(id)) {
        return;
      }

      // update local
      tasksCompleted.push(id);

      // update localstorage
      setTasks(tasksCompleted);

      // update score
      setScore(tasksCompleted);

      setTimeout(async function () {
        // update display
        await updateTasksToDisplay();
        showTasks();
      }, 250);
    }
  }
});

let score = 0;
function setScore(tasksCompleted) {
  // for(let i=)
}