//to change sth in the canvas and the header
//we have to make the canvas and the header become a variable

var theCanvas;
var h1;
var theButton;
var bgColor;

function setup() {

  //create the canvas
  theCanvas = createCanvas(400, 400);

  //create the header; use the function 'createElement'
  h1 = createElement("h1", "I love my darling Li Peidie.")

  //create the button
  theButton = createButton("Click me and change the background color");

  bgColor = 220;


  theButton.mousePressed(changeCol);

  //change their location
  //one important thing!!  what happened in the 'function draw' , their location
  //is relative to the canvas
  //BUT!!! the location of canvas and the header are relative to the page! the web page
  theCanvas.position(800, 400);
  h1.position(200, 200);
}

//create the change color function
function changeCol() {
  bgColor = random(255);
}

function draw() {

  background(bgColor);
  fill(20);
  noStroke();
  ellipse(width / 2, height / 2, 66, 66);
}
