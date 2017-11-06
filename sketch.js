//create an array
var gray = [];

function setup() {
  createCanvas(240, 120);

  //declare the length of the array; Initialize them a random value
  for (var i = 0; i < width; i++) {
    gray[i] = random(0, 255);
  }
}

function draw() {

  background(204);
  for (var i = 0; i < gray.length; i++) {
    //different stroke color
    stroke(gray[i]);

    //from 0 to width, draw lines!! many many!! like a bar code
    line(i, 0, i, height);
  }
}
