var gridSize = (tileSize = 20); // 20 x 20 = 400
var nextX = (nextY = 0);

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
         // peliKäynnissä falseksi
         clearInterval(pelinkontrolli);
         peliKäynnissä = false;
         document.getElementById("pelinstatus").innerHTML = "<small>Peli loppui!</small>";
         document.getElementById("pisteet").innerHTML = "<h1>Pisteet: " + x + "</h1>";
     }
// Tein nämä t: olli
