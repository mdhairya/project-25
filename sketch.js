const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dustbinObj,groundObject,paperobj,launcherObject
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperobj=new Paper(400,400);
  launcherObject = new Launcher(paperobj.body,{x:235,y:420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperobj.display();
launcherObject.display();

}


function mouseDragged(){
  Matter.Body.setPosition(paperobj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
 launcherObject.fly();


}

 