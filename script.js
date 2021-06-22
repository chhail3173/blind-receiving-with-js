let taskPannels = document.getElementsByClassName("expandable");
let rtInput = document.querySelector(".rt--input");
let drInput = document.querySelector(".dr--input");
let btn = document.querySelectorAll(".completeBtn");
let saveBtn = document.querySelector(".saveBtn");
let receiveBtn = document.querySelector(".receiveBtn");
let cc = document.querySelectorAll(".content");

let allTasksData = {};



// firstly load record tracking task panel
function loadTask() {
  document.getElementsByName("scan").forEach(function (node) {
    node.addEventListener("input", allTaskPannel);
  });
  document.getElementsByName("reason").forEach(function (node) {
    node.addEventListener("input", allTaskPannel);
  });
  colapsePanel();

}

// toggle all taskPannels 
function colapsePanel() {
  for (let value of taskPannels) {
    console.log(value.classList);
    value.addEventListener("click", function () {
      let content = this.nextElementSibling;
      content.classList.toggle("hidden");
      // if (content.style.display === "block") {
      //   content.style.display = "none";
      // } else {
      //   content.style.display = "block";
      // }
       })
    };  
}


function allTaskPannel() {
  document.querySelector(".rt--btn").disabled = false;
  document.querySelector(".dr--btn").disabled = false;
  // all complete button events
  btn.forEach((v, i) => {
    if (i === 0) {
      v.addEventListener("click", function () {

        // removing and adding classes for toggle 
        document.querySelector(".cd--content").classList.remove("hidden");
        document.querySelector(".rt--content").classList.add("hidden");
        document.querySelector(".rt--btn").disabled = true;
        document.querySelector(".rt--input").disabled = true;

        // remove glass
        document.querySelector(".rt--glass").classList.remove("far");
        document.querySelector(".rt--glass").classList.remove("fa-hourglass");

        // add complete icon
        document.querySelector(".rt--glass").className =
          "fas fa-check-circle glassColor";

          // get data 
          allTasksData['scan'] =  document.querySelector(".rt-scan").value;

      });
    } else if (i === 1) {
      v.addEventListener("click", function () {

        // removing and adding classes for toggle 
        document.querySelector(".cd--content").classList.add("hidden");
        document.querySelector(".ud--content").classList.remove("hidden");
        v.disabled = true;
        // remove glass
        document.querySelector(".cd--glass").classList.remove("far");
        document.querySelector(".cd--glass").classList.remove("fa-hourglass");

        // // add complete icon
        document.querySelector(".cd--glass").className =
          "fas fa-check-circle glassColor";

          // get data 
          allTasksData['firstName'] =  document.querySelector(".cd-fname").value;
          allTasksData['lastName'] =  document.querySelector(".cd-lname").value;
          allTasksData['address1'] =  document.querySelector(".cd-add1").value;
          allTasksData['address2'] =  document.querySelector(".cd-add2").value;
          allTasksData['city'] =  document.querySelector(".cd-city").value;
          allTasksData['state'] =  document.querySelector(".cd-state").value;
          allTasksData['zip'] =  document.querySelector(".cd-zip").value;
          allTasksData['phone'] =  document.querySelector(".cd-phone").value;
          allTasksData['sysModel'] =  document.querySelector(".cd-sys").value;
          allTasksData['root'] =  document.querySelector(".cd-root").value;
      });
    } else if (i === 2) {
      v.addEventListener("click", function () {

        // removing and adding classes for toggle 
        document.querySelector(".ud--content").classList.add("hidden");
        document.querySelector(".dr--content").classList.remove("hidden");
        v.disabled = true;
        // remove glass
        document.querySelector(".ud--glass").classList.remove("far");
        document.querySelector(".ud--glass").classList.remove("fa-hourglass");

        // // add complete icon
        document.querySelector(".ud--glass").className =
          "fas fa-check-circle glassColor";

          // get data 
          allTasksData['partNum'] =  document.querySelector(".ud-part").value;
          allTasksData['serial'] =  document.querySelector(".ud-serial").value;
          allTasksData['bcn'] =  document.querySelector(".ud-bcn").value;
      });
    } else if (i === 3) {
      v.addEventListener("click", function () {

        // removing and adding classes for toggle 
        document.querySelector(".dr--content").classList.add("hidden");
        v.disabled = true;
        // remove glass
        document.querySelector(".dr--glass").classList.remove("far");
        document.querySelector(".dr--glass").classList.remove("fa-hourglass");

        // // add complete icon
        document.querySelector(".dr--glass").className =
          "fas fa-check-circle glassColor";
          
          // get data 
          allTasksData['reason'] =  document.querySelector(".dr-reason").value; 
     
          // enable receive button 
          receiveBtn.disabled = false;
      });
    }
  });

  // if input field of record tracking is empty disabled complete button 
  if (!rtInput.value) {
    document.querySelector(".rt--btn").disabled = true;
  }

  if (!drInput.value) {
    document.querySelector(".dr--btn").disabled = true;
  }
}

// save tasks
function saveTaskPanels() {
  alert("Save Succesfully!");
}

// receive tasks 
function receiveTaskPanel() {
  console.log(allTasksData);
  location.reload();
}

// save and receive task buttons 
saveBtn.addEventListener("click", saveTaskPanels);
receiveBtn.addEventListener("click", receiveTaskPanel);


// call the all taskPannels 
loadTask();
