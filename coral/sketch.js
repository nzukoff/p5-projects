var tree;
var max_dist = 400;
var min_dist = 5
let trees = []
let startX = 0
let numTrees = 6
let cols 
let rows
let scl = 10
let inc = 0.1
let flowfield 
let zoff = 0

function setup() {
  let canvas = createCanvas(600, 400);
  let bandWidth = width / numTrees  
  cols = floor(width/scl)
  rows = floor(height/scl)
  flowfield = new Array(cols * rows)
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

	// mouseVector = createVector(mouseX, mouseY)
	// strokeWeight(2)
	// noFill()
	// mouseVector.sub(center)
	// line(0,0,mouseVector.x,mouseVector.y)
	let yoff = 0
	for (let y = 0; y < rows; y++) {
		let xoff = 0
		for (let x = 0; x < cols; x++) {
			let index = x + y * cols			
			let angle = noise(xoff, yoff, zoff) * TWO_PI * 2
			let v = p5.Vector.fromAngle(angle)
			v.setMag(0.5)
			flowfield[index] = v
			xoff += inc
			// stroke(0)
			// push()
			// translate(x*scl, y*scl)
			// rotate(v.heading())
			// line(0, 0, scl, 0)
			// pop()
		}
		yoff += inc
		zoff += 0.001
	}


	// for (let i = 0; i < particles.length; i++) {
	// 	// particles[i].attracted(mouseVector)
	// 	// particles[i].vel.limit(10)
	// 	particles[i].follow(flowfield)
	// 	particles[i].vel.limit(speedSlider.value())
	// 	particles[i].update()	
	//  	particles[i].edges()
	// 	particles[i].show(videoOn)		
	// }


  for (i = 0; i < trees.length; i++) {
    trees[i].show(flowfield)
    trees[i].grow()

  }

}
