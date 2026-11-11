let c1; 
let c2; 
let c3;

let canvas;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");
  
  // Pink
  c1 = color(255, 0, 190);

  // Orange
  c2 = color(255,150,0);

  // Yellow
  c3 = color(255,210,0);
}

function draw() {
  // Fills the background with the color yellow
  background(140, 237, 237);
  
  for (let i=0; i<=width; i++) {
    let amt = map(i, 0, width, 0, 1);
    c2 = lerpColor(c1, c3, amt);

    stroke(c2)
    line(0, i, width, i)
  }

  // Draws the sun in the center, behind the mountains
  noStroke();
  fill(255,255,190);
  circle(200,190,50);
  
   // Draws cloud shadow (upper)
  noStroke();
  fill(255, 182, 193);
  ellipse(263,85,300,20);

  // Draws cloud shadow (lower)
  noStroke();
  fill(211, 211, 211);
  ellipse(500,85,200,20);
  
  // Draws clouds (top)
  noStroke();
  fill(255, 219, 187);
  ellipse(363,75,400,20);

  // Draws clouds (middle left)
  noStroke();
  fill(255, 219, 187);
  ellipse(363,65,200,20);

  // Draws light blue mountain at the base of the sun
  fill(103, 49, 71);
  triangle(150,250,240,180,340,250);

  // Draws farthest left mountain
  fill(48, 25, 52);
  triangle(-30,250,60,170,150,250);

  // Draws mountain, second one from the right
  fill(48, 25, 52);
  triangle(220,250,300,170,380,250);

  // Draws biggest mountain, second from the left
  fill(0,30,100);
  triangle(50,250,150,156,250,250);

  // Draws farthest right mountain
  fill(0,30,100);
  triangle(280,250,380,150,480,250);

  // Draws top right part of landscape "Hill"
  noStroke();
  fill(40,100,120);
  ellipse(300,290,400,100);

  // Draws top left part of landscape "Hill"
  noStroke();
  fill(0,90,100);
  ellipse(50,330,400,200);

  // Draws bottom right part of landscape
  noStroke();
  fill(40,70,90);
  ellipse(300,450,450,300);

  // Draws bottom left part of landscape
  noStroke();
  fill(6, 46, 46);
  ellipse(0,480,450,300);

  // Draws left tree trunk
  stroke(52, 28, 2);
  strokeWeight(4);
  color(77,51,26);
  line(80,245,80,290);

  // Draws left tree (Bottom)
  noStroke();
  fill(6, 46, 46);
  triangle(62,269,80,200,100,269);

  // Draws left tree (Top)
  noStroke();
  fill(6, 50, 50);
  triangle(62,245,80,200,100,245);

  // Draws middle tree trunk
  stroke(52, 28, 2);
  strokeWeight(8);
  color(255,255,255);
  line(180,245,180,320);
  
  // Draws middle tree (Bottom)
  noStroke();
  fill(6, 46, 46);
  triangle(140,300,180,225,220,300);

  // Draws middle tree (Top)
  noStroke();
  fill(6, 50, 50);
  triangle(145,260,180,200,215,260);

  // Draws tree trunk on the right
  stroke(52, 28, 2);
  strokeWeight(12);
  color(255,255,255);
  line(310,280,310,380);

  // Draws right tree (bottom)
  noStroke();
  fill(6, 46, 46);
  triangle(275,355,310,280,350,355);

   // Draws right tree (top)
  noStroke();
  fill(6, 50, 50);
  triangle(275,315,310,240,350,315);

  fill(0);
  text(mouseX, 10, 10);
  text(mouseY, 10, 20);
}