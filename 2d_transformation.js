let trans;
let rot;
let scale;
let sh_x;
let a,b,c,d;
let trans_mat;
let rot_mat;
let rot_scale;
let shear_mat;

// let shear; 

function setup(){
    createCanvas(screen.width,screen.height);
    trans = prompt('Enter the translation factor',0);
    rot = prompt('Enter the rotation factor',0);
    if (rot==90){
        rot = 0;
    }else{
        rot = rot*Math.PI/180;
    }
    
    scale = prompt('Enter the uniform scaling factor ',1);
    sh_x = prompt('Enter the x shear value',0);
}

function draw(){
    //static points are provided
    translate(600,100);
    textFont(50);
    line(0,0,0,500);
    line(-250,250,250,250);

    a = [[10],[10],[1]];
    b = [[50],[10],[1]];
    c = [[50],[50],[1]];
    d = [[10],[50],[1]];
    fill(0, 102, 153, 51);

    beginShape();
        vertex(a[0],a[1]);
        vertex(b[0],b[1]);
        vertex(c[0],c[1]);
        vertex(d[0],d[1]);
    endShape(CLOSE);
    

    trans_mat = [
        [1,0,trans],
        [0,1,trans],
        [0,0,1]
    ];

    rot_mat = [
        [Math.cos(rot),-1*Math.sin(rot),0],
        [Math.sin(rot),Math.cos(rot),0],
        [0,0,1]
    ];
    // console.log(rot_mat);
    scale_mat = [
        [scale,0,0],
        [0,scale,0],
        [0,0,1]
    ];

    shear_mat = [
        [1,sh_x,0],
        [0,1,0],
        [0,0,1]
    ];

    y_axis = [
        [-1,0,0],
        [0,1,0],
        [0,0,1],
    ];

    res1 = mat_multi(rot_mat,trans_mat);
    res2 = mat_multi(scale_mat,res1);
    res3 = mat_multi(y_axis,res2);
    console.log('Value of res3 ='+res3);
    res4 = mat_multi(shear_mat,res3);
    // console.log('Value of res4= '+res4);
    a1 = mat_multi(res4,a);
    b1 = mat_multi(res4,b);
    c1 = mat_multi(res4,c);
    d1 = mat_multi(res4,d);
    // console.log(a1);
    
    // translate(300,150);
    
    fill(255, 204, 0);
    beginShape();
        vertex(a1[0],a1[1]);
        // console.log('I am here');
        vertex(b1[0],b1[1]);
        vertex(c1[0],c1[1]);
        vertex(d1[0],d1[1])
    endShape(CLOSE);
    
    text('Shape of object after Translation',300,35);
    fill(0, 102, 153, 51);
    text('Shape of object before Translation',300,15);
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