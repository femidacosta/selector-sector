// // function setup() {
//   createCanvas(900, 800);
//   background(102);
// }

// function draw() {
//   // Call the variableEllipse() method and send it the
//   // parameters for the current mouse position
//   // and the previous mouse position
//   variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
// }

// // The simple method variableEllipse() was created specifically
// // for this program. It calculates the speed of the mouse
// // and draws a small ellipse if the mouse is moving slowly
// // and draws a large ellipse if the mouse is moving quickly

// function variableEllipse(x, y, px, py) {
//   let speed = abs(x - px) + abs(y - py);
//   stroke(speed);
//   ellipse(x, y, speed, speed);
// }
const barWidth = 15;
let lastBar = -1;

function setup() {
  let canvas = createCanvas(2000, 300);
  canvas.parent("landsketch");
  colorMode(HSB, height, height, 100);
  noStroke();
  background(0);
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, 70);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}
