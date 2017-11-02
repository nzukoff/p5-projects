var tree;
var max_dist = 100;
var min_dist = 5
let trees = []
let startX = 0
let numTrees = 8


function setup() {
  let canvas = createCanvas(600, 400);
  let bandWidth = width / numTrees  
  canvas.position(100, 0)
  for (i = 0; i < numTrees; i++) {
    let remainingWidth = width - startX
    trees.push(new Tree(startX, bandWidth))
    let rand = floor(random(bandWidth*0.99,bandWidth*1.01)) 
    startX += rand
  }

}

function draw() {
  background(51);
  for (i = 0; i < trees.length; i++) {
    trees[i].show()
    trees[i].grow()
  }
}
