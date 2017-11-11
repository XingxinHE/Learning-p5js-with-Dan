//this is the longitude and latitude
var lat;
var lon;

//import an image from mapbox api
var mapImg;

//the center point of the map image, I select Shanghai
var centerLat = 31.2304;
var centerLon = 121.4737;

//zoom level is how deep you scroll your mouse
var zoomLv = 2.5;

//the image resolution
var pixW = 1024;
var pixH = 512;

//the data from USGS
var earthquakesData;


function preload() {
  mapImg = loadImage('https://api.mapbox.com/styles/v1/mapbox/light-v9/static/' +
    centerLon + ',' + centerLat + ',' + zoomLv + '/' +
    pixW + 'x' + pixH +
    '?access_token=pk.eyJ1IjoibW9ycmlzZWhlIiwiYSI6ImNpdDZxdWJpMDAwMGIycG1mcGczbnhkaGsifQ.btHVUiQfBWsq4nMHS2sNbw')

  earthquakesData = loadStrings('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
}


//use web mercator formula to translate the longitude and latitude to pixel
//ATTETION! the formula use radians not degrees, so change it
function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoomLv);
  var b = lon + PI;
  return a * b;
}

//same as followed
function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoomLv);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}


function setup() {
  createCanvas(pixW, pixH);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapImg, 0, 0);

  for (var i = 1; i < earthquakesData.length; i++) {
    var data = earthquakesData[i].split(","); //the earthquakes data is csv, using split function
    var lat = data[1];
    var lon = data[2];

//这里详细说一下，因为MAG是指数级别的，也就是说MAG5其实是10倍大于MAG4，因此先让MAG呈正常数字比较大小
//然后开根号是因为，圆的面积是R的平方，为了抵消这个平方带来的值得差异，先开个根号
    var mag = data[4];
    mag = pow(10, mag);
    mag = sqrt(mag);

    //mag的最大值是10的10次方
    var magmax = sqrt(pow(10, 10));

//将直径map
    var diameter = map(mag, 0, magmax, 0, 1600);
    // var trans = map(mag,0,magmax,0,1000);

    var cx = mercX(centerLon);
    var cy = mercY(centerLat);

//这里是我搞不懂的地方，为什么要偏移画布中心然后这样才计算出正确的location
    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;
    if (x < -width / 2) {
      x += width;
    } else if (x > width / 2) {
      x -= width / 2;
    }
    stroke(208, 16, 76, 100);
    fill(208, 16, 76, 100);
    ellipse(x, y, diameter, diameter);
  }
  console.log(earthquakesData);
}
