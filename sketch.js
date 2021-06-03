const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dustbinObj,groundObject,paperobj
var world;


function setup() {
	createCanvas(1500, 675);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperobj=new Paper(400,400);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperobj.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.Body.Position,{x:130,y:145})


	}
}
