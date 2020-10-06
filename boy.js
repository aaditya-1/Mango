class Boy {
    constructor(x, y, width, height) {
        var opt = {
            isStatic: true
        }
        this.height = height;
        this.width = width;

        this.body = Bodies.rectangle(x, y, width, height, opt);

        this.image = loadImage("boy.png");
        World.add(world, this.body);

    };
    display() {
        var pos = this.body.position;

        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height);

    };
}