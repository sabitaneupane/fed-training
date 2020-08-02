var myHeading = document.getElementById("heading1");
myHeading.innerHTML = "Hello World!"; // HTML
myHeading.style.color = "blue"; // CSS
myHeading.style.background = "red"; // CSS

var counter = 0; 
var myString = "";
function handleOnClick() {
  counter++;
  myString = myString + counter;
  var myParagraph = document.getElementById("my-paragraph").innerHTML = myString;
}
