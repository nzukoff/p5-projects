let stars = []
let x = 0, y = 0
let scaleAmount = 1
let controller = new Leap.Controller({enableGestures: true})

controller.connect();

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	colorMode(HSB)
	// let x = (windowWidth - width) / 2;
	// let y = (windowHeight - height) / 2
	// canvas.position(x, y);
	for (i = 0; i < 1000; i++) {
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
	let frame = controller.frame();
	frame.hands.forEach((hand)=>{
		let posX = hand.palmPosition[0]
		let posY = hand.palmPosition[1]
		let posZ = hand.palmPosition[2]
		let leapX = floor(map(posX, -400, 400, -width/2, width/2))
		let leapY = floor(map(posY, 0, 500, height/2, -height/2))
		let leapZ = map(posZ, -100, 200, 3, 0.2)
		translate(width/2+leapX, height/2+leapY)
		scale(leapZ)
	})
	let moveX = map(mouseX, 0, width, -width/2, width/2)
	let moveY = map(mouseY, 0, height, -height/2, height/2)
	translate(width/2+moveX, height/2+moveY)
	scale(scaleAmount)
	for (i = 0; i < stars.length; i++) {
		stars[i].update()
		stars[i].show()
	}
	
}