function Shape() {
    this.randX = floor(random(0,width/4))
    
    this.y = floor(random(height/2, height-height/8))
    this.w = floor(random(50,100))
    this.h = floor(random(50,100))
    this.x = this.randX+this.w
    this.show = function() {
        console.log("SHAPE")
        fill(255, 255, 255, 80);
  
        noStroke();
    
        rect(this.x, this.y, this.w, this.h);
    
    }
  
  }