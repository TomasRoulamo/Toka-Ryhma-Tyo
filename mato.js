function Mato() {
  // Sijainti
  this.x = 0;
  this.y = 0;

  // Nopeus
  this.xspeed = 1;
  this.yspeed = 0;

  this.häntä = [];
  this.total = 0;


// Päivittää madon tiedot.
  this.update = function() {
    if (this.total === this.häntä.length) {
      for (var i = 0; i < this.häntä.length - 1; i++) {
        this.häntä[i] = this.häntä[i + 1];
      }
    }

    this.häntä[this.total - 1] = createVector(this.x, this.y); // viimeinen jäsen ottaa thisx ja thisy sijainnin

    this.x += this.xspeed * grid; // this.x = this.x + this.xspeed * grid
    this.y += this.yspeed * grid; // this.y = this.y + this.yspeed * grid

    this.takasin();
    this.kuoli(); //tutkii kuoleeko mato
  }

//  Madon Suunta fucntio
  this.dir = function(a, b) {
    this.xspeed = a;
    this.yspeed = b;
  }

  this.kuoli = function() {
    for (var i = 0; i < this.häntä.length; i++) { // jos hännän sijainti sama kuin pään niin mato kuolee
      var d = dist(this.x, this.y, this.häntä[i].x, this.häntä[i].y); // tutkii madon ja hännän matkaa/sijainti
      if (d < 1) { // jos matka pienenpi kuin 1 peli resotoi
        this.resetoi();
        console.log("KUOLIT"); // ilmoittaa kuoleman consoliin
      }
    }
  }

  this.resetoi = function() { // resetoi pelin
    this.total = 0; // madon hännän pituus palaa nollaan
    this.häntä = [];
    this.xspeed = 0;
    this.yspeed = 0;
    this.x = 0;
    this.y = 0;
    ruoka.uusipaikka(); // ruoka etsii uuden paikan
  }

  this.takasin = function() {
    if (this.x > width - grid) { // Jos madon x sijainti menee leveyden - gridin yli
      this.x = 0; // madon sijainti takisin nollaan
    }
    if (this.x < 0) { // jos madon sijainti pienenpi kuin nolla sitten madon sijainti asetetaan leveydeksi
      this.x = width;
    }
    if (this.y > height - grid) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
  }

// Tämä näyttää hännän palaset
  this.show = function() {
    fill('rgb(0,255,0)'); // Madon väri
    for (var i = 0; i < this.häntä.length; i++) { // looppi kiertää hännän niin monta kertaa mitä hännän pituus on
      rect(this.häntä[i].x, this.häntä[i].y, grid, grid); // ja luo uuden neliön
    }
    rect(this.x, this.y, grid, grid);
  }
}
