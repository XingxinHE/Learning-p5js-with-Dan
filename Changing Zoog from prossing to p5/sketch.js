//let is a sort of var; in pr, we use Zoog zoog; which Zoog is an object also a
//data type in the mean time
//in js; all the data type we call are var and let;
//the difference between var and let is unfamiliar to me, but that doesnt matter
let zoog;

//instead of void setup, we say function setup
function setup() {

  //instead of size, we say createCanvas
  createCanvas(200, 200);
  //smooth();

  //calling the class is still the same
  zoog = new Zoog(100, 125, 60, 60, 16);
}

function draw() {
  background(255);

  //float factor --- var factor
  var factor = constrain(mouseX / 10, 0, 5);
  zoog.jiggle(factor);
  zoog.show();
}

class Zoog {
  //float x,y,w,h,eyeSize;
  //ATTENTION!!! We dont need the global value of a class any more!!!
  //instead!! we initialize the data in the constructor!!THE born place of the class!!

  //instead of Zoog(tempx...){}, we say constructor directly!
  //also, inside the (), it is the temp value which can pass in
  constructor(tempX, tempY, tempW, tempH, tempEyeSize) {

    //ATTENTION!!!all the global variables of the class must start
    //from this.  !! it's really important!!!
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
    this.eyeSize = tempEyeSize;
  }


  //also!!!apply a function inside a class, we do not use void jiggle or function jiggle
  // we just call it directly!!!
  jiggle(speed) {
    this.x = this.x + random(-1, 1) * speed;
    this.y = this.y + random(-1, 1) * speed;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  show() {
    ellipseMode(CENTER);
    rectMode(CENTER);

    for (var i = this.y - this.h / 3; i < this.y + this.h / 2; i += 10) {
      stroke(0);
      line(this.x - this.w / 4, i, this.x + this.w / 4, i);
    }

    //zoog's body
    stroke(0);
    fill(175);
    rect(this.x, this.y, this.w / 6, this.h);

    //zoog's head
    stroke(0);
    fill(255);
    ellipse(this.x, this.y - this.h, this.w, this.h);

    //zoog's eyes
    fill(0);
    ellipse(this.x - this.w / 3, this.y - this.h, this.eyeSize, this.eyeSize * 2);
    ellipse(this.x + this.w / 3, this.y - this.h, this.eyeSize, this.eyeSize * 2);

    //zoog's legs
    stoke(0);
    line(this.x - this.w / 12, this.y + this.h / 2, this.x - this.w / 4, this.y + this.h / 2 + 10);
    line(this.x + this.w / 12, this.y + this.h / 2, this.x - this.w / 4, this.y + this.h / 2 + 10);
  }
}
