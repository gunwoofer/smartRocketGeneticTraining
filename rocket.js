class Rocket {
    constructor() { 
        this.position = createVector(width / 2, height , 0);
        this.speed = createVector();
        this.acceleration = createVector();
    }

    show() {
        push();
        translate(this.position.x, this.position.y, this.position.z);
        rotate(this.acceleration.heading());
        rectMode(CENTER);
        fill(255);
        rect(0, 0, 10, 50);
        pop();
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    move() {
        this.speed.add(this.acceleration);
        this.position.add(this.speed);
        this.acceleration.mult(0);
        this.speed.limit(4);
    }
}