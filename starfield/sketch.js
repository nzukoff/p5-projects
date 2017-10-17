let stars = []

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	// let x = (windowWidth - width) / 2;
	// let y = (windowHeight - height) / 2
	// canvas.position(x, y);
	for (i = 0; i < 20; i++) {
		stars.push(new Star())
	}
}

function draw() {
	background(0)
	translate(width/2, height/2)
	for (i = 0; i < 20; i++) {
		stars[i].update()
		stars[i].show()
	}
}