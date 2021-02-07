var canvas;
var music;
var white, red, green,yellow; 
var blue;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    white = createSprite(100,575,175,50);
    white.shapeColor="white";
    

    yellow = createSprite(300,575,175,50);
    yellow.shapeColor="yellow";

    green = createSprite(500,575,175,50);
    green.shapeColor="green";

    red = createSprite(700,575,175,50);
    red.shapeColor="red";

    blue = createSprite(random(100,700),40,50,50);
    blue.shapeColor="blue";


    //create box sprite and give velocity
blue.velocityY=random(1,10);
blue.velocityX=random(1,10);



}
 
function draw() {
    background("black");
    //create edgeSprite
edges=createEdgeSprites();
blue.bounceOff(edges); 

if(blue.isTouching(white)&&blue.bounceOff(white)){
music.play();
blue.shapeColor="white";
}

if(blue.isTouching(red)&&blue.bounceOff(red)){
    blue.velocityX= 0
    blue.velocityY= 0
    blue.shapeColor="red";
}

if(blue.isTouching(yellow)&&blue.bounceOff(yellow)){
    
    blue.shapeColor="yellow";
}
if(blue.isTouching(green)&&blue.bounceOff(green)){
    
    blue.shapeColor="green";
}
    //add condition to check if box touching surface and make it box
drawSprites(); 







}
