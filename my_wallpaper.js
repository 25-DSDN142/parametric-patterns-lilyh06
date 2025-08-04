//your parameter variables go here!
//topbird
let tBeakX1 = 125; //125
let tBeakY1 = 90; //90
let tBeakX2 = 125; //125
let tBeakY2 = 70; //70
let tBeakLengthX = 50; //50// 
let tBeakLengthY = 100;//100 //tilt
let beakTiltUpper = 60;//60
//lowerbird
let lBeakX1 = 75; //75// beak thinkness
let lBeakY1 = 140; //140//beak thickness
let lBeakX2 = 75; //75
let lBeakY2 = 120; //120
let lBeakLengthX = 150; //150 beak length
let lBeakLengthY = 110;//110 
let beakTiltLower = 150;//150
//head
let X = 125; //125
let Y = 75; //75

let eyeSize = 15; //15
let headSize = 50;//50 //changes to blue if over 50
let neckSize = 15;//15

let beakColourChange = 0;//0=purple 1=blue 2=orange 3=brown // also controls inner eye
let neckColourChange = 0;//0=purple  1=orange 2=brown else=blue
let lineColourChange = 0;//0=purple 1=blue 2=orange else=brown
let cloud1ColourChange = 0;//0=purple 1=blue 2=orange else=brown // lower
let cloud2ColourChange = 0;//0=purple 1=blue 2=orange else=brown // upper
let neckLines = 0;// 0=orange 1=purple 2=blue
let ringColourChange = 0;//0=orange 1=blue 2=purple else=brown


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;//50
}

function wallpaper_background() {
  background(232, 126, 21); //
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 angleMode(DEGREES)
 let myPurple = color(105, 23, 66);
 let myBrown = color(173, 64, 0);
 let myOrange = color(232, 126, 21);
 let myBlue = color(61, 94, 166);

//NECK
 noStroke()
 fill(105, 23, 66)//purple
  if(neckColourChange == 0){
    fill(myPurple);
  }
    else if(neckColourChange==1){
    fill(myOrange);
  }
   else if(neckColourChange==2){
    fill(myBrown);
  }
  else{
   fill(myBlue);
  }
 noStroke();
 rect(120,70,80,neckSize);// top bird's neck, right side
 rect(0,70,45,neckSize);// top bird's neck, left side
 rect(0,120,80,neckSize);// lower bird's neck
 triangle (44.8,70,44.8,85,80,80);//top bird's neck END
 rect(150,120,51,neckSize);//lower bird neck extension
 triangle(150.9,120,120,130,150,135);

//BEAK
 noStroke();
 fill(105, 23, 66)//purple
  if(beakColourChange == 0){
    fill(myPurple);
  }
  else if(beakColourChange==1){
    fill(myBlue);
  }
   else if(beakColourChange==2){
    fill(myOrange);
  }
  else{
   fill(myBrown);
  }
 triangle (tBeakX1,tBeakY1,tBeakX2,tBeakY2,tBeakLengthX,beakTiltUpper);//beak top, top bird
 triangle (tBeakX1,tBeakY1,tBeakX2,tBeakY2,tBeakLengthX,tBeakLengthY);//beak bottom, top bird
 noStroke();
 fill(105, 23, 66);//purple

 if(beakColourChange == 0){
    fill(myPurple);
  }
  else if(beakColourChange==1){
    fill(myBlue);
  }
    else if(beakColourChange==2){
    fill(myOrange);
  }
  else{
   fill(myBrown);
  }
 triangle (lBeakX1,lBeakY1,lBeakX2,lBeakY2,lBeakLengthX,lBeakLengthY);//beak top, lower bird
 triangle (lBeakX1,lBeakY1,lBeakX2,lBeakY2,lBeakLengthX,beakTiltLower);//beak bottom, lower bird
 
//HEAD + EYE
 if(headSize>50){fill(74, 117, 186);}//blue
 else{fill(105, 23, 66)}
 noStroke();
 ellipse(X,Y,headSize);                //top head
 ellipse(X-50,Y+50,headSize);           //lower head 

 if(eyeSize>15){fill(130, 195, 232);}
 else{fill(232, 126, 21)}
 ellipse(X,Y,eyeSize+10);                 //eyeball 

 if(beakColourChange == 0){
    fill(myPurple);
  }
 else if(beakColourChange==1){
    fill(myBlue);
  }
 else{
   fill(myBrown);
  }
 ellipse (X,Y,eyeSize);                 //inner eye
 strokeWeight(2);
 noFill();

  if(eyeSize>15){fill(130, 195, 232);}//blue
 else{fill(232, 126, 21)}
 ellipse(X-50,Y+50,eyeSize+10);         //eyeball

 if(beakColourChange == 0){
    fill(myPurple);
  }
 else if(beakColourChange==1){
   fill(myBlue);
  }
 else{
   fill(myBrown);
  }
 ellipse(X-50,Y+50,eyeSize);           //inner eye
 
 if(eyeSize>15){stroke(130, 195, 232);}//blue
 else{stroke(232, 126, 21)}//orange
 noFill();
 
 if(ringColourChange == 0){
    stroke(myOrange);
  }
 else if(ringColourChange==1){
    stroke(myBlue);
  }
   else if(ringColourChange==2){
    stroke(myPurple);
  }
 else{
   stroke(myBrown);
  }
 ellipse(X,Y,eyeSize+16);              //top bird eye ring
 ellipse(X-50,Y+50,eyeSize+16);        //bottom bird eye ring

//LINES
 if(neckLines==0){ stroke(232, 126, 21);//orange
  } 
 else if(neckLines==1){
    stroke(myPurple);
  }
 else{stroke(myBlue);
 }
 
 line (176,84,190,70);//rightline
 line (166,84,180,70);//middleline
 line (156,84,170,70);//leftline
 
 if(lineColourChange == 0){
    stroke(myPurple);
  }
 else if(lineColourChange==1){
    stroke(myBlue);
  }
 else if(lineColourChange==2){
    stroke(myOrange);
  }
 else{
   stroke(myBrown);
  }
 line(191,69,200,60);//rightline by neck
 line(181,69,200,50);//middleline by neck
 line(171,69,200,40);//leftline by neck

 line(0,40,40,0);//leftline top corner
 line(0,50,50,0);//middleline top corner
 line(0,60,60,0);//rightline bottom corner

 line(160,200,180,180);//rightline bottom corner
 line(150,200,178,172);//middleline bottom corner
 line(140,200,168,172);//leftline bottom corner

//CLOUD
 noStroke()
 if(cloud1ColourChange == 0){
    fill(myPurple);
  }
 else if(cloud1ColourChange==1){
    fill(myBlue);
  }
 else if(cloud1ColourChange==2){
    fill(myOrange);
  }
 else{
   fill(myBrown);
  }
 arc(165, 185, 60, 20, 180, 0);//cloud base
 ellipse(175,175,15);//right top of bottomcloud
 ellipse(160,172,17);//middle top of bottomcloud
 ellipse(150,175,10);//left top of bottomcloud

 if(cloud2ColourChange == 0){
    fill(myPurple);
  }
 else if(cloud2ColourChange==1){
    fill(myBlue);
  }
 else if(cloud2ColourChange==2){
    fill(myOrange);
  }
 else{
   fill(myBrown);
  }
 arc(165, 25, 60, 20, 180, 0);//cloud base
 ellipse(170,15,15);//right top of bottomcloud
 ellipse(155,12,17);//middle top of bottomcloud
 ellipse(146,16,10);


}







function chair(){
 //rect(40 ,40, rect_width, rect_height);
  //mine
  noStroke()
  fill (219, 106, 7);
  quad (75, 100, 125, 100, 140, 125, 60, 125);//seat?
  fill (191, 64, 10)
  rect (75,50,50,50);//back
  rect (60,125,10,50)//left leg
  rect (130,125,10,50)//right leg

}

function eye(){
   //put at top
   //mine
let eyeX = 100
let innereyeX = 100
let irisX = 100
let blinkEye = 60   //smallest is 40, largest 100 (60 best)
//test

//background  background(22, 102, 168)

let eyeY = 100
let innereyeY = 100
let irisY = 100
  noStroke();
  fill(166, 215, 255);
  ellipse(eyeX,eyeY,100,blinkEye,);//eyeball

  fill(76, 143, 199);
  ellipse(innereyeX,innereyeY,40,40);//inner blue
  fill (0);
  ellipse(irisX,irisY,20,20);//iris?

  triangle(95,65,105,65,100,50)
  triangle(63,75,75,70,65,60)
  triangle(125,70,135,75,137,60)

  triangle(130,90,150,100, 1)
}