const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var form

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    form=new Form();
 //   box1 = new Box(200,300,50,50);
  //  box2 = new Box(240,100,50,100);
   // ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
 
    form.display();

}