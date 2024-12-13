var x = 250;        
var y = 250;       
var speedX = 3;    
var speedY = 2;   
var diameter =  50; 
// circle 2
var x2 = 200;        
var y2 = 200;       
var speedX2;    
var speedY2;   
var diameter2 =  100;
// cirlce 3
var x3 = 100;        
var y3 = 250;       
var speedX3 = 5;    
var speedY3 = 5;   
var diameter3 = 50;
// circle 4
var x4 = 150;        
var y4 = 250;       
var speedX4 = 1;    
var speedY4 = 1;   
var diameter4 =  75;
//circle 5
var x5 = 70;        
var y5 = 300;       
var speedX5 = 3;    
var speedY5 = 2;   
var diameter5 =  50;
var color = random (50,100)


function setup() {
    createCanvas(500, 500);
    
    // circle 2 speed
    speedX2 = random(1,5);
    speedY2 = random(1,5);
    //circle 3 size
    diameter3 = random(20,60);


    
}


function draw() {
  background(0); 
    //circle 1
    fill(0,0,255)
    circle(x, y, diameter);
    
    x += speedX;
    y += speedY;

    if (y > 500){ speedY = -speedY}
    
    if (y < 0) { speedY = -speedY}

    if (x > 500){ speedX = -speedX}
    
    if (x < 0) { speedX = -speedX}
    
    // ciricle 2
    fill(255,0,0)
    circle(x2, y2, diameter2);
   
    x2 += speedX2;
    y2 += speedY2;
    
    if (y2 > 500){ speedY2 = -speedY2}
    
    if (y2 < 0) { speedY2 = -speedY2}

    if (x2 > 500){ speedX2 = -speedX2}
    
    if (x2 < 0) { speedX2 = -speedX2}

    //circle 3
    fill(0,255,0)
    circle(x3, y3, diameter3);
    
    x3 += speedX3;
    y3 += speedY3;

    if (y3 > 500){ speedY3 = -speedY3}
    
    if (y3 < 0) { speedY3 = -speedY3}

    if (x3 > 500){ speedX3 = -speedX3}
    
    if (x3 < 0) { speedX3 = -speedX3}

   
    //circle 4
    fill(random(1,255), random(1,255), random(1,255));
    circle(x4, y4, diameter4);
        
    x4 += speedX4;
    y4 -= speedY4;
    
    if (y4 < 500){ speedY4 = -speedY4}
    
    if (y4 > 0) { speedY4 = -speedY4}

    if (x4 > 500){ speedX4 = -speedX4}
    
    if (x4 < 0) { speedX4 = -speedX4}
  
    //circle 5
    fill(255,0,255)
    circle(x5, y5, diameter5);
    
    x5 += speedX5;
    y5 += speedY5;
  
    if (y5 > 500 || y5 < 0) { speedY5 = -speedY5}

    if (x5 > 500 || x5 < 0) { speedX5 = -speedX5}



}

