let a = prompt("Enter first number");

let b = prompt("Enter second number");
if (isNaN(a) || isNaN(b)) {
  alert("Please enter a valid number");
}
let sum = a + b;

console.log("The sum is: ", sum);
