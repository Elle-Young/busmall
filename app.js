'use strict';

function ImageAnalytics(name, filepath, displayed, clicked) {
  this.name = name;
  this.filepath = filepath;
  this.displayed = 0;
  this.clicked = 0;
  ImageAnalytics.imageDatabase.push(this);
}

ImageAnalytics.imageDatabase = [];

new ImageAnalytics('R2D2 Bag', 'images/bag.jpg', 0, 0);
new ImageAnalytics('Banana Slicer', 'images/banana.jpg', 0, 0);
new ImageAnalytics('Bathroom Screen', './images/bathroom.jpg', 0, 0);
new ImageAnalytics('Yellow Boots', './images/boots.jpg', 0, 0);
new ImageAnalytics('Breakfast Toaster', './images/breakfast.jpg', 0, 0);
new ImageAnalytics('Delicious Meatball Gum, Yum!', './images/bubblegum.jpg', 0, 0);
new ImageAnalytics('Gorgeous Red Chair', './images/chair.jpg', 0, 0);
new ImageAnalytics('Cthulhu Eats a Guy!', './images/cthulhu.jpg', 0, 0);
new ImageAnalytics('Duck Dog Muzzle', './images/dog-duck.jpg', 0, 0);
new ImageAnalytics('YUMMY dragon meat', './images/dragon.jpg', 0, 0);
new ImageAnalytics('Office Cutlery', './images/pen.jpg', 0, 0);
new ImageAnalytics('Doggie Housework Helper', './images/pet-sweep.jpg', 0, 0);
new ImageAnalytics('Pizza Slicer', './images/scissors.jpg', 0, 0);
new ImageAnalytics('Sleep With the Fishes', './images/shark.jpg', 0, 0);
new ImageAnalytics('Put Baby to WORK', './images/sweep.png', 0, 0);
new ImageAnalytics('Smells Worse Inside', './images/tauntaun.jpg', 0, 0);
new ImageAnalytics('You\'re a Monster if You Eat This', './images/unicorn.jpg', 0, 0);
new ImageAnalytics('Slither', './images/usb.gif', 0, 0);
new ImageAnalytics('Not Useless at ALL', './images/water-can.jpg', 0, 0);
new ImageAnalytics('Stylish', './images/wine-glass.jpg', 0, 0);

console.log(ImageAnalytics.imageDatabase);

var left = document.getElementById('img1');
img1.addEventListener('click', getRandomImage);

var center = document.getElementById('img2');
img2.addEventListener('click', getRandomImage);

var right = document.getElementById('img3');
img3.addEventListener('click', getRandomImage);

function getRandomNumber() {
  return Math.floor(Math.random()*ImageAnalytics.imageDatabase.length);
}

function getRandomImage() {
  var randomArray = [];

  for (var i = 0; i < 3; i++) {
    randomArray.push(ImageAnalytics.imageDatabase[getRandomNumber()].filepath);
  }

  console.log(getRandomNumber());
  left.src = randomArray[0];
  center.src = randomArray[1];
  right.src = randomArray[2];
}



//Stop the randomImage generator from duplicating two of the sames images in one set
// function nonDuplication(){
// var emptyArray = [];
// while (var i = 0; i < 6; i++);
//   push(ImageAnalytics.imageDatabase);
//   if (i > 6);
//   return ?
// }

//keep track of, and then end the click game at 25 selections
while ('click' < 25) {
 for (var i = 0, i <= 25; i++);
  push(ImageAnalytics.imageDatabase);
  if('click' > 25)
    return ("results")
}
getRandomImage();


