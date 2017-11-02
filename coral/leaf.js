
function Leaf(shape) {
  this.y = floor(random(height))
  this.x = floor(random(width))
  this.newY = floor(map(this.y, 0, height, shape.y, shape.y+shape.h))
  this.newX = floor(map(this.x, 0, width, shape.x, shape.x+shape.w))
  this.pos = createVector(this.newX, this.newY);
  this.reached = false;


  this.show = function() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 4, 4);
  }

}
