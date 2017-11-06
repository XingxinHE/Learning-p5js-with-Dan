//Create an array
//this the syntax of p5js
let xpos=[];
let ypos=[];

function setup() {
  createCanvas(480, 270);

  //ATTENTION!!! Instead of declare the length of the array on the top
  //Now we declare the length in function setup!!!
  for (var i = 0; i < 50; i ++ ) {
    xpos[i] = 0;
    ypos[i] = 0;
  }
}

function draw() {
  background(255);

  //'int i' became 'var i'
  for (var i = 0; i < xpos.length-1; i ++ ) {
    // Shift all elements down one spot.
    // xpos[0] = xpos[1], xpos[1] = xpos = [2], and so on. Stop at the second to last element.
    xpos[i] = xpos[i+1];
    ypos[i] = ypos[i+1];
  }

  // New location
  xpos[xpos.length-1] = mouseX;
  ypos[ypos.length-1] = mouseY;

  // Draw everything
  for (var i = 0; i < xpos.length; i ++ ) {

     //Nothing change
    noStroke();
    fill(255-i*5);
    ellipse(xpos[i],ypos[i],i,i);
  }
}
