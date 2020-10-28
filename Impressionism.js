function setup() {
	createCanvas(400, 400);
}

function impl_circ(cx, cy, radi, in_x, in_y) {
	return ( (in_x-cx)*(in_x-cx) + (in_y-cy)*(in_y-cy) - radi*radi);
}

function draw() {
	background(255);
	noStroke();
	for(var y = 0; y < height; y += 5) {
		for(var x = 0; x < width; x += 5) {
			if(impl_circ(width/2.0, height/2.0, 100, x, y) < 0.0) {
				fill(128, 128);
			} 
			else {
				fill(12, 34, 56, 128);
			}
			ellipse(x, y, 5, 5);
		}
	}
}