let rocket, cible, population;

// Configuration
let nombreParGeneration = 20;
let dureeDeVie = 400;



function setup() {
    createCanvas(1000, 1000);
    cible = new Target(width / 2, height / 4);
    population = new Generation();

    for (let i = 0; i < nombreParGeneration; i++) {
        population.rockets.push(new Rocket());
    }
}

function draw() {
    frameRate(50);
    background(50);
    cible.show();

    for (let i = 0; i < population.rockets.length; i++) {
        population.rockets[i].move();
        population.rockets[i].show();
        if (population.rockets[i].age == dureeDeVie) {
            population.rockets.slice(i, 1);
        }
    }
    
}