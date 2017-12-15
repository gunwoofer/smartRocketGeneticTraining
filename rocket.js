class Rocket {
    constructor() { 
        this.age = 0;
        this.position = createVector(width / 2, height , 0);
        this.speed = createVector();
        this.acceleration = createVector();
        this.adn = new Adn();
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
        this.applyForce(this.adn.listeDirection[this.age]);
        this.speed.add(this.acceleration);
        this.position.add(this.speed);
        this.acceleration.mult(0);
        this.speed.limit(4);
        this.age++;
    }
}