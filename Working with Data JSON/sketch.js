var rawData;


function preload() {
  rawData = loadJSON("birds_north_america.json");
}

function setup() {
  noCanvas();

for(var i =0; i<rawData.birds.length;i++){
  createElement("h1",rawData.birds[i].family);
  for(var j=0; j<rawData.birds[i].members.length; j++){
  createDiv(rawData.birds[i].members[j]);
  }
}
}
