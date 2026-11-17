let soundfile, fft; 
let doDa = false;

async function setup() {
 createCanvas(800, 450);
 
 soundfile = await loadSound('./Assets/mySong.mp3');
 textAlign(CENTER);
 stroke(0);
 fill(15, 255, 80);
 textSize(30);
 text('Click To Jam!', width/2, height/2 - 20);

 fft = new p5.FFT();
 soundfile.connect(fft);
 soundfile.loop();
}

function mousePressed() {
 doDa = true
 if(!soundfile.isPlaying()) {
   soundfile.play();
 }
 else {
   soundfile.stop();
 }
}

function draw() {
 if (doDa == false) {
  return;
 }

 background(0);

 let spectrum = fft.analyze();
 
 stroke(255,0,0);
  strokeWeight(5);
  strokeCap(ROUND); // Makes the dots circular instead of square

  // Set pattern: [dotLength, gapLength]
  drawingContext.setLineDash([1, 10]); 

  // Draw a horizontal line (y1 and y2 are both 100)
  line(50, 200, 800, 200);

  // Reset to solid lines for future shapes
  drawingContext.setLineDash([]); 

 stroke(0);
 fill(15, 255, 80);

 for (let i = 0; i < spectrum.length; i++) {
   let x = map(i, 0, spectrum.length, 0, width);     
   let h = -height + map(spectrum[i], 0, 0.1, height, 0);
   rect(x, height, width / spectrum.length, h * 4)
   
}
}