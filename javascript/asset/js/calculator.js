var a = 20, b = 5;
function calculate(operator) {
  var cal = document.getElementById("calculator-value");
  if (operator === "+") {
    cal.innerHTML = a + b;
  } else if (operator === "-") {
    cal.innerHTML = a - b;
  } else if (operator === "*") {
    cal.innerHTML = a * b;
  } else {
    cal.innerHTML = a / b;
  }
}