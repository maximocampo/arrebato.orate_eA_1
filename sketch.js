let e1;
let e2;
let img;
let img2;
let pup;
let cavasS;

function preload() {
  img = loadImage('kimwitheyes.png');
  img2 = loadImage('fulleyes.png');
  pup = loadImage('pupblur.png');
}

function setup() {
  cavasS = windowWidth < 1300 ? windowWidth * 0.9 : 400;
  createCanvas(cavasS,cavasS);
  
  noStroke();
  e1 = new Eye(cavasS * 0.67,cavasS * 0.2125, cavasS * 0.175, pup);
  e2 = new Eye(cavasS * 0.375,cavasS * 0.225,cavasS * 0.175, pup);
  
  image(img, 0, 0, cavasS,cavasS);
}

function windowResized() {
  cavasS = windowWidth < 1300 ? windowWidth * 0.9 : 400;
  
  resizeCanvas(cavasS, cavasS);
}

function draw() {
  background(img);
  
  e1.update(mouseX, mouseY);
  e1.display();
  
  e2.update(mouseX, mouseY);
  e2.display();
  
  image(img2, 0, 0, cavasS,cavasS);
}

function Eye(tx, ty, ts, pupil) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;
  this.pupil = pupil;

  this.update = function(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function() {
    push();
    translate(this.x, this.y);
    rotate(this.angle - 20);
    image(this.pupil, this.size/4 - this.size / 2 , -this.size * 0.0426, this.size / 2, this.size /2);
    pop();
  };
}
