
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango_, stone_;

var ground;
var boy;
var stone;
var rope;
var tree;

var mango, mango2, mango3, mango4, mango5, mango6;

// function preload()
// {

// }

function setup() {
	createCanvas(1800, 1700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(900, 1690, 1800, 50);
	boy = new Boy(200, 1560, 200, 400);
	stone = new Stone(200, 1500, 70);

	rope = new Rope(stone.body, { x: 140, y: 1470 });

	tree = new Tree(1400, 1300, 500, 750);

	mango = new Mango(1500, 1200);
	mango2 = new Mango(1250, 1200);
	mango3 = new Mango(1300, 1200);
	mango4 = new Mango(1350, 1000);
	mango5 = new Mango(1400, 1215);
	mango6 = new Mango(1430, 1150);



	Engine.run(engine);

}


function draw() {

	Engine.update(engine);

	rectMode(CENTER);
	background(205, 255, 50);



	noStroke();
	boy.display();

	fill("green");

	ground.display();
	stone.display();
	rope.display();
	tree.display();
	mango.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();

	detectCollision(mango, stone);
	detectCollision(mango2, stone);
	detectCollision(mango3, stone);
	detectCollision(mango4, stone);
	detectCollision(mango5, stone);
	detectCollision(mango6, stone);



}
function detectCollision(mango_, stone_) {
	mango_position = mango_.body.position;
	stone_position = stone_.body.position;

	if (mango_.width / 2 + stone_.width / 2 <= mango_.x - stone_.x) {

		Matter.Body.setStatic(mango_.body, false);

	}

}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	rope.fly();
}

