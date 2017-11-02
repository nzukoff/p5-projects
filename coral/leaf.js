
function Leaf(shape) {
  // this.randY = floor(random(height))
  this.y = floor(random(height))
  // this.randX1 = random(width/4, width/2)
  // this.randX2 = random(this.randX1, this.randX1+random(20,100))
  this.x = floor(random(width))
  this.newY = floor(map(this.y, 0, height, shape.y, shape.y+shape.h))
  // this.remainingX = width - randX
  this.newX = floor(map(this.x, 0, width, shape.x, shape.x+shape.w))
  this.pos = createVector(this.newX, this.newY);
  this.reached = false;
  // console.log(this.remainingX)


  this.show = function() {
    fill(255);
    console.log("LEAF")
    
    // console.log(this.randX1)
    // console.log("Y IS ", this.y)
    // console.log("NEW Y IS ", this.newY)
    noStroke();
    ellipse(this.pos.x, this.pos.y, 4, 4);
  }

}
