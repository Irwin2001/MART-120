
  var x = 100; 
  var y = 200;
  var movement = 1; 
  var ymovement = 1;
  
  var lineX = 70;
  var lineY = 300;

  var size = 22;
  var downsize = 2;
  var count = 0;
  

  function setup() {
    createCanvas(300, 500);
    background(0, 0, 255);

    movement = floor(random() * 5)
    ymovement = floor(random() * 5)


  }
    
  function draw() {
    background(0, 0, 255); 
  
   
    fill(210, 180, 140);
    square(x, 300, 125);
    x += movement;
  
    if (x >= 200 || x <= 0) {
      movement *= -1;
    }
 
    fill(210, 180, 140);
    circle(x + 65, 250, 250); 
   x += movement;
  
    if (x >= 200 || x <= 0) {
      movement *= -1;
    }
   

    fill(300);
    ellipse(70, y, 100, 50);
    ellipse(140, y, 100, 50);
    y += ymovement;
  
    if (y >= 300|| y <= 50 ) {
      ymovement *= -1;
    }

    fill(0);
    triangle(100, 170, 100, 100, 300, 170);
    triangle(170, 170, 300, 200, 170, 100);
    triangle(50, 170, 100, 120, 300, 135);
    
    line(lineX, lineY, lineX - 30 , lineY);
    lineX += movement;
    lineY += ymovement;

    if(lineX <=0 || lineX >= width - 30) {
        movement *= -1;
    }

    if(lineY <=0 || lineY >= height) {
        ymovement *= -1;
    }
    
    point(70, 200);
    point(140, 200);
  
  
    fill(200);
    textSize(20);
    text('Me hearing something at 2am', 20, 50);
  
    fill(200);
    textSize(size);
    size+= downsize;
    count++;
    if(count > 5)
    {
        downsize *=-1;
        count = 0;
    }
    text('Irwin Teurn', 100, 450);
  }