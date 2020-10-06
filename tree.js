class Tree {
    constructor(x, y, width, height) {

        var opt = {
            isStatic: true
        }

        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, width, height, opt);
        this.image = loadImage("tree.png");

        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}