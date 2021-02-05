const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var polygon,polygonImg

function preload(){
polygonImg=loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

     //Pyramid 2
     
     polygon = Bodies.circle(100,200,25)
     World.add(world,polygon)
     bl1=new Box(900,300,30,40)
     bl2=new Box(870,300,30,40)
     bl3=new Box(930,300,30,40)
     bl4=new Box(960,300,30,40)
     bl5=new Box(840,300,30,40)
     bl6=new Box(870,260,30,40)
     bl7=new Box(900,260,30,40)
     bl8=new Box(930,260,30,40)
     bl9=new Box(900,220,30,40)
    ground3=new Ground(900,320,200,10)
    ground =new Ground(400,310,400,10)
    ground2=new Ground(600,599,1200,5)
    block6=new Box(360,275,30,40)
    block5= new Box(390,275,30,40)
    block4= new Box(420,275,30,40)
    block3=new Box(450,275,30,40) 
    block2=new Box(480,275,30,40)
    block1=new Box(300,275,30,40)
    block7= new Box(330,275,30,40)
    block8= new Box(330,235,30,40)
    block9 = new Box(360,235,30,40)
    block10= new Box(390,235,30,40)
    block11= new Box(420,235,30,40)
    block12= new Box(450,235,30,40)

    block13=new Box(360,195,30,40)
    block14=new Box(390,195,30,40)
    block15=new Box(420,195,30,40)
    block16= new Box(390,155,30,40)
    
    slingShot=new SlingShot(this.polygon,{x:100,y:200})

}
function draw(){
    background("lightblue")
    Engine.update(engine)
    fill("black")
    textSize(35)
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",50,100) 
    ground3.display()
    ground2.display()
    ground.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    bl1.display()
    bl2.display()
    bl3.display()
    bl4.display()
    bl5.display()
    bl6.display()
    bl7.display()
    bl8.display()
    bl9.display()

    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)
    slingShot.display()
    drawSprites()
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly()
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
    
  }