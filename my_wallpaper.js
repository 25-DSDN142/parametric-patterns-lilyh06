//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
//mine
let eyeX = 100
let innereyeX = 100
let irisX = 100

let eyeY = 100
let innereyeY = 100
let irisY = 100

let blinkEye = 60   //smallest is 40, largest 100 (60 best)
//test

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(22, 102, 168); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
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
    noStroke();
  fill(166, 215, 255);
  ellipse(eyeX,eyeY,100,blinkEye);//eyeball

  fill(76, 143, 199);
  ellipse(innereyeX,innereyeY,40,40);//inner blue
  fill (0);
  ellipse(irisX,irisY,20,20);//iris?

}