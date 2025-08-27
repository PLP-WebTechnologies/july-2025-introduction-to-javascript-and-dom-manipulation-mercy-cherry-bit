// Part 1: Variables and Conditionals
let userName = "Guest";
let isMember = true;

if (isMember) {
  console.log("Welcome back, member!");
} else {
  console.log("Please sign up.");
}

// Part 2: Functions
function greetUser(name) {
  return "Hello, " + name + "!";
}

function multiplyNumbers(a, b) {
  return a * b;
}

// Test functions in console
console.log(greetUser("Alice"));
console.log(multiplyNumbers(4, 5));

// Part 3: Loops
let numbers = [1, 2, 3, 4, 5];

// Example 1: for loop
for (let i = 0; i < numbers.length; i++) {
  console.log("Number:", numbers[i]);
}

// Example 2: for...of loop
for (let num of numbers) {
  console.log("Square:", num * num);
}

// Part 4: DOM Interactions
// (1) Change text when button is clicked
document.getElementById("changeNameBtn").addEventListener("click", function () {
  userName = prompt("Enter your name:");
  document.getElementById("greeting").textContent = greetUser(userName);
});

// (2) Populate list dynamically
let list = document.getElementById("numbersList");
numbers.forEach(num => {
  let li = document.createElement("li");
  li.textContent = "Number " + num;
  list.appendChild(li);
});

// (3) Toggle background color
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});