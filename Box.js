class Box {
  constructor(x,y,width,height) {
    var options = {
      restitution : 0.5,
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("rect.jpg");
    this.Visiblity = 225;
       
    World.add(world, this.body);
  }
    
  display(){
    var pos =this.body.position;
    if(this.body.speed<8){
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity-5;
      pop();
      tint(225, this.Visiblity);
    }
  }

  score(){
    if(this.Visiblity < 0 && this.Visiblity > - 105){
      score++
    }
  }
} 