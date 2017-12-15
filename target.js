class Target {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, 100, 100);
    }
}