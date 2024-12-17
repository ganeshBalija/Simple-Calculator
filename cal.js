let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let div = document.getElementById("div");
let mul = document.getElementById("mul");
let ans = document.getElementById("ans");

add.addEventListener("click", function () {
  let result = Number(num1.value) + Number(num2.value);
  ans.textContent = "Result: " + result;
});

sub.addEventListener("click", function () {
  let result = parseInt(num1.value) - parseInt(num2.value);
  ans.textContent = "Result: " + result;
});

mul.addEventListener("click", function () {
  let result = parseInt(num1.value) * parseInt(num2.value);
  ans.textContent = "Result: " + result;
});

div.addEventListener("click", function () {
  if (num2.value === "0") {
    alert("Cannot divide by zero!");
    return;
  }
  let result = parseFloat(num1.value) / parseFloat(num2.value);
  ans.textContent = "Result: " + result;
});

// Clear button

let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  ans.textContent = "Result:";
});
