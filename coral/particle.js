class Particle {
    constructor(x, y, m) {
        this.pos = createVector(x,y)
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)
        this.prevPos = this.pos.copy(); 
    }

    update() {
        this.vel.add(this.acc)
        // this.vel.limit(5)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    attracted(target) {
        let force = p5.Vector.sub(target, this.pos)
        this.applyForce(force)
    }

    applyForce(force) {
        // let fCopy = force.copy()
        // let f = p5.Vector.div(fCopy,2)
        // console.log(this.mass)
        // this.acc.setMag(1)
        this.acc.add(force)
    }

    edges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
          }
          if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
          }
          if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
          }
          if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
          }
    }

    follow(vectors) {
        let a = floor(this.pos.x/scl)
        let b = floor(this.pos.y/scl)
        let index = a + b * cols 
        let force = vectors[index] 
        this.applyForce(force)
    }

    updatePrev() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    show() {
        // let px = floor(this.pos.x / vScale)
        // let py = floor(this.pos.y / vScale)
        // noStroke(1)
        // fill(this.h, 255, 255, 150)
        // ellipse(this.pos.x, this.pos.y, this.mass*2) 
        
    }
}