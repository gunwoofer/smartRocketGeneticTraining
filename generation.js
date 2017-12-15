class Generation {
    constructor() {
        this.rockets = [];
    }


    show() { 
        for (let i = 0; i < this.rockets.length; i++) {
            this.rockets[i].show();
        }
    }
}