//your parameter variables go here!

let beakX1 = 125; //125// add additions in function//half beak thickness
let beakY1 = 90; //90// add additions in function (size)

let beakX2 = 125; //125//
let beakY2 = 70; //70//

let beakLengthX = 50; //50//
let beakLengthY = 100;//100 & -40 from first line//TILT OF BEAK

//head
let X = 125 //125//
let Y = 75 //175//

let eyeSize = 15 //15//25//30//

let beakColourChange = 0;//chnage number for diff colour
let headColourChange = 0;
let lineColourChange = 0;

//change beak angles, maybe neck lengths, colours and eye sizing, maybe head size and position?

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

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
 let myBlue = color(0, 0, 255);
 let myOrange = color(232, 126, 21);

 if(eyeSize>15){fill(255,0,0);}

 //neck
 noStroke()
 fill(105, 23, 66);//purple 
 rect(120,70,80,15);// top bird's neck, right side
 
 noStroke()
 fill(105, 23, 66);//purple
 rect(0,70,45,15);// top bird's neck, left side

 noStroke()
 fill(105, 23, 66);//purple
 rect(0,120,80,15);// lower bird's neck

 //fill(105, 23, 66);//purple
 //rect(182,120,20,80);// lower bird's neck extention long

 noStroke()
 fill(105, 23, 66);//purple
 triangle (44.8,70,44.8,85,80,80);//top bird's neck END
 //rect(82,0,20,40);
 //triangle(82,39.8,102,39.8,92,55);//lower bird's neck long END

 rect(150,120,80,15)//lower bird neck extension
 triangle(150,120,120,130,150,135)

 //BEAK
 noStroke()
 fill(105, 23, 66)//purple
  if(beakColourChange == 0){
    fill(myPurple);
  }
  else if(beakColourChange==1){
    fill(myRed)
  }
  else{
   fill(myOrange)
  }
//top bird's beak
 triangle (beakX1,beakY1,beakX2,beakY2,beakLengthX,beakLengthY-40)//beak top
 triangle (beakX1,beakY1,beakX2,beakY2,beakLengthX,beakLengthY)//beak bottom
 
 noStroke()
 fill(105, 23, 66)//purple

 if(beakColourChange == 0){
    fill(myPurple);
  }
  else if(beakColourChange==1){
    fill(myRed)
  }
  else{
   fill(myOrange)
  }
 //lower birds beak
 //might need to make this independent from other  bird!!!!!!
 triangle (beakX1-50,beakY1+50,beakX2-50,beakY2+50,beakLengthX+100,beakLengthY+10)//beak top
 triangle (beakX1-50,beakY1+50,beakX2-50,beakY2+50,beakLengthX+100,beakLengthY+50)//beak bottom
 
 //HEAD
 fill (105, 23, 66)//purple
 noStroke()
 ellipse(X,Y,45)//top head

 fill (105, 23, 66)//purple
 noStroke()
 ellipse(X-50,Y+50,45)// lower head ///                changed

 //EYE
 if(eyeSize>15){fill(255,0,0);} //changes orange//can add more and comment out fill to change others
 else{fill(232, 126, 21)}

 //fill (232, 126, 21)//orange
 ellipse(X,Y,eyeSize+10)//eyeball 
 fill (105, 23, 66)//purple
 ellipse (X,Y,eyeSize)//inner eye
 strokeWeight(1)
 stroke(232, 126, 21)//orange ring
 noFill()
 ellipse(X,Y,eyeSize+15)

 if(eyeSize>15){fill(255,0,0);} //changes orange//can add more and comment out fill to change others
 else{fill(232, 126, 21)}

 //fill (232, 126, 21)//orange
 ellipse(X-50,Y+50,eyeSize+10)//eyeball //      changed
 fill (105, 23, 66)//purple
 ellipse (X-50,Y+50,eyeSize)//inner eye//       changed
 strokeWeight(1)
 stroke(232, 126, 21)//orange ring
 noFill()
 ellipse(X-50,Y+50,eyeSize+16)//                changed
 


 //lines
 stroke(232, 126, 21)//orange
 line (170,90,190,70)////rightline
 line (160,90,180,70)//middleline
 line (150,90,170,70)//leftline
 
 if(lineColourChange == 0){
    stroke(myPurple);
  }
  else if(beakColourChange==1){
    stroke(myOrange)
  }
  else{
   stroke(myBlue)//make good looking fun colour!!!!!!!!!!!!!!!
  }
 line(190,70,200,60)//rightline by neck
 line(180,70,200,50)//middleline by neck
 line(170,70,200,40)//leftline by neck

 line(0,40,40,0)//leftline top corner
 line(0,50,50,0)//middleline top corner
 line(0,60,60,0)//rightline bottom corner

 line(160,200,180,180)//rightline bottom corner
 line(150,200,180,170)//middleline bottom corner
 line(140,200,170,170)//leftline bottom corner


 

///cloud?
 if(lineColourChange == 0){
    fill(myPurple);
  }
  else if(beakColourChange==1){
    fill(myOrange)
  }
  else{
   fill(myBlue)//make good looking fun colour!!!!!!!!!!!!!!!
  }
arc(165, 185, 60, 20, 180, 0)//cloud base
ellipse(175,175,15)//right top of bottomcloud
ellipse(160,172,17)//middle top of bottomcloud
ellipse(150,175,10)

arc(165, 25, 60, 20, 180, 0)//cloud base
ellipse(175,175,15)//right top of bottomcloud
ellipse(160,172,17)//middle top of bottomcloud
ellipse(150,175,10)



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