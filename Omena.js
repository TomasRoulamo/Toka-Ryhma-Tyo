function Omena() {
  this.x = floor(Math.random() * width / grid) * grid;
  this.y = floor(Math.random() * height / grid) * grid;

  this.uusipaikka = function() { // Valitaan omenalle eri paikka joka kerta
    this.x = floor(Math.random() * width / grid) * grid; // Ruoka vaihtaa satunnaisesti paikkaa
    this.y = floor(Math.random() * height / grid) * grid;
  }

  this.update = function() { // päivittää omenan tilannetta
    this.syö();
  }

  this.syö = function() { // Jos mato on päällekäin ruuan kanssa
    var d = dist(this.x, this.y, mato.x, mato.y); // madon ja omenan välinen etäisyys
    if (d < 1) { // jos etäisyys pienenpi kuin 1
      this.uusipaikka();
      mato.total++; // jos osutaan omenaan niin madon pituus kasvaa
    }
  }

  this.show = function() { // Näyttää omenan kentällä
    fill(255, 0, 80); // Punainen
    rect(this.x, this.y, grid, grid); // Omenasta neliön muotoinen
  }
}
