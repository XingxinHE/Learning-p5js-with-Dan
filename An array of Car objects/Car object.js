class Car {

  constructor(tempColor, tempXpos, tempYpos, tempXspeed) {
    this.color = tempColor;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.xspeed = tempXspeed;
  }

  show() {
    rectMode(CENTER);
    stroke(0);
    fill(this.color);
    rect(this.xpos, this.ypos, 20, 10);
  }

  move() {
    this.xpos = this.xpos + this.xspeed;
    if (this.xpos > width) {
      this.xpos = 0;
    }
  }

}
