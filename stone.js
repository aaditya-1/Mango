class Stone {
    constructor(x, y, r) {

        this.r = r;


        this.body = Bodies.circle(x, y, r / 2);

        this.image = loadImage("stone.png");
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);

    }

}