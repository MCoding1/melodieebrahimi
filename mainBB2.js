let t = 0; // time variable

function setup() {
  let canvas1 = createCanvas(1440, 303);
canvas1.parent('sketch-container1');
  noStroke();
}

function draw() {
  background(10, 10); // translucent background (creates trails)
  // make a x and y grid of ellipses
  fill(255, random(170,180), 241);
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 8); // draw particle
    }
  }

  t = t + 0.01; // update time
}
