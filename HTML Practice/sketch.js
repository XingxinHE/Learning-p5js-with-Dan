//to change sth in the canvas and the header
//we have to make the canvas and the header become a variable

var theCanvas;
var h1;

function setup(){

  //create the canvas
  theCanvas=createCanvas(400,400);

//create the header; use the function 'createElement'
  h1 = createElement("h1","I love my darling Li Peidie.")

//change their location
//one important thing!!  what happened in the 'function draw' , their location
//is relative to the canvas
//BUT!!! the location of canvas and the header are relative to the page! the web page
  theCanvas.position(800,400);
  h1.position(200,200);
}

function draw(){
  background(100);
  fill(20);
  noStroke();
  ellipse(width/2,height/2,66,66);
}
