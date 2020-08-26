// var a = 20, b = 5;


function calculate(operator) {
  var a = Number(document.getElementById("num1").value);
  var b = Number(document.getElementById("num2").value);

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