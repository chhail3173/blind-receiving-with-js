let taskPannels = document.getElementsByClassName("expandable");
let rtInput = document.querySelector(".rt--input");
let btn = document.querySelectorAll(".completeBtn");
let saveTasks = document.querySelector(".saveBtn");

// firstly load record tracking task panel
function loadTask() {
  document.getElementsByName("scan").forEach(function (node) {
    node.addEventListener("input", allTaskPannel);
  });
  colapsePanel();
}

function colapsePanel() {
  for (let value of taskPannels) {
    value.addEventListener("click", function () {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}

function allTaskPannel() {
  document.querySelector(".rt--btn").disabled = false;
  // all complete button events
  btn.forEach((v, i) => {
    if (i === 0) {
      v.addEventListener("click", function () {
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
      });
    } else if (i === 1) {
      v.addEventListener("click", function () {
        document.querySelector(".cd--content").classList.add("hidden");
        document.querySelector(".ud--content").classList.remove("hidden");
        v.disabled = true;
        // remove glass
        document.querySelector(".cd--glass").classList.remove("far");
        document.querySelector(".cd--glass").classList.remove("fa-hourglass");

        // add complete icon
        document.querySelector(".cd--glass").className =
          "fas fa-check-circle glassColor";
      });
    } else if (i === 2) {
      v.addEventListener("click", function () {
        document.querySelector(".ud--content").classList.add("hidden");
        document.querySelector(".dr--content").classList.remove("hidden");
        v.disabled = true;
        // remove glass
        document.querySelector(".ud--glass").classList.remove("far");
        document.querySelector(".ud--glass").classList.remove("fa-hourglass");

        // add complete icon
        document.querySelector(".ud--glass").className =
          "fas fa-check-circle glassColor";
      });
    } else if (i === 3) {
      v.addEventListener("click", function () {
        document.querySelector(".dr--content").classList.add("hidden");
        v.disabled = true;
        // remove glass
        document.querySelector(".dr--glass").classList.remove("far");
        document.querySelector(".dr--glass").classList.remove("fa-hourglass");

        // add complete icon
        document.querySelector(".dr--glass").className =
          "fas fa-check-circle glassColor";
      });
    }
  });

  if (!rtInput.value) {
    document.querySelector(".rt--btn").disabled = true;
  }
}

// save 
function saveTaskPanels() {
  alert("Save Succesfully!");
}

// save tasks 
saveTasks.addEventListener("click", saveTaskPanels);


// call the all taskPannels 
loadTask();
