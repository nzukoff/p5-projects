class Star {
    constructor() {
        this.x = random(-width/2,width/2)
        this.y = random(-height/2,height/2)
        this.z = random(width)
        this.pz = this.z
    }

    update() {
        this.z -= 20
        if (this.z < 1) {
            this.x = random(-width/2,width/2)
            this.y = random(-height/2,height/2)
            this.z = random(width)
            this.pz = this.z
        }
    }

    show() {
        fill("#FFF")
        noStroke()
        let sx = map(this.x/this.z, 0, 1, 0, width)
        let sy = map(this.y/this.z, 0, 1, 0, height)
        let r = map(this.z, 0, width, 16, 0)
        // ellipse(sx,sy,r)
        let px = map(this.x/this.pz, 0, 1, 0, width)
        let py = map(this.y/this.pz, 0, 1, 0, height)
        this.pz = this.z
        stroke(255)
        line(px, py, sx, sy)
    }
}