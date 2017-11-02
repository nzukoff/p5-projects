function Branch(parent, pos, dir) {
  this.pos = pos;
  this.vel = createVector(0,0)
  this.acc = createVector(0,0)
  this.parent = parent;
  this.dir = dir;
  this.origDir = this.dir.copy();
  this.count = 0;
  this.len = 5;
  this.orignalPos = this.pos.copy(); 
  

  this.reset = function() {
    this.dir = this.origDir.copy();
    this.count = 0;
  }


  this.next = function() {
    var nextDir = p5.Vector.mult(this.dir, this.len);
    var nextPos = p5.Vector.add(this.pos, nextDir);
    var nextBranch = new Branch(this, nextPos, this.dir.copy());
    return nextBranch;
  }

  this.edges = function() {
    if (abs(this.orignalPos.x - this.pos.x) > .5) {
      
        this.pos.x = this.orignalPos.x;
        
      }
      if (abs(this.pos.y - this.orignalPos.y) > .5) {
        
        
        this.pos.y = this.orignalPos.y;
        
      }
     
  }



  this.applyForce = function(force) {
    // let fCopy = force.copy()
    // let f = p5.Vector.div(fCopy,2)
    // console.log(this.mass)
    // this.acc.setMag(1)
    this.acc.add(force)
}

  this.follow = function(vectors) {    
    
    let a = floor(this.pos.x/(scl))
    let b = floor(this.pos.y/(scl))    
    let index = a + b * cols 
    let force = vectors[index] 
    this.applyForce(force)
  }

  this.update = function() {
    this.vel.add(this.acc)
    this.vel.limit(0.05)
    this.pos.add(this.vel)
    this.acc.mult(0)
  }

  this.show = function() {
    if (parent != null) {
      stroke(255);
      line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);

    }

  }
}
