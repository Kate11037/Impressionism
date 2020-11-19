function setup () {
	createCanvas(400, 400);
}

function impl_line(x0, y0, x1, y1, x, y) {
	return (y0 - y1) * x + (x1 - x0) * y + x0 * y1 - x1 * y0;
}

function impl_circ(cx, cy, radi, in_x, in_y) {
	return ( (in_x-cx)*(in_x-cx) + (in_y-cy)*(in_y-cy) - radi*radi);
}

function draw() {
	background(255);
	noStroke();
	for(var y = 0; y < height; y += 5) {
		for (var x = 0; x < width; x += 5) {
			if(impl_line(0, height/4, width/2, height, x, y) < 0
				&& impl_line(0, height, width/2, 0, x, y) < 0
				|| impl_line(width/2, 0, width, height, x, y) < 0
				&& impl_line(width/2, height, width, height/4, x, y) < 0) {
				fill(31, 230, 255);
			}
			else {
				fill(239, 192, 43);
			}

			if(impl_circ(width/2, height/2, 40, x, y) < 0) {
				fill(255, 0, 0);
			}
			
			
			ellipse(x, y, 5, 5);
		}
	}
	noLoop();
}
	
