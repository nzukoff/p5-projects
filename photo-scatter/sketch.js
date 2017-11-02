let img
let pixelValues = []
let a = 0

function preload() {
  img = loadImage("assets/h.jpg");
}

// function getRandomSubarray(arr, size) {
// 	console.log(1)
//     var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
//     while (i-=4 > min) {
// 		console.log(2)
//         index = Math.floor((i + 1) * Math.random());
//         temp = shuffled[index];
//         shuffled[index] = shuffled[i];
//         shuffled[i] = temp;
//     }
//     return shuffled.slice(min);
// }



function setup() {
	
let canvas = createCanvas(400, 400, WEBGL);
canvas.position(100,0)

//   image(img, 0, 0);
  
//   var d = pixelDensity();
//   var halfImage = 4 * (img.width * d) *
//       (img.height/2 * d);
  img.loadPixels();
//   let sample = getRandomSubarray(img.pixels, 5000);
  console.log(img.pixels.length)
  for (i = 0; i<img.pixels.length; i+=65536) {
	  pixelValues.push({
		  r: img.pixels[i],
		  g: img.pixels[i+1],
		  b: img.pixels[i+2]
	  })
  }
  
}

function draw() {
	background(255)
	// rotateY(a)
	let fov = PI/3.0; 
	let cameraZ = (height/2) / tan(fov/2); 
	perspective(fov, width/height, cameraZ/2, cameraZ*2);


	for (i = 0; i < pixelValues.length; i++ ) {
		let posx = map(pixelValues[i].r, 0, 255, 0, width/2)
		let posy = map(pixelValues[i].g, 0, 255, 0, height/2)
		let posz = map(pixelValues[i].b, 0, 255, 0, 100)
		var dirY = (mouseY / height - 0.5) *2;
		var dirX = (mouseX / width - 0.5) *2;
		directionalLight(250, 250, 250, dirX, -dirY, 0.25);
		ambientMaterial(250);		
		fill(pixelValues[i].r, pixelValues[i].g, pixelValues[i].b)
		noStroke()
		push()
		translate(posx, posy, posz)
		ellipse(0,0,20,20)
		pop()
		
	}
	// a+=0.001
	translate(-width/2,-height/2,0);
	cylinder(2, width);
	rotateX(90)
	cylinder(2, width);
	rotateZ(90)
	cylinder(2, width);
	
	

}