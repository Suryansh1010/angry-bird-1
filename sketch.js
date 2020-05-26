const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var box2;
var pig;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,600,70,70);
    box2 = new Box(530,340,70,70);
    ground = new Ground(600,height,1200,20);

   pig=new Pig(810,350);
 
   box3 = new Box(623,545,70,70);
   box4 = new Box(350,460,70,70);
   box7=new Box(390,395,50,50);
   box6=new Box(270,400,60,60)
   box8=new Box(394,356,60,60)
   pig2=new Pig(810,220);  
   box9=new Box(490,545,65,65);
   box10=new Box(4430,300,65,65);
   box5 = new Box(810,160,70,70);
   bird=new Bird(100,100);

   slingshot = new SlingShot(bird.body,{x:200, y:190});


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    ground.display();
    pig.display();
    box3.display();
    box4.display();
    pig2.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    bird.display();
    box9.display();
    box10.display();
    slingshot.display();

    keyPressed();
    mouseReleased();
    mouseDragged()
    
function mouseDragged(){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        bird.trajectory=[]
        Matter.Body.setPosition(bird.body, {x: 200 , y: 50});
       slingshot.attach(bird.body);
    }
}
}