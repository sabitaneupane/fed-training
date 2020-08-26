function handleOnSubmit(event) {
  event.preventDefault();

  var userDetailsObject = {
    firstname: document.getElementById('firstname').value,
    lastname: document.getElementById('lastname').value,
    age: document.getElementById('age').value,
    gender: getGenderValue(),
    educationLevel: getEducationLevelValue(),
    interest: getInterestValue(),
  }
  console.log(userDetailsObject);
}

function getGenderValue() {
  var inputElements = document.getElementsByName('gender');
  for (var i = 0; inputElements[i]; i++) {
    if (inputElements[i].checked) {
      return inputElements[i].value;
    }
  }
}

function getEducationLevelValue() {
  var inputElements = document.getElementById('educationLevel');
  for (var i = 0; inputElements[i]; i++) {
    if (inputElements[i].selected) {
      return inputElements[i].value;
    }
  }
}

function getInterestValue() {
  var interestData = [];
  var inputElements = document.getElementsByName('interest');
  for (var i = 0; inputElements[i]; i++) {
    if (inputElements[i].checked) {
      interestData.push(inputElements[i].value);
    }
  }
  return interestData;
}
