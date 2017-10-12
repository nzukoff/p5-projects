var mic;
var w;

function setup() {
  createCanvas(1024,512)
  colorMode(HSB)
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.9, 1024);
  fft.setInput(mic);
  
}

function draw() {
    background(0);
    var spectrum = fft.analyze()
    var octaves = fft.getOctaveBands()
    var logSpec = fft.logAverages(octaves);
    stroke(255)
    for (var i =0; i < spectrum.length; i++) {
        var amp = spectrum[i];
        var y = map(amp, 0, 256, height, 0);
        fill(i, 255, 255)
        w = width / (spectrum.length/16);
        rect(i*w, y, w, height - y)


    }
}