class building{
  constructor(buildings,x,y,i)
  { 
    this.x=x;
    this.y=y;
    this.index=i;
  } 
  
  show(){
    image(buildings[this.index],this.x,this.y);
  }

  animate(difficulty)
  {
    this.x-=5+floor(difficulty);
    if(this.x<-600)
    {
      blds.shift();
    }
  }
  
  
}
