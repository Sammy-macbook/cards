var card1, card2 




function setup() {
  createCanvas(1600,800);
  card1 = createSprite(400, 200, 60, 50);
  card2 = createSprite(800, 200, 60, 50);
card1.shapeColor = "red";
card2.shapeColor = "red";
card1.debug = true;
card2.debug = true;

}

function draw() {

  background(0);  
  card2.x = mouseX;
  card2.y = mouseY;
  
  if(card2.x - card1.x < (card2.width + card1.width)/2 && card1.x - card2.x < (card2.width + card1.width)/2
  && card2.y - card1.y < (card2.height + card1.height)/2 && card1.y - card2.y < (card2.height + card1.height)/2 )
  {
    card1.shapeColor = "blue";
    card2.shapeColor = "blue";

  }
  else{
    card1.shapeColor = "red";
    card2.shapeColor = "red";
  }
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}