const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var backgroundImg , backgroundImg2 , backgroundImg3;


function preload(){
  backgroundImg = loadImage("snow1.jpg");
  backgroundImg2 = loadImage("snow2.jpg");
  backgroundImg3 = loadImage("snow3.jpg");
  
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  
  snow = new Snow(10,10,20,20)
}




function draw() {
  background(0);  
  Engine.update(engine);




  snow.display()
  drawSprites();
}