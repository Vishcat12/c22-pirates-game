class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_img=loadImage('assets/canon.png') 
    this.cannon_base=loadImage('assets/cannonBase.png')
  }
  display(){
    //code to create a cannon top
    push()
    imageMode(CENTER)
    image(this.cannon_img,this.x,this.y,this.width,this.height)
    pop ()
    //code to create a cannon base
    image(this.cannon_base,70,20,200,200)
    noFill()
  }
  
}
