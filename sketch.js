
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
stoneobj=new Stone(235,420,30)

	engine = Engine.create();
	world = engine.world;

  
	//Create the Bodies Here.
	Engine.run(engine);
  

  }


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();
 stoneobj.display()
}



