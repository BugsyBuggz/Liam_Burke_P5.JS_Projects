let soundfile, fft; 

async function setup() {
 createCanvas(800, 800);
 soundfile = await loadSound('./Assets/mySong.mp3');
 textAlign(CENTER);
 textSize(30);

 fft = new p5.FFT();
 soundfile.connect(fft);
 soundfile.loop();
}

function mousePressed() {
 if(!soundfile.isPlaying()) {
   soundfile.play();
 }
 else {
   soundfile.stop();
 }
}

function draw() {
 background(0);
 
 text('Click To Jam!', width/2, height/2 - 20);
 let spectrum = fft.analyze();
 
 stroke(0);
 fill(15, 255, 80);

 for (let i = 0; i < spectrum.length; i++) {
   let x = map(i, 0, spectrum.length, 0, width);     
   let h = -height + map(spectrum[i], 0, 0.1, height, 0);
   rect(x, height, width / spectrum.length, h * 4)
 }
}