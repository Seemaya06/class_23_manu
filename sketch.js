const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1;
var ground;


function setup() {
  var canvas = createCanvas(400,400);
   engine = Engine.create();
   world = engine.world;


   box1 = new Box(100,100,60,60);

   
}

function draw() {
  background("black");  
  Engine.update(engine);

  box1.display();
  
  
}


