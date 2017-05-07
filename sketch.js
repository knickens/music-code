var mysound;
var kiRed = 200;
kiGreen = 200;
kiBlue = 200; 
var speedx = 4;
var speedy = 4;
var x = 50;
var y = 50;



function preload(){
    mysound = loadSound('js/losincontrol.mp3');
}


function setup(){
 createCanvas(600,600);  
 background(255);
 mysound.setVolume(0.1);
 kiBlue = random(0,255);
 kiGreen = random(0,255);
 kiBlue = random(0,255);
}

function draw(){
    kiBlue = random(0,255);
 kiGreen = random(0,255);
 kiBlue = random(0,255); 


 move();
 bottomRow(x);
 otherRow();

 
}


function mousePressed(){
     mysound.play();
}
 

function mouseReleased(){
    mysound.pause();
}


//function act(){
  //  if(mouseIsPressed){
   // mySound.play();    
 //   }
  //  else{
      //  mysound.pause();
   // }
//} 




function bottomRow(x){
   size = [10];
  for(var x = 50; x <= 450; x = x + 100){
    stroke(255,90);
    fill(kiBlue,kiGreen,kiRed,90);
    ellipse(x,y,75,75,50,50);
  }
 
}

function otherRow(y){
 size = [10];   
 for(var y = 50; y <= 450; y = y + 100){
    stroke(0,90);
    fill(kiBlue,kiGreen,kiRed,90);
    ellipse(x,y,75,75);
 }
}

function move(){
    if(mouseIsPressed){
        
    } y = y + speedy;
    x = x + speedx;
  if(y > height){
        y = 50 - height;
  }
 if(x > width){
   x = 50 - width;  
 } 
  
}