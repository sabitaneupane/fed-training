var index = 0;
var imageList = [
  'https://cdn2.thecatapi.com/images/5lr.jpg',
  'https://cdn2.thecatapi.com/images/a8c.jpg',
  'https://cdn2.thecatapi.com/images/ui.jpg',
  'https://cdn2.thecatapi.com/images/xlHchdin5.jpg'
]
var imageLength = imageList.length;
var catImages = document.getElementById("cat-images");
var previousBtn = document.getElementById("previous-btn");
var nextBtn = document.getElementById("next-btn");
previousBtn.disabled = true;

// function previous() {
//   index--;
//   catImages.src = imageList[index];
//   previousBtn.disabled = false;
//   nextBtn.disabled = false;
//   if (index === 0) {
//     nextBtn.disabled = false;
//     previousBtn.disabled = true;
//   }
// }

// function next() {
//   index++;
//   catImages.src = imageList[index];
//   previousBtn.disabled = false;
//   nextBtn.disabled = false;
//   if (index === imageLength - 1) {
//     nextBtn.disabled = true;
//     previousBtn.disabled = false;
//   }
// }

function previous() {
  index--;
  catImages.src = imageList[index];
  previousBtn.disabled = index === 0 ? true : false;
  nextBtn.disabled = false;
}

function next() {
  index++;
  catImages.src = imageList[index];
  previousBtn.disabled = false;
  nextBtn.disabled = index === imageLength - 1 ? true : false;
}
