function Shape(startX, bandWidth) {
    this.x = floor(random(startX,startX+floor(random(bandWidth*0.99,bandWidth*1.01))))
    this.y = floor(random(height/2, height-height/8))
    this.w = floor(random(50,100))
    this.h = floor(random(50,100))

    this.show = function() {
        fill(255, 255, 255, 80);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
    }
  
  }