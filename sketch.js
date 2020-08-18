function setup() {
	createCanvas(600, 600);
	background(255);
	
}

var x = 300;
var y = 300;
var animate = true;

function draw() {
	background(255);
	fill(255,0,0);
	ellipse(x,y, 50,50);

	if (animate == true) {
		y += 5;
	}
	else {
		y -= 5;
	}

	if (y > 550) {
		animate = false;
	}
	if (y < 50) {
		animate = true;
	}
}