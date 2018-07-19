function setup() {
    createCanvas(screen.width,screen.height);
  }
  
  function draw() {
    point(100,100);
    beginShape();
      vertex(10,10);
      vertex(10,500);
      vertex(10,500);
      vertex(1000,500)
      stroke(0)
    endShape();
    dda(60,200,200,300)
    // dda(100,300,150,200)
    dda(200,300,300,100)
    dda(300,100,500,180)
    dda(500,180,600,200)
    dda(600,200,700,150)
  }
  
  function dda(x0,y0,x1,y1){
    // var vertices = [];
    dx = x1-x0;
    dy = y1-y0;
    if (Math.abs(dx)> Math.abs(dy)){
      step = Math.abs(dx);
    }else{
      step = Math.abs(dy);
    }
    xInc = dx/step;
    yInc = dy/step;
  
    x = x0;
    y = y0;
    // console.log(step)
    beginShape()
      for(i=0;i<step;++i){
          vertex(x,y);
          x += xInc;
          y += yInc;
      }
      stroke(0)
    endShape();
  }
  