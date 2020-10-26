const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;

var ground,world,engine;
var div = [];
var plinkos = [];
var particles = [];
//no of divisions

function setup() {
  createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,590,480,20);
 //make divisions at spaces of 50 pixels
  for(var i = 1 ; i < 480; i = i+50){
    div.push(new Ground( i, 450, 10, 250));
  
  }


  // make 4 rows of plinkos
  
  for(var i = 40 ; i <=width; i = i+40){
   plinkos.push(new Plinko(i,75))
  }
  for(var i = 15 ; i <=width-10; i = i+40){
    plinkos.push(new Plinko(i,150))
   }
   // make another 2 rows of plinkos 

 
}

function draw() {
  background(0); 
  Engine.update(engine); 
  ground.display();
    // create particles in the game
    if(frameCount%40 === 0){

      // make a random particle fall on the screen ...from a height of 10 px
 
    }
  //display all the index number of divisions
  for(var i=0;i<div.length;i++){
    div[i].display();
   
  }
  //disp
  for(var i = 0 ; i <plinkos.length; i = i+1){
    plinkos[i].display();
   }
//display all the particles in the array

}