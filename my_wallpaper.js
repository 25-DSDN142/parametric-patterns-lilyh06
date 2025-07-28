//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
//beak
let beakX1 = 125; //125// add additions in function
let beakY1 = 90; //90// add additions in function (size)
let beakX2 = 125; //125//
let beakY2 = 70; //110//
let beakLengthX = 50; //50//
let beakLengthY = 100;//100 & -40 from first line//TILT OF BEAK
//HEAD
//eye
let X = 125 //125//
let Y = 75 //100//
let eyeSize = 15 //15//25//30// 



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(232, 126, 21); //
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 //BIRD 1
  //NECK
 noStroke()
 fill(105, 23, 66)//purple
 rect(120,70,80,15)
 
 //BEAK
 noStroke()
 fill(105, 23, 66)//purple
 triangle (beakX1,beakY1,beakX2,beakY2,beakLengthX,beakLengthY-40)//beak top
 triangle (beakX1,beakY1,beakX2,beakY2,beakLengthX,beakLengthY)//beak bottom
 
 //HEAD
 fill (105, 23, 66)//purple
 noStroke()
 ellipse(X,Y,45)//head

 //EYE
 fill (232, 126, 21)//orange
 ellipse(X,Y,eyeSize+10)//eyeball 
 fill (105, 23, 66)//purple
 ellipse (X,Y,eyeSize)//inner eye
 strokeWeight(1)
 stroke(232, 126, 21)//orange ring
 noFill()
 ellipse(X,Y,eyeSize+15)

 if (mouseX <= 100){
  fill(105, 23, 66)
  ellipse(60,80,20)
 }


 














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