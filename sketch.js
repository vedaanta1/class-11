var trex ,trex_running;
var edges;
var ground, ground_image;
var ground_invis;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground_image = loadImage("ground2.png");
``
}

//var marks = [4, 5, 6, 7, 8];
//var sum = 0;
//for(i = 0; i<marks.length; i++){
  //console.log(marks[i]);
  //sum = sum + marks[i];
//}
//console.log(sum/ marks.length);

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50, 160, 20, 30);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  ground = createSprite(300, 180, 600, 20);
  ground.addImage(ground_image);
  
  edges = createEdgeSprites();

  // create invisible ground
  ground_invis = createSprite(300, 190, 600, 10);
  ground_invis.visible = false;
}

function draw(){
  background("white")
  
// reset ground
  ground.velocityX = -2;
  if(ground.x <= 100){
    ground.x = ground.width/2;
  }

// jump with space
  if(keyDown("space") && trex.y > 130){
    trex.velocityY = -10;

    
  }
// add gravity to trex     
  trex.velocityY = trex.velocityY + 0.5;

  trex.collide(ground_invis);



  drawSprites();
}
