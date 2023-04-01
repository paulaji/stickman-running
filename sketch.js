let xPos = 0;
let yPos = 350;
let xSpeed = 5;

function setup() {
  createCanvas(1000, 450);
}

function draw() {
  background(220);

  // Draw the running figure
  fill(255, 0, 0);
  stroke(255, 0, 0);
  strokeWeight(2);
  ellipse(xPos + 25, yPos - 30, 30, 30); // face at the top
  push(); // save the current transformation matrix
  translate(xPos + 25, yPos); // move the origin to the center of the body
  rotate(PI); // rotate the body by 180 degrees
  line(0, 20, 0, -30);
  line(0, -30, -25, -55);
  line(0, -30, 25, -5);
  line(0, -5, -25, 5);
  line(0, -5, 25, 15);
  pop(); // restore the original transformation matrix

  // Update the position of the figure
  xPos += xSpeed;

  // If the figure reaches the edge of the canvas, wrap around to the other side
  if (xPos > width) {
    xPos = -25;
  }
}