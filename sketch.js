var ball,img1,img2,paddle,edges;
function preload() {
  /* preload your images here of the ball and the paddle */
img1=loadImage("ball.png")
img2=loadImage("paddle.png")  
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball=createSprite(30,200,10,10);
  ball.addImage(img1)
  paddle=createSprite(380,200,10,10)
  paddle.addImage(img2)
  
  
  /* give the ball an initial velocity of 9 in the X direction */
 ball.velocityX=9 

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites()
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
  ball.bounceOff(paddle,randomVelocity)
  if(keyDown("up")){
  paddle.y=paddle.y-20 
  }
  if(keyDown("down")){
  paddle.y=paddle.y+20  
  }
  paddle.collide(edges)
  if(ball.x>400){
  ball.x=30
  ball.y=200
  ball.velocityY=0  
  }
  drawSprites();
  
}

function randomVelocity(){
ball.velocityY=random(-8,8)
}

