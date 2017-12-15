class Adn {
    
    constructor() {
        this.listeDirection = [];
        for(let i = 0; i < 200; i++) {
            this.listeDirection[i] = (p5.Vector.random2D());
            this.listeDirection[i].setMag(0.2);
        }

    }
}