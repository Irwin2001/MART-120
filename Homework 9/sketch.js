function setup() {
    createCanvas(300, 500);
    background(0,0,255);
  }

  function draw() {
    
    fill(210,180,140)
    square(85,300,125);
    
    fill(210,180,140)
    circle(150,250,250);

    fill(300)
    ellipse(70,200,100,50);

    fill(300)
    ellipse(140,200,100,50);
    
    fill(0)
    triangle(100, 170, 100, 100, 300, 170);
    
    fill(0)
    triangle(170, 170, 300, 200, 170, 100 );
   
    fill(0)
    triangle(50, 170, 100, 120, 300, 135);

    line(70, 300, 100, 300);
   
   
    point(70,200);

    point(140,200);

    fill(200)
    textSize(20);
    text('Me hearing something at 2am', 20, 50);

   fill(200)
    text('Irwin Teurn', 100, 450);

    
}  