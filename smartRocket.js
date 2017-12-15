let rocket, cible, population;

function setup() {
    createCanvas(1000, 1000);
    cible = new Target(width / 2, height / 4);
    population = new Generation();

    for (let i = 0; i < 20; i++) {
        population.rockets.push(new Rocket());
    }
}

function draw() {
    background(50);
    cible.show();

    for (rocket of population.rockets) {
        rocket.show();
        rocket.applyForce(p5.Vector.random2D());
        rocket.move();
    }
    
}