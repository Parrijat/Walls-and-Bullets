var wall;
var bullet;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  thickness = random(22, 83);
  wall = createSprite(1300, 200, thickness, height/2);
  bullet = createSprite(100, 200, 50, 5);
  bullet.shapeColor = "white";

  speed = random(223, 321);
  weight = random(30, 52);
 
}

function draw() {
  background("black");
  bullet.velocityX = speed;
  drawSprites();

  if (wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / (thickness * thickness * thickness) ;

    if (deformation > 10){
      wall.shapeColor = color("red");
      bullet.shapeColor = color("red");
    }
    if (deformation < 10){
      wall.shapeColor = color("green");
      bullet.shapeColor = color("green");
    }
  }
}