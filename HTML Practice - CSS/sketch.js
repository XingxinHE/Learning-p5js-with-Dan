var para;
var theSlider;
var typeZone;

function setup(){

  //create a paragraph
  para=createP("My girlfriend is Li Peidie.");


//create a slider
  theSlider=createSlider(10,100,20);

//create a input text zone
  typeZone=createInput("Type sth here.");

//if I input sth into the slider which is drag the slider, the function changeParaSize happened
theSlider.input(changeParaSize);

//if I type sth in the typezone, and the function happened
typeZone.input(showTheText);

}

//what is the function when the slider changeParaSize
//it said'para.style', which change the style of the paragraph
//the secound parameter must be xx pt;
//so! how much the value of the slider. import it , and combine to the pt
//now it can control the font size
function changeParaSize(){
  para.style("font-size",theSlider.value()+"pt");
}


//same as followed; when you input sth in the typeZone, this function happened
//para.html means changed the element of the HTML which is the paragraph right now
//how?  change it into the value of the typeZone which is the text you type!!
function showTheText(){
  para.html(typeZone.value());
}
