let cars =[];

function setup(){
  createCanvas(200,200);
  //smooth();

  for(var i=0; i<100; i++){
    cars[i]=new Car(color(i*2),0,i*2,i/20);
  }
}

function draw(){
  background(255);
  for(var i=0; i<cars.length; i++){
    cars[i].move();
    cars[i].show();
  }
}
