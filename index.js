// Your code here


let dodger = document.querySelector("#dodger")

dodger.style.backgroundColor = "green";
dodger.style.left = "180px";
dodger.style.bottom = "180px";
dodger.style.top = "180px";
dodger.style.right = "180px";

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    
    moveDodgerLeft();
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
     
     moveDodgerRight();
   }
});

document.addEventListener("keydown", function(t) {
  if (t.key === "ArrowUp") {
     moveDodgerUp();
   }
});
document.addEventListener("keydown", function(t) {
  if (t.key === "ArrowDown") {
     moveDodgerDown();
   }
});

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 2}px`;
  }
}

function moveDodgerRight () {
  let rightNum = dodger.style.left.replace("px", "")
  let right = parseInt(rightNum, 10)
  if (right < 380) {
    dodger.style.left = `${right + 2}px`;
  } 
}

function moveDodgerUp () {
  let topNum = dodger.style.top.replace("px", "")
  let top = parseInt(topNum, 10)
  if (top >  0) {
    dodger.style.top = `${top - 2}px`;
  } 
}

function moveDodgerDown() {
  let topNum = dodger.style.top.replace("px", "")
  let top = parseInt(topNum, 10)
  if (top >  0) {
    dodger.style.top = `${top + 2}px`;
  } 
}