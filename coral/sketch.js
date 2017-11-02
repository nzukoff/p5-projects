var tree;
var max_dist = 100;
var min_dist = 5
let trees = []
function setup() {
  let canvas = createCanvas(600, 400);
  canvas.position(100, 0)
  for (i = 0; i < 1; i++) {
    trees.push(new Tree())
  }

}

function draw() {
  background(51);
  for (i = 0; i < trees.length; i++) {
    console.log("SKETCH")
    trees[i].show()
    trees[i].grow()
  }
}
