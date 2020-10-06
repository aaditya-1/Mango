class Mango {
    constructor(x, y) {

        var opt = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, 20, opt);
        this.image = loadImage("mango.png");
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;

        image(this.image, pos.x, pos.y, 80, 80);
    }
}