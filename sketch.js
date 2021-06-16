
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles;
var plinkos = [];
var division = [];
var particle;

var divisionHeight=300;
var score =0;
var count =0;
var gameState = "start"
var scoringSound;
var gameOver_sound;

function preload(){
  scoringSound = loadSound("jump.wav");
  gameOver_sound = loadSound("collided.wav");
}


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 fill("white");

 textSize(14);
 text("you have 5 chances to increase your score", 200, 20);
 fill("white")

 textSize(24);
 text("500", 5, 550);
 text("600", 80, 550);
 text("700", 160, 550);
 text("800", 240, 550);
 text("1000", 320, 550);
 text("800", 400, 550);
 text("500", 480, 550);
 text("700", 560, 550);
 text("600", 640, 550);
 text("500", 730, 550);
 Engine.update(engine);
 ground.display();

 if(gameState == "end"){
   gameOver_sound.play();
   textSize(90);
   text("GameOver", 150, 300);
   //return
 }
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
   }
   if(particle!=null)
   {
     particle.display();
     if(particle.body.position.y>760)
     {
       if(particle.body.position.x<300)
       {
         score = score+500;
         particle = null;
         scoringSound.play();

         if(count>=5)gameState="end";

         
       }
     }
   }
   else if(particle.body.position.x<600 && particle.body.position.x>301)
   {
     score = score+100;
     particlele = null;
     scoringSound.play();

     if(count>=5) gameState = end;
   }

   else if(particle.body.position.x<900 && particle.body.position.x>601)
   {
     score = score+200;
     particlele = null;
     scoringSound.play();

     if(count>=5) gameState = end;
   }


   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed()
{
  if(gameState!=="end")
  {
    count++;
    particle = new particle(mouseX, 10, 10 , 10 );
  }
}