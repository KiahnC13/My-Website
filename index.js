// console.log("Yolo!!!");
// window.alert("This is in alert!")
const pi = 3.14
let circumference;

document.getElementById("submit").onclick = function() {
  let radius = document.getElementById("Input").value;
  circumference = (pi*(radius * 2));
  window.alert(circumference);
}


