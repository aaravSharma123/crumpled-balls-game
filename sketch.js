var ball,dustbin,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	ball = createSprite(100,650,20,20);
	ball.shapeColor=color("pink")

	dustbin = createSprite(590,650,200,20);
	dustbin.shapeColor = color("white")
	
	dustbin1 = createSprite(700,610,20,100);
	dustbin1.shapeColor = color("white")

	dustbin2 = createSprite(490,610,20,100);
	dustbin2.shapeColor = color("white")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
		
	}
}

