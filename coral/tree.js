
function Tree(startX, bandWidth) {
  this.leaves = [];
  this.branches = [];
  this.shapes = []
  this.leavesX = []
  
  for (var i =0; i < 2; i++ ) {
    let shape = new Shape(startX, bandWidth)
    this.shapes.push(shape)
  }

  for (var i = 0; i < 200; i++) {
    for (var j = 0; j<this.shapes.length; j++) {
      let leaf = new Leaf(this.shapes[j])
      this.leaves.push(leaf);
      this.leavesX.push(leaf.pos.x)
    }
    
  }
  let xMax = max(this.leavesX)
  let xMin = min(this.leavesX)
  let randomStart = floor(random(xMin, xMax))
  var pos = createVector(randomStart, height);
  var dir = createVector(0, -1);
  var root = new Branch(null, pos, dir);
  this.branches.push(root);
  var current = root;
  var found = false;
  while (!found) {
    for (var i = 0; i < this.leaves.length; i++) {
      var d = p5.Vector.dist(current.pos, this.leaves[i].pos);
      if (d < max_dist) {
        found = true;
      }
    }
    if (!found) {
      var branch = current.next();
      current = branch;
      this.branches.push(current);
    }
  }

  this.grow = function() {
    for (var i = 0; i < this.leaves.length; i++) {
      var leaf = this.leaves[i];
      var closestBranch = null;
      var record = max_dist;
      for (var j = 0; j < this.branches.length; j++) {
        var branch = this.branches[j];
        var d = p5.Vector.dist(leaf.pos, branch.pos);
        if (d < min_dist) {
          leaf.reached = true;
          closestBranch = null;
          break;
        } else if (d < record) {
          closestBranch = branch;
          record = d;
        }
      }

      if (closestBranch != null) {
        var newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
        newDir.normalize();
        closestBranch.dir.add(newDir);
        closestBranch.count++;
      }
    }

    for (var i = this.leaves.length - 1; i >= 0; i--) {
      if (this.leaves[i].reached) {
        this.leaves.splice(i, 1);
      }
    }

    for (var i = this.branches.length - 1; i >= 0; i--) {
      var branch = this.branches[i];
      if (branch.count > 0) {
        branch.dir.div(branch.count + 1);
        var randDir = p5.Vector.random2D();
        randDir.mult(0.3)
        branch.dir.add(randDir)
        
        this.branches.push(branch.next());
        branch.reset();
      }
    }
  }





  this.show = function(flowfield) {
    // for (var i = 0; i < this.leaves.length; i++) {
    //   this.leaves[i].show();
    // }

    for (var i = 0; i < this.branches.length; i++) {
      this.branches[i].show();    
    }


    for (var i = 10; i < this.branches.length; i++) {
      if (this.leaves.length == 0) {
        	this.branches[i].follow(flowfield)
          this.branches[i].update()	          
          this.branches[i].show();  
          this.branches[i].edges()        
      }
  }



    // for (var i = 0; i < this.shapes.length; i++) {
    //   this.shapes[i].show();
    // }

  }

}
