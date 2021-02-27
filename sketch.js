const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
 

var engine,world;
var ball;
var goal_Right,goal_Left;
function preload (){
  bgImg=loadImage("images/bg.jpg");
  
}
function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  
  engine=Engine.create();
  world=engine.world;
 ground=new Ground(displayWidth/2,displayHeight-150,displayWidth,20);

ball=new Ball();
goal_Right=new Goalright(displayWidth-100,displayHeight-250,200,350);

goal_Left=new Goalleft(displayWidth/2-700,displayHeight-250,200,350);
p1=new Player(displayWidth/2-70,displayHeight/2-250);



}

function draw() {
  background(bgImg);  
  Engine.update(engine);
ball.display();
ground.display();
if(keyCode===LEFT_ARROW){
  p1.body.position.x=p1.body.position.x-3;
  
}
if(keyCode===RIGHT_ARROW){
  p1.body.position.x=p1.body.position.x+3;
}
if(keyCode===UP_ARROW){
  p1.body.position.y=p1.body.position.y-3;
}
goal_Right.display();
goal_Left.display();
p1.display();
}                                 
function keyPressed(){
  if(keyCode===LEFT_ARROW){
    p1.body.position.x=p1.body.position.x-3;
    
  }
  if(keyCode===RIGHT_ARROW){
    p1.body.position.x=p1.body.position.x+3;
  }
  if(keyCode===UP_ARROW){
    p1.body.position.y=p1.body.position.y-3;
  }

}