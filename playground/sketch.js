let img
let angle = 1

function setup() {
   createCanvas(300, 300)
   img = loadImage('https://i.imgur.com/Q6aZlme.jpg')
   translate(width / 2, height / 2);
   
}

function mouseClicked() {
  translate(width / 2, height / 2);
  rotate(radians(angle));
  imageMode(CENTER);
  image(img, 0, 0, 150, 150);
  angle += 2
}

function draw() {
  image(img, 0, 0, 150, 150);
}