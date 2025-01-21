const decreasebtn = document.getElementById("decrease");
const increasebtn = document.getElementById("increase");
const resetbtn = document.getElementById("reset");
const nobtn = document.getElementById("nu");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");
const result = document.getElementById("h3");

let count = 0;

// Decrease button functionality
decreasebtn.onclick = function () {
  count--;
  nobtn.textContent = count;
};

// Increase button functionality
increasebtn.onclick = function () {
  count++;
  nobtn.textContent = count;
};

// Reset button functionality
resetbtn.onclick = function () {
  count = 0;
  nobtn.textContent = count;
};

// Add button functionality
add.onclick = function () {
  const value1 = parseFloat(no1.value) || 0; // Convert to number, default to 0 if invalid
  const value2 = parseFloat(no2.value) || 0;
  result.textContent = value1 + value2;
};

// Subtract button functionality (if required)
subtract.onclick = function () {
  const value1 = parseFloat(no1.value) || 0;
  const value2 = parseFloat(no2.value) || 0;
  result.textContent = value1 - value2;
};