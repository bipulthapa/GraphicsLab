let theta = 0;

function setup(){
    createCanvas(screen.width,screen.height);
    translate(500,200);

    //triangle(0,0,-70,300,70,300);
    center_x = 0;
    center_y = 0;
    tri1a_x = -20;
    tri1a_y = -170;
    tri1b_x = 20;
    tri1b_y = -170;

    tri2a_x = -140;
    tri2a_y = 150;
    tri2b_x = -100;
    tri2b_y = 150;
    
    tri3a_x = 140;
    tri3a_y = 150;
    tri3b_x = 100;
    tri3b_y = 150;
     

    tri1a = [[tri1a_x],[tri1a_y],[1]];
    tri1b = [[tri1b_x],[tri1b_y],[1]];
    
    tri2a = [[tri2a_x],[tri2a_y],[1]];
    tri2b = [[tri2b_x],[tri2b_y],[1]];
    
    tri3a = [[tri3a_x],[tri3a_y],[1]];
    tri3b = [[tri3b_x],[tri3b_y],[1]];
    
}

function draw(){
    translate(500,200);
    background(255);
    background(202,204,209);
    // rotation of the point is done here...
    rot_mat = [
        [Math.cos(theta),-Math.sin(theta),0],
        [Math.sin(theta),Math.cos(theta),0],
        [0,0,1]
    ];
    
    tri1a = mat_multi(rot_mat,tri1a)
    tri1b = mat_multi(rot_mat,tri1b);
    
    tri2a = mat_multi(rot_mat,tri2a);
    tri2b = mat_multi(rot_mat,tri2b);
    
    tri3a = mat_multi(rot_mat,tri3a);
    tri3b = mat_multi(rot_mat,tri3b);

    fill(128,128,128);
    triangle(0,0,-70,300,70,300);
    line(-250,300,250,300);
    fill(0, 102, 153, 51); 
    triangle(center_x,center_y,tri1a[0],tri1a[1],tri1b[0],tri1b[1]); 
    triangle(center_x,center_y,tri2a[0],tri2a[1],tri2b[0],tri2b[1]); 
    triangle(center_x,center_y,tri3a[0],tri3a[1],tri3b[0],tri3b[1]);
    
    
    theta++;
    if (theta == 361){
        theta = 0;
    }
    theta = theta*(Math.PI)/180;
    console.log(theta);
}

function mat_multi(a,b){
    let a_rows = a.length;
    let a_cols = a[0].length;
    let b_rows = b.length;
    let b_cols = b[0].length;
    let res = new Array(a_rows);
    if (a_cols == b_rows){
        for (var i=0; i<a_rows;++i){
            res[i] = new Array(b_cols);
            for (var j =0 ; j<b_cols;++j ){
                res[i][j] = 0;
                for (var k = 0; k<a_cols;++k){
                    res[i][j] += a[i][k]*b[k][j];
                }
            }
        }
    return res;
    }else{
        console.log('Error cannot perform the multiplication opertation');
    }
}
