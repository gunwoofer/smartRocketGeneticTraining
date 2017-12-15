class Rocket {
    constructor() { 
        this.position = createVector(width / 2, height , 0);
        this.speed = createVector();
        this.acceleration = createVector();
    }

    show() {
        push();
        fill(255, 100);
        translate(this.position.x, this.position.y, this.position.z);
        rotate(this.speed.heading());
        rectMode(CENTER);
        rect(0, 0, 25, 5);
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