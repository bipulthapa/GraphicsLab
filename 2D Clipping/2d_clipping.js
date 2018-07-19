const inside = 0;
const left = 1;
const right = 2;
const bottom = 4;
const TOP = 8;
const x_max = 100;
const y_max = 80;
const x_min = 40;
const y_min = 40;
// let slope;
// let p1,q1,p2,q2; // end points of a line

function setup(){
    createCanvas(screen.width,screen.height);
}

function draw(){
    // translate(300,150);
    // draw_clipping_frame();
    // cs_algorithm(p1,q1,p2,q2);
    // console.log(p1,q1,p2,q2)
    // console.log("Values of p1 q1 p2 q2 are before"+p1,q1,p2,q2);
    // cs_algorithm(p1,q1,p2,q2)
    // console.log("Values of p1 q1 p2 q2 are after"+p1,q1,p2,q2);
    // translate(0,10);
    draw_clipping_frame();
    cs_algorithm(50,50,70,70);
    translate(0,100)
    draw_clipping_frame();
    cs_algorithm(70,90,110,40);
    translate(0,100);
    cs_algorithm(10,50,40,10);
    draw_clipping_frame();
}

function computeRegion(x,y){ // for finding the region
    var code = inside;
    if( x<x_min ){
        code |= left;
    }else if (x>x_max){
        code |= right;
    }
    if (y<y_min){
        code |= bottom;
    }else if(y>y_max){
        code |= TOP;
    }
    console.log(code);
    return code;
}

function cs_algorithm(x1,y1,x2,y2){
    var code1 = computeRegion(x1,y1);
    var code2 = computeRegion(x2,y2);
    var accept = false;
    // console.log("slope is "+slope);

    while(true){
        if ((code1 == 0) && (code2 == 0)){
            accept = true;
            break;
        }else if((code1 & code2)){
            break;
        }else{
            var code_out;
            var x,y;
            if (code1 != 0){
                code_out = code1;
            }else{
                code_out = code2;
            }

            if (code_out & TOP){
                x = x1 + (x2 - x1) * (y_max - y1) / (y2 - y1);
                y = y_max;
            }else if(code_out & bottom){
                x = x1 + (x2 - x1) * (y_min - y1) / (y2 - y1);
                y= y_min;
            }else if (code_out & right){
                y = y1 + (y2 - y1) * (x_max - x1) / (x2 - x1);
                x = x_max;
            }else if (code_out & left){
                y = y1 + (y2 - y1) * (x_min - x1) / (x2 - x1);
                x = x_min;
            }

            // replacing the intersection point here
            if (code_out == code1){
                x1 = x;
                y1 = y;
                code1 = computeRegion(x1,y1);
            }else{
                x2 = x;
                y2 = y;
                code2 = computeRegion(x2,y2);
            }
        }
    }

    if (accept){
        line(x1,y1,x2,y2); //line selected and drawn to the clipping frame
        text('Line has been drawn',0,20);
        console.log(x1,y1,x2,y2);
    }else{
        text('Line rejected',0,20);
        console.log("final calc rej point "+ x1,y1,x2,y2);
        // console.log('I was here');
    }
}

function draw_clipping_frame(){
    beginShape();
        vertex(x_min,y_max);
        vertex(x_max,y_max);
        vertex(x_max,y_min);
        vertex(x_min,y_min);
    endShape(CLOSE);
}
