let catrun=[];
let catjump=[];
let buildings=[];
let blds=[];
let catfall=[];
let jump=0;
let jump_phase=0;
let fall_phase=0;
let visible=0;
let hght=0;
let animate=1;
let score=0;
let difficulty=0;
//let distance=[250,260,270,280,290,300,310,320,330];


function preload()
{ 
  bg=loadImage('blues2.jpg');
  bg1=loadImage('Skyline.png');
  catrun[0]=loadImage('R1.png');
  catrun[1]=loadImage('R2.png');
  catrun[2]=loadImage('R3.png');
  catrun[3]=loadImage('R4.png');
  catrun[4]=loadImage('R5.png');
  catrun[5]=loadImage('R6.png');
  catrun[6]=loadImage('R7.png');
  catrun[7]=loadImage('R8.png');
  catrun[8]=loadImage('R9.png');
  
  
  //buildings[0]=loadImage('B1.png');
  buildings[0]=loadImage('B2.png');
  buildings[1]=loadImage('B3.png');
  buildings[2]=loadImage('B9.png');
  buildings[3]=loadImage('B5.png');
  buildings[4]=loadImage('B6.png');
  buildings[5]=loadImage('B7.png');
  buildings[6]=loadImage('B8.png');
  //buildings[7]=loadImage('B9.png');
  //buildings[8]=loadImage('B10.png');
  
  //catjump[0]=loadImage('1_1.png');
  //catjump[1]=loadImage('1_2.png');
  catjump[0]=loadImage('1_3.png');
  catjump[1]=loadImage('1_4.png');
  catjump[2]=loadImage('1_5.png');
  catjump[3]=loadImage('1_6.png');
  catjump[4]=loadImage('1_7.png');
  catjump[5]=loadImage('1_8.png');
  catjump[6]=loadImage('1_9.png');
  catjump[7]=loadImage('1_10.png');
  catjump[8]=loadImage('1_11.png');
  catjump[9]=loadImage('1_12.png');
  catjump[10]=loadImage('1_13.png');
  catjump[11]=loadImage('1_14.png');
  catjump[12]=loadImage('1_15.png');
  catjump[13]=loadImage('1_16.png');
  catjump[14]=loadImage('1_17.png');
  
  
  catfall[0]=loadImage('F1.png');
  catfall[1]=loadImage('F2.png');
  catfall[2]=loadImage('F3.png');
  catfall[3]=loadImage('F4.png');
  catfall[4]=loadImage('F5.png');
  catfall[5]=loadImage('F6.png');
  catfall[6]=loadImage('F7.png');
  catfall[7]=loadImage('F8.png');
  catfall[8]=loadImage('F9.png');
  catfall[9]=loadImage('F10.png');
  catfall[10]=loadImage('F11.png');
  catfall[11]=loadImage('F12.png');
  catfall[12]=loadImage('F13.png');
  catfall[13]=loadImage('F14.png');
  catfall[14]=loadImage('F15.png');
}


function setup()
{
  frameRate(28);
  createCanvas(1200, 800);
}


function keyPressed()
{
  if(key == ' ')
  {
    jump++;
    if(jump==2)
    {
      jump=0;
    }
  }
  if(keyCode === 13)
  {
     location.reload();
  }
}

function draw()
{
  background(bg);
  
  textSize(32);
  textAlign(RIGHT);
  text("Score:",1100,49);
  text(floor(score),1190,50);
  score+=0.1;
  difficulty+=0.001;
  
  create_building();
  
  
  if(collide()&&jump==0)
  {
    for(let j=0;j<catrun.length;j++)
    {
      image(catrun[frameCount%catrun.length],250,510);
    }
  }
  else if((collide()&&jump==1)||(!collide()&&jump==1))
  {
    image(catjump[floor(jump_phase/2)],250,470);
    jump_phase++;
    if(jump_phase==29)
    {
      jump_phase=0;
      jump=0;
    }
  }
  else if(!collide()&&jump==0)
  {
    animate=0;
    image(catfall[floor(fall_phase)],300,510+hght);
    hght+=14;
    fall_phase++;
    if(fall_phase==15)
    {
      endgame();
    }
  }
  for(let p of blds)
  {
    p.show();
    if(animate==1)
    {
      p.animate(difficulty);
    }
  }
  
}

function create_building()
{
  if(blds.length==0)
  {
    blds[0]=new building(buildings,300,570,floor(random(0,7)));
  }
  else if(blds.length<8)
  {
    let building_num=blds.length;
    let next_x=blds[building_num-1].x+floor(random(270,300));
    blds[building_num]=new building(buildings,next_x,570,floor(random(0,7)));
  }
}

function collide()
{
  for(let q of blds)
  {
    if(q.x<=300&&q.x+180>=300)
    {
      return true;
    }
  }
}

function endgame()
{
  noLoop();
  let txt1="You almost killed the cat!";
  let txt2="Press Enter to restart";
  textSize(64);
  textAlign(CENTER);
  text(txt1,600,400);
  text(txt2,600,500);
}