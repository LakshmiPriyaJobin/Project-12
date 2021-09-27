var garden,rabbit;
var gardenImg,rabbitImg;
var apples,appleImg;
var orangeLeaf,orangeLeafImg;
var leaf,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage('apple.png');
  orangeLeafImg = loadImage('orangeLeaf.png');
  leafImg = loadImage('leaf.png');
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  rabbit.x = World.mouseX;
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);



  spawnApples();
  spawnOrangeLeaves();
  spawnLeaves();

  drawSprites();
}

function spawnApples()
  {
    if(frameCount % 30===0)
    {
      apples = createSprite(200,-50,50,50);
      apples.addImage('apples',appleImg);
      apples.scale = 0.05;
      apples.x = Math.round(random(100,500));
      apples.velocityY = 2;
      apples.lifetime = 800;
      rabbit.depth = apples.depth;
      
    }
  }

function spawnOrangeLeaves()
{
  if(frameCount % 30===0)
  {
    orangeLeaf = createSprite(200,-60,50,50);
    orangeLeaf.addImage('orangeLeaf',orangeLeafImg);
    orangeLeaf.scale = 0.06;
    orangeLeaf.x = Math.round(random(200,400));
    orangeLeaf.velocityY = 3;
    orangeLeaf.lifetime = 800;
    rabbit.depth = orangeLeaf.depth;
  }
}

function spawnLeaves()
{
  if(frameCount % 30===0)
  {
    leaf = createSprite(200,-20,50,50);
    leaf.addImage('leaf',leafImg);
    leaf.scale = 0.08;
    leaf.x = Math.round(random(90,600));
    leaf.velocityY = 4;
    leaf.lifetime = 800;
    rabbit.depth = leaf.depth;
  }
}
  

