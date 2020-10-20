
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var sign,signIMG;


function preload(){
	signImg = loadImage("NEWTON'S CRADLE.png");
}

function setup() {
	createCanvas(600, 1000);
	rectMode(CENTER);

	sign = createSprite(300,100,20,20);
	sign.addImage(signImg);
	sign.scale = 0.7;

	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,height/4,width/3,20);

	bobDiameter=40;

	var startBobPositionX=width/2;
	var startBobPositionY=height/4+500;
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	//Create a Ground
	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  sign.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}









