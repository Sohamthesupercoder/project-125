var faded;
var happier;
function preload(){
faded =loadSound("Piano Alan Walker Faded Cover by Ducci No Copyright.mp3");
happier =loadSound("marshmello.mp3");
}
function setup(){
canvas =createCanvas(700,500);
canvas.position(300,300);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,0,700,500);
}