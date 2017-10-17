let stars = []
let x = 0, y = 0, scaleAmount = 1

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	// let x = (windowWidth - width) / 2;
	// let y = (windowHeight - height) / 2
	// canvas.position(x, y);
	for (i = 0; i < 200; i++) {
		stars.push(new Star())
	}
}

function keyPressed() {
	// let inc = 2
	// if (keyCode === LEFT_ARROW) {
	// 	console.log("L")
	// 	x -= inc
	// } else if (keyCode === RIGHT_ARROW) {
	// 	  console.log("R")
	// 	x += inc	  
	// } else if (keyCode === UP_ARROW) {
	// 	console.log("R")
	//   	y += inc	  
  	// } else if (keyCode === DOWN_ARROW) {
	// 	console.log("R")
	//   	y -= inc	  
  	// }

	if (keyCode === UP_ARROW) {
		scaleAmount += 0.05
	} else if (keyCode === DOWN_ARROW) {
		scaleAmount -= 0.05
	}
  }

function draw() {
	background(0)
	let moveX = map(mouseX, 0, width, -width/2, width/2)
	let moveY = map(mouseY, 0, height, -height/2, height/2)
	// translate(width/2+x, height/2+y)
	translate(width/2+moveX, height/2+moveY)
	
	// var scaleAmount = mouseX / 200;
	scale(scaleAmount);
	for (i = 0; i < stars.length; i++) {
		stars[i].update()
		stars[i].show()
	}
	
}