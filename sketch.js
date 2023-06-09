let xPos = 0;
let yPos = 350;
let xSpeed = 5;
let ySpeed = 0;
let isJumping = false;
const speedIncrement = 5;
const jumpHeight = 50;

let bush1 = { x: 250, y: 420, size: 35 };
let bush2 = { x: 500, y: 420, size: 30 };
let bush3 = { x: 750, y: 420, size: 40 };

function setup() {
  createCanvas(1000, 500);
}

function draw() {
  background(220);

  // Check if the figure is jumping
  if (isJumping) {
    yPos += ySpeed;
    ySpeed++;
    if (yPos >= 350) {
      ySpeed = 0;
      yPos = 350;
      isJumping = false;
    }
  }

  // Draw the bushes
  fill(0, 200, 0);
  noStroke();
  ellipse(bush1.x, bush1.y, bush1.size, bush1.size);
  ellipse(bush2.x, bush2.y, bush2.size, bush2.size);
  ellipse(bush3.x, bush3.y, bush3.size, bush3.size);

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

  // Update the position of the figure based on the xSpeed
  xPos += xSpeed;

  // If the figure reaches the edge of the canvas, wrap around to the other side
  if (xPos > width) {
    xPos = -25;
  } else if (xPos < -25) {
    xPos = width;
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    xSpeed += speedIncrement;
  } else if (keyCode === LEFT_ARROW) {
    xSpeed -= speedIncrement;
  } else if (keyCode === UP_ARROW && !isJumping) {
    isJumping = true;
    ySpeed = -10;
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    xSpeed = 0;
  } else if (keyCode === UP_ARROW && isJumping) {
    // If the character is jumping and the up arrow is released, stop the jump
    ySpeed = 0;
  }
}
