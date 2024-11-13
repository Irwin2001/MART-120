var x = 10;
var y = 10;
var mousex = -50;
var mousey = -10;
var diameter = 50;
var triangleX = 120;
var triangleY = 120;
var SX = 300;
var SY = 300;
var SD = 100;

function setup() {
  createCanvas(800, 600);
  
}



function draw() {
  background (200);

  fill(0,0,200);
  triangle(triangleX, triangleY, triangleX + 100, triangleY, triangleX + 100, triangleY -100);

  triangleX+=2;
  triangleY+=2;
  if(triangleX >= 800)
  {
    triangleX = 10;
  }
  if(triangleY >=600)
  {
    triangleY = 10
  }
  
  fill(200,0,200)
  square(SX,SY,SD);

  SX-=2;
  SY+=2;
  if(SX <= 200)
  {
   SX+=10;
  } 
    else if(SX == 200 || SX <=300)
  {
    SX+=2;
    console.log("second else if for SX");
  }
  else if(SX != 300)
  {
  SX = 50;
  }
    
  if(SY <= 200)
  {
  SY+=3;
  }
      
  else if(SY == 600 || SY <= 300)
  {
  SY+=1; 
  console.log("second else if for SY");}

  if(SY>=600)
  { 
    SY=0;
  }

  
  
  
  
  
 fill(255)
  circle(x, y, 25);
  if (x >= 800) 
    {
      x = 50;
    }
  if (x <= 0)
    {
        x = 750;
      }

  if (y>= 600)
    {
        y = 50;
    }
  if (y<= 0)
  {
    y = 550;
  }
 
  if (keyIsDown(68)) {
    x += 5;
  }
  
  if (keyIsDown(65)) { 
    x -= 5;
  }
  
  if (keyIsDown(83)) { 
    y += 5;
  }
 
  if (keyIsDown(87)) { 
    y -= 5;}
  




  ellipse(mousex, mousey, diameter, diameter);
  fill(0)
  circle(700,500,50);

  textSize(20)
  text("EXIT", 677,470)

  if (x > 677 && x < 727 && y > 470 && y < 520)
  {
    textSize(30);
    text("YOU WIN!!!", 300,300)
  }

}
function mouseClicked() {
  mousex = mouseX;
  mousey = mouseY;
}

