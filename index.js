// Your code here


let dodger = document.querySelector("#dodger")

dodger.style.backgroundColor = "green";
dodger.style.left = "180px";
dodger.style.bottom = "0px";
dodger.style.right = "180px";

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

document.addEventListener("keydown", function(r) {
  if (r.key === "ArrowRight") {
     
     moveDodgerRight();
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
  let rightNum = dodger.style.right.replace("px", "")
  let right = parseInt(rightNum, 10)
  if (right >  0) {
    dodger.style.left = `${right + 2}px`;
  } 
}