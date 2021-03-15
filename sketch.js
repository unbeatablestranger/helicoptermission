const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopter, packageSprite,packageIMG;
var lstick, lstickSpr, rstick, rstickSpr, bstick, bstickSpr; 
var package,ground,packageFake;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
    

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);
	
    package = Bodies.circle(width/2, 200, 25,{restitution: 1.2, isStatic: false});
    World.add(world, package);

	

    packageSprite=createSprite(30, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.8,

	bstick = Bodies.rectangle(400,620,220,15);
	World.add(world, bstick);

	bstickSpr = createSprite(400,640,220,15);
	bstickSpr.shapeColor = "red";

	rstick = Bodies.rectangle(520,600,15,100);
	World.add(world, rstick);
	 
	rstickSpr = createSprite(520,600,15,100);
	rstickSpr.shapeColor = "red";

	lstick = Bodies.rectangle(280,600,15,100);
	World.add(world,lstick);

	lstick = createSprite(280,600,15,100);
	lstick.shapeColor = "red";

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic: true});
 	World.add(world, ground);

	Engine.run(engine);

	
  
}


function draw() {
  background(0);

  Engine.update(engine);
  
  packageSprite.x = package.position.x;
  packageSprite.y = package.position.y; 

  rectMode(CENTER);
  
  if(keyWentDown("right_arrow"))
  {
	helicopter.velocityX=5;  
  }else if(keyWentUp("right_arrow"))
   {
	 helicopter.velocityX=0;  
   }

  if(keyWentDown("left_arrow"))
  {
	helicopter.velocityX=-5;  
  }else if(keyWentUp("left_arrow"))
   {
	 helicopter.velocityX=0;  
   }

   
		package.position.x = helicopter.x;
		package.position.y = helicopter.y;    

   if(helicopter.x>800)
   {
	   helicopter.x=790;
   }

   if(helicopter.x<0)
   {
	   helicopter.x=10;
   }



  drawSprites();
  
  keyPressed(); 
 
}

function keyPressed()
{
	if(keyCode === DOWN_ARROW)
	{
		package.position.y = 350;
        Matter.Body.setStatic(package, false);
	}
}

   

    
	
	



