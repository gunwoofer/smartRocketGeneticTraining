
function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(50);
    cible = new Target(width / 2, height / 4);
    cible.show();
}