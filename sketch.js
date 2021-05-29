var garden,rabbit,apple,leaf,orangeleaf,redleaf;
var gardenImg,rabbitImg,appleImg,leafImg,orangeleafImg, redleafImg;

function preload(){
  
  //adding images for the variables
  gardenImg = loadImage("garden.png");
  
  rabbitImg = loadImage("rabbit.png");
  
  appleImg= loadImage("apple.png");
  
  leafImg= loadImage("leaf.png");
  
  orangeleafImg= loadImage("orangeLeaf.png");
  
  redleafImg= loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
//creating variable: garden and rabbit  
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  //give the property of the garden to move 
  garden.velocityX=-2
  //adds infinite ground
  if(garden.x<200){
     garden.x= garden.width/2
     }
  
  //makes the rabbit move along the x position of mouse
  rabbit.x= World.mouseX
  
//to create the following variables under function draw() to reapeat the functions.
  
if(frameCount%100===0){
apple= createSprite(0,0,20,20)
apple.scale=0.1
apple.addImage("p",appleImg)
apple.velocityY=4
apple.x= Math.round(random(300,10))

}
  
if(frameCount%110===0){
leaf= createSprite(0,0,20,20)
leaf.scale=0.1
leaf.addImage("o",leafImg)
leaf.velocityY=4
leaf.x= Math.round(random(100,30))

}
  
if(frameCount%120===0){
orangeleaf= createSprite(0,0,20,20)
orangeleaf.scale=0.1
orangeleaf.addImage("p",orangeleafImg)
orangeleaf.velocityY=4
orangeleaf.x= Math.round(random(200,80))

}
  
if(frameCount%150===0){
redleaf= createSprite(0,0,20,20)
redleaf.scale=0.1
redleaf.addImage("p",redleafImg)
redleaf.velocityY=4
redleaf.x= Math.round(random(330,200))

}
  
  edges= createEdgeSprites();
  
  //rabbit will collide with edges
  rabbit.collide(edges);
  //to draw the sprites
  drawSprites();
}
