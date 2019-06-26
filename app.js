'use strict';

var clicksAllowed = 10;
var timesClicked = [];
var timesDisplayed = [];

function ImageAnalytics(name, filepath) {
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
left.removeEventListener('click', getRandomImage);

var center = document.getElementById('img2');
center.addEventListener('click', getRandomImage);

var right = document.getElementById('img3');
right.addEventListener('click', getRandomImage);

function getRandomNumber() {
  return Math.floor(Math.random()*ImageAnalytics.imageDatabase.length);
}

function getRandomImage() {
  var randomArray = [];
  timesClicked ++;
  console.log(timesClicked, 'I was clicked');

  for (var i = 0; i < 3; i++) {
    randomArray.push(ImageAnalytics.imageDatabase[getRandomNumber()].filepath);

  }
  console.log(randomArray);
  console.log(getRandomNumber());
  left.src = randomArray[0];
  center.src = randomArray[1];
  right.src = randomArray[2];
  if(timesClicked === clicksAllowed){
    left.removeEventListener('click', getRandomImage);
    center.removeEventListener('click', getRandomImage);
    right.removeEventListener('click', getRandomImage);
    
  }
}

getRandomImage();

/////////////////////////////////////////
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }]
  },

  // Configuration options go here
  options: {}
});
