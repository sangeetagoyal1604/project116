
leftEyex=0;
leftEyey=0;

function preload() {
   jo=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTen13_0CkH243MXnpSyuask5F-g1bYYsg-Zw&usqp=CAU'); 
}
function setup() {
canvas=createCanvas(400,400);
 webcam=createCapture(VIDEO); 
   webcam.size(300,300);
webcam.hide();
posenet=ml5.poseNet(webcam,modeloaded);
posenet.on('pose',gotresult);
function gotresult(result) {
    if (result.length>0) {
     console.log(result);
leftEyex=result[0].pose.leftEye.x+30
        console.log("x="+result[0].pose.leftEye.x);
        leftEyey=result[0].pose.leftEye.y+30  
        console.log("y="+result[0].pose.leftEye.y); 
    }
}
function modeloaded() {
    console.log("photoloaded");
}
}
function draw() {
 image(webcam,0,0,400,400); 
 fill(65, 105, 225);
 stroke(65, 105, 225);
 circle(leftEyex,leftEyey,40);
 image(jo,leftEyex-15,leftEyey-15,30,30);
}
function result() {
    save('filter.png');
}
