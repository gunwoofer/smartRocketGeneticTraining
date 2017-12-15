let rocket, cible;

function setup() {
    createCanvas(1000, 1000);
    cible = new Target(width / 2, height / 4);
    rocket = new Rocket();
}

function draw() {
    background(50);
    cible.show();

    
    rocket.show();
    rocket.applyForce(createVector(0, -0.5, 0));
    rocket.move();
    
}