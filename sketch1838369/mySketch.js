const barWidth = 15;
let lastBar = -1;

function setup() {
  createCanvas(2000, 2000);
  colorMode(HSB, height, height, 100);
  noStroke();
  background(0);
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, 80);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}
