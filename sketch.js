var background;
var mario,mario_running, mario_wins;
var goomba, goomba_running, goombaImg;
var pipe,pipeImg;
var flower;
var coin, coinImg;
var mushroom;
var cloud,cloudImg;
var ground,groundImg;
var goombagroup;
var pipegroup;
var coingroup;
var cloudgroup;
var brick1, brick2, brick3, brick4, brick5, brick6;
var longbrickImg, questionmarkbrickImg ,shortbrickImg;

function preload(){

  //backgroud = loadImage("mario bg.png");
  groundImg = loadImage("mario ground.png");
  mario_running = loadAnimation("mario1.png","mario1_running.png");
  cloudImg = loadImage("cloud.png");
  pipeImg = loadImage("pipe.png");
  goombaImg = loadAnimation("goomba running.png", "goomba.png");
  coinImg = loadImage("mario coin.png");
  longbrickImg = loadImage("longbrick.png");
  shortbrickImg = loadImage("shortbrick.png");
  questionmarkbrickImg = loadImage("question brick.png");
}

function setup() {
createCanvas(1800,1000);
mario = createSprite(300,800,2,2);
mario.addAnimation("mario", mario_running);

ground = createSprite(900,960,1800,100);
ground.addImage(groundImg);
ground.scale = 1.5;
ground.velocityX = -7;

coingroup = new Group();
pipegroup = new Group();
goombagroup = new Group();
cloudgroup = new Group();
}

function draw() {
  background("skyblue"); 
  
  if(ground.x<0){

ground.x = ground.width/2

  } 
  drawSprites();
  spawnClouds();
  spawnPipe();
  spawnGoomba();
  spawnCoins();
  spawnbrick1();
  spawnbrick2();
}

function spawnClouds(){

if(frameCount%120 === 0){

cloud = createSprite(1800,400,40,30);
cloud.addImage(cloudImg);
cloud.velocityX = -3;
cloud.y = Math.round(random(150,400));
cloud.scale = 3;
cloudgroup.add(cloud);
cloud.lifetime = 800;

}

}

function spawnPipe(){

if(frameCount%1300 === 0){
pipe = createSprite(1800,775,10,10);
pipe.addImage(pipeImg);
pipe.velocityX = -3;
//pipe.x = Math.round(random(1800,500));
pipe.scale = 0.5
pipegroup.add(pipe);
pipe.lifetime = 800;
}

}


function spawnGoomba(){

  if(frameCount%500 === 0){
  
  goomba = createSprite(1800,850,40,30);
  goomba.addAnimation("goomba", goombaImg);
  goomba.velocityX = -3;
  //goomba.x = Math.round(random(1800,500));
  goomba.scale = 2;
  goombagroup.add(goomba);
  goomba.lifetime = 800;
}
}


function spawnCoins(){

  if(frameCount%900 === 0){
  for(var i = 0; i <5 ; i ++){
  coin = createSprite(1800 + i * 85,400,40,30);
  coin.addImage(coinImg);
  coin.velocityX = -3;
  //coin.y = Math.round(random(150,400));
  coin.scale = 0.2;
  coingroup.add(coin);
  coin.lifetime = 800;
  }
}}

function spawnbrick1(){

  if(frameCount%1300 === 0){
  brick1 = createSprite(1800,400,20,30);
  brick1.addImage(longbrickImg);
  brick1.velocityX = -3;
  //brick1.x = Math.round(random(150,400));
  brick1.scale = 1.5;
  brick1.lifetime = 800;
}
  if(frameCount%1300 === 0){
  brick2 = createSprite(1950,400,20,30);
  brick2.addImage(questionmarkbrickImg);
  brick2.velocityX = -3;
  //brick2.x = Math.round(random(150,400));
  brick2.scale = 1.5;
  brick2.lifetime = 800;
  }}
 
  function spawnbrick2(){

  if(frameCount%300 === 0){
  brick3 = createSprite(1850,400,20,30);
  brick3.addImage(shortbrickImg);
  brick3.velocityX = -3;
  //brick1.x = Math.round(random(150,400));
  brick3.scale = 1.5;
  brick3.lifetime = 800;
  }
  if(frameCount%300 === 0){
    brick4= createSprite(1900,400,20,30);
    brick4.addImage(questionmarkbrickImg);
    brick4.velocityX = -3;
    //brick1.x = Math.round(random(150,400));
    brick4.scale = 1.5;
    brick4.lifetime = 800;
  }
    if(frameCount%300 === 0){
    brick5 = createSprite(1980,400,20,30);
    brick5.addImage(shortbrickImg);
    brick5.velocityX = -3;
    //brick1.x = Math.round(random(150,400));
    brick5.scale = 1.5;
    brick5.lifetime = 800;
    }}
