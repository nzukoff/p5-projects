class Particle {
    constructor(x, y) {
        this.pos = createVector(x,y)
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)
        this.mass = floor(random(1,10))
        this.h = 0
    }

    update() {
        this.vel.add(this.acc)
        this.vel.limit(5)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    attracted(target) {
        let force = p5.Vector.sub(target, this.pos)
        this.applyForce(force)
    }

    // attracted(target) {
    //     let force = p5.Vector.sub(target, this.pos)
    //     let fsquared = force.magSq()
    //     let G = 6.67408
    //     let strength = G/fsquared
    //     force.setMag(strength)
    //     // force.setMag(0,5)
    //     // this.acc.add(dir)
    //     // this.acc.setMag(0.5)
    //     this.acc = force
    //     // this.applyForce(force)
    // }

    applyForce(force) {
        // let f = p5.Vector.div(force,this.mass)
        // console.log(this.mass)
        // this.acc.setMag(1)
        this.acc.add(force)
    }

    edges() {
        if (this.pos.x > width) this.pos.x = 0
        if (this.pos.x < 0) this.pos.x = width
        if (this.pos.y > height) this.pos.y = 0
        if (this.pos.y < 0) this.pos.y = height
    }

    follow(vectors) {
        let a = floor(this.pos.x/scl)
        let b = floor(this.pos.y/scl)
        let index = a + b * cols 
        let force = vectors[index] 
        this.applyForce(force)
    }

    show(videoOn) {
        let px = floor(this.pos.x / vScale)
        let py = floor(this.pos.y / vScale)
        let col = video.get(px, py) 
        if (videoOn) {
            colorMode(RGB)
            noStroke()
            fill(col[0], col[1], col[2], 100)
            ellipse(this.pos.x, this.pos.y, this.mass*2)
        } else {
            colorMode(HSB, 255)
            noStroke(1)
            fill(this.h, 255, 255, 25)
            ellipse(this.pos.x, this.pos.y, this.mass*2)
            this.h += 1;
            if (this.h > 255) {
                this.h = 0
            }
            // console.log(this.h)
        }
        
        
    }
}