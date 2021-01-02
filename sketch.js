const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,399,50,60);
    box2 = new Box(1000,399,50,60);
    ground = new Ground(600,height,1200,20);
    pig1=new Pig(900,300,50,50);
    log1=new Log(905,240,250,PI/2);
    box3=new Box(840,150,50,60);
    box4=new Box(960,150,50,60);
    pig2=new Pig(900,150,50,50);
    log2=new Log(905,140,250,PI/2);
    box5=new Box(900,120,50,60);
    log3=new Log(850,120,100,PI/6);
    log4=new Log(950,120,100,-(PI/6));
    bird=new Bird();
}

function draw(){
    background(0);
    Engine.update(engine);
    /*console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/
    box1.display();
    box2.display();
    bird.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}