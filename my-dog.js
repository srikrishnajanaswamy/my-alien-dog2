function setup() {
    createCanvas(400, 400, WEBGL);
}


function draw() {
  background(100, 220, 100);
  // background(r g, b);
  quad(-200, 100, 200, 100, 200, -200, -200, -200);

  ellipse(100, 50, 100, 40);
  line(55, 40, 40, 20);
  line(40, 20, 25, 20);
  line(25, 20, 20, 25);
  line(20, 25, 15, 25);
  line(15, 25, 17, 30);
  line(17, 30, 19, 35);
  line(19, 35, 22, 37);
  line(22, 37, 26, 41);
  line(26, 41, 35, 43);
  line(35, 43, 49, 42);
  line(49, 42, 51, 45);
  line(125, 70, 130, 100);
  line(75, 70, 70,100);
  line(150, 50, 190, 30);
  circle(30, 25, 4);