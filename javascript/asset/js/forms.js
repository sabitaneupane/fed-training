function handleOnSubmit(event) {
  event.preventDefault();
  var formValue = document.userDetails;
  var myFormsObject = {
    firstname: formValue.elements[1].value,
    lastname: formValue.elements[2].value,
    age: formValue.elements[3].value,
    gender: formValue.elements[4].value,
    educationLevel: formValue.elements[5].value,
    interest: formValue.elements[6].value
  }

  var userDetailsObject = {
    firstname: document.getElementById('firstname').value,
    lastname: document.getElementById('lastname').value,
    age: document.getElementById('age').value,
    gender: document.getElementsByName('gender').value,
    educationLevel: document.getElementsByName('educationLevel').value,
    interest: document.getElementsByName('interest').value
  }

  console.log("data", myFormsObject, userDetailsObject);
}