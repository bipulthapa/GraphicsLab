let rx,ry;
// let p_R1;
document.write('Ellipse Drawing using mid point algorithm');

function setup(){
    createCanvas(screen.width,screen.height);
    r_x = prompt('Enter the major-axis value',150);
    r_y = prompt('Enter the minor-axis value',100);
}

function draw(){

    translate(300,300);
    x_coord = 0;
    y_coord = r_y;
    let p_R1,p_R2;
    p_R1 = r_y*r_y-r_x*r_x*r_y+0.25*r_x*r_x;

    // for region -1
    while(!(2*r_y*r_y*x_coord >= 2*r_x*r_x*y_coord)){
        if (p_R1<0){
            ellipse(x_coord,y_coord,1);
            x_coord++;
            p_R1 += 2*r_y*r_y*x_coord+r_y*r_y;
        }else{
            ellipse(x_coord,y_coord,1);
            x_coord++;
            y_coord--;
            p_R1 += 2*r_y*r_y*x_coord-2*r_x*r_x*y_coord+r_y*r_y;
        }
        console.log(x_coord+ " " +y_coord);
        console.log(p_R1);

        // console.log(x_coord+ " "+y_coord);
        corres_points(x_coord,y_coord);
    }

    // For region-2
    if ((2*r_y*r_y*x_coord >= 2*r_x*r_x*y_coord)){
    
        p_R2 = Math.pow(r_y,2)*Math.pow(x_coord+0.5,2)+Math.pow(r_x,2)*Math.pow(y_coord-1,2)-r_x*r_x*r_y*r_y;
        while((x_coord!=8 && y_coord!=0)){
            if(p_R2<0){
                ellipse(x_coord,y_coord,1);
                x_coord++;
                y_coord--;
                p_R2 += 2*r_y*r_y*x_coord-2*r_x*r_x*y_coord+r_x*r_x;
            }else{
                ellipse(x_coord,y_coord,1);
                y_coord--;
                p_R2 += r_x*r_x-2*r_x*r_x*y_coord;
            }
            corres_points(x_coord,y_coord);
        }
    }
    

}

function corres_points(x,y){
    ellipse(x,-y,1);
    ellipse(-x,y,1);
    ellipse(-x,-y,1);
}
