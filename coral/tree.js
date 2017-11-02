// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/kKT0v3qhIQY
// let randomX = random(0, width/4)
// let randomX = 0
function Tree() {
  this.leaves = [];
  this.branches = [];
  this.shapes = []
  this.leavesX = []
  
  // this.randomX = random(0, width/4)
  for (var i =0; i < 3; i++ ) {
    let shape = new Shape()
    this.shapes.push(shape)
    
  }
  // console.log("RANDX BEEFORE ", randomX)
  for (var i = 0; i < 200; i++) {
    for (var j = 0; j<this.shapes.length; j++) {
      let leaf = new Leaf(this.shapes[j])
      this.leaves.push(leaf);
      this.leavesX.push(leaf.pos.x)
    }
    
    
    
    
  }
  let xMax = max(this.leavesX)
  let xMin = min(this.leavesX)
  // randomX = floor(random(xMax-10, xMax+10))
  // console.log("RANDX AFTER ", randomX)
  let randomStart = floor(random(xMin, xMax))
  var pos = createVector(randomStart, height);
  var dir = createVector(0, -1);
  var root = new Branch(null, pos, dir);
  this.branches.push(root);
  var current = root;
  var found = false;
  
  console.log("X MIN IS ", min(this.leavesX))
  console.log("X MAX IS ", max(this.leavesX))
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





  this.show = function() {
    console.log("TREE")
    // for (var i = 0; i < this.leaves.length; i++) {
    //   this.leaves[i].show();
    // }

    // for (var i = 0; i < this.branches.length; i++) {
    //   this.branches[i].show();
    // }

    for (var i = 0; i < this.shapes.length; i++) {
      console.log(this.shapes[i].x)
      console.log(this.shapes[i].y)
      this.shapes[i].show();
    }

  }

}
