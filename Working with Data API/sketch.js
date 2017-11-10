//the data of weather after processing
var weatherData;

//deconstruct the website url to few pieces so I can handle it
var website = "http://api.openweathermap.org/data/2.5/weather?q=";
var unit = "&units=metric";
var apiKey = "&appid=3ae531c652f955e38742d5ddb543e444";

//the input HTML element
var input;



function setup() {
  createCanvas(400, 400);

  //assign the HTML button to a variable
  var button = select("#submit");
  //when user click the button 'callWeather' function will happen
  button.mousePressed(callWeather);

//assign the city name to the input
  input =  select("#city");


}

function callWeather(){
  var jsonURL = website+input.value()+apiKey+unit;
  loadJSON(jsonURL, getData);
}

function getData(data) {
  weatherData = data;
}

function draw() {
  background(200);
  if (weatherData) {
    ellipse(100,200,weatherData.main.temp,weatherData.main.temp);
    ellipse(300,200,weatherData.main.temp,weatherData.main.temp);
  }
}
