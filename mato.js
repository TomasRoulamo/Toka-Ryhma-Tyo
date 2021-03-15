var gridSize = (tileSize = 20); // 20 x 20 = 400
var nextX = (nextY = 0);


/* omena alustetaan ja
käärmeen alkupituus on 3 blokkia ja käärme kasvaa kun se syö omenia*/

// Mato
var defaultTailSize = 3;
var tailSize = defaultTailSize;
var snakeTrail = [];
var snakeX = (snakeY = 10);

// Ruoka eli omena
var appleX = (appleY = 15);

/* functio joka pelin aloittamiseen */
      function aloitaPeli(x) {
          // peliKäynnissä arvo todeksi
          peliKäynnissä = true;
          document.getElementById("pelinstatus").innerHTML = "<small>Peli alkoi!</small>";
          document.getElementById("pisteet").innerHTML = "";
          return setInterval(draw, 1000 / x);
      }

      function Lopetus(x) {
         // peliKäynnissä = falseksi
         clearInterval(pelinkontrolli);
         peliKäynnissä = false;
         document.getElementById("pelinstatus").innerHTML = "<small>Peli loppui!</small>";
         document.getElementById("pisteet").innerHTML = "<h1>Pisteet: " + x + "</h1>";
     }

    function draw() {
        // Liikuta matoa
       snakeX += nextX;
       snakeY += nextY;

        // Mato yli pelitason
       if (snakeX < 0) {
         snakeX = gridSize - 1;
       }
       if (snakeX > gridSize - 1) {
         snakeX = 0;
       }

       if (snakeY < 0) {
         snakeY = gridSize - 1;
       }
       if (snakeY > gridSize - 1) {
         snakeY = 0;
       }

       // Mato syö omenan =
       if (snakeX == appleX && snakeY == appleY) {
         tailSize++;

         appleX = Math.floor(Math.random() * gridSize);
         appleY = Math.floor(Math.random() * gridSize);
       }

       // Voin tehä javascriptin t: olli
