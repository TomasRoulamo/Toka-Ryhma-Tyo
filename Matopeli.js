var grid = 15; // yhden ruudun pituus = grid
var mato;
var ruoka;



function setup(){
  canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto;"; // canvas keskelle
  createCanvas(600, 600); // Pelin alusta 600 x 600 pixeliä
  frameRate(10); // framerate toimii madon nopeutena
  mato = new Mato(); // mato on uusi mato objekti
  ruoka = new Omena();
}

function draw(){
  background(50); // Taustaväri
  mato.update(); // päivittää matoa
  ruoka.update(); // päivittää ruokaa
  mato.show(); // näyttää madon
  ruoka.show(); // näyttää ruuan/omenan
}

// Vastaan ottaa näppäin painallukset
function keyPressed() {
  if (keyCode === UP_ARROW && mato.yspeed !== 1) { // jos painaa ylöspäin nuolta ja mato ei voi mennä vastakkaiseen suuntaan esim. takaperin
    mato.dir(0, -1); // Mato liikkuu ylös päin
  }
  else if (keyCode === DOWN_ARROW && mato.yspeed !== -1) {
    mato.dir(0, 1); // Alaspäin
  }
  else if (keyCode === LEFT_ARROW && mato.xspeed !== 1) {
    mato.dir(-1, 0); // Vasemmalle
  }
  else if (keyCode === RIGHT_ARROW && mato.xspeed !== -1) {
    mato.dir(1, 0); // Oikealle
  }
}
