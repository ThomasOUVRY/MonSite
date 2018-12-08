var canvas = document.getElementById("myCanvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
var context = canvas.getContext("2d");
const NB_CERCLES = 6;
const DECALAGE_HORIZON = innerWidth * 0.35;
const DECALAGE_VERTICAL = innerHeight * 0.25;
const RAYON = innerHeight / 22;
console.log(RAYON);
const ESPACEMENT = RAYON * 3;
var courbeX = [];
var courbeY = [];
context.lineWidth = 3;
context.fillStyle = "white";
cercles();
courbes();

function draw() {
  context.strokeStyle = "white";
  let yHorizon = RAYON * 2;
  let xVertical = DECALAGE_HORIZON - ESPACEMENT;
  for (var i = 0; i < NB_CERCLES; i++) {
    // Cercles 1ère ligne
    var x = DECALAGE_HORIZON + ESPACEMENT * i;
    context.beginPath();
    context.arc(x, yHorizon, RAYON, 0, 2 * Math.PI);
    context.lineWidth = 3;
    context.stroke();
    // Cercle 1ère colonne
    var y = DECALAGE_VERTICAL + ESPACEMENT * i;
    context.beginPath();
    context.arc(xVertical, y, RAYON, 0, 2 * Math.PI);
    context.lineWidth = 3;
    context.stroke();
  }
}

var angle = 0;
function cercles() {
  const RAYON_TOURNANTS = RAYON / 7;
  context.clearRect(0, 0, innerWidth, innerHeight);
  draw();
  for (var i = 0; i < NB_CERCLES; i++) {
    // Point tournant sur les cercles de la ligne
    var xCentreCercleLigne = DECALAGE_HORIZON + ESPACEMENT * i;
    var xLigne = xCentreCercleLigne + RAYON * Math.cos(angle * (i + 1));
    var yLigne = RAYON * Math.sin(angle * (i + 1)) + RAYON * 2;
    context.beginPath();
    context.arc(xLigne, yLigne, RAYON_TOURNANTS, 0, Math.PI * 2);
    context.lineWidth = 1;
    context.stroke();
    // Lignes bougeant par rapport aux cercles tournant sur la ligne
    context.moveTo(xLigne, 0);
    context.lineWidth = 1;
    context.lineTo(xLigne, innerHeight);
    context.stroke();
    for (let j = 0; j < NB_CERCLES; j++) {
      courbeX.push(xLigne);
    }

    // Point tournant sur les cercles de la colonne
    var yCentreCercleColonne = DECALAGE_VERTICAL + ESPACEMENT * i;
    var xColonne =
      DECALAGE_HORIZON - ESPACEMENT + RAYON * Math.cos(angle * (i + 1));
    var yColonne = yCentreCercleColonne + RAYON * Math.sin(angle * (i + 1));
    context.beginPath();
    context.arc(xColonne, yColonne, RAYON_TOURNANTS, 0, Math.PI * 2);
    context.stroke();
    // Lignes bougeant par rapport aux cercles tournant sur la ligne
    context.moveTo(0, yColonne);
    context.lineWidth = 1;
    context.lineTo(innerWidth, yColonne);
    context.stroke();

    for (let k = 0; k < NB_CERCLES; k++) {
      yCentreCercleColonne = DECALAGE_VERTICAL + ESPACEMENT * k;
      yColonne = yCentreCercleColonne + RAYON * Math.sin(angle * (k + 1));
      courbeY.push(yColonne);
    }
  }

  angle += 0.01;
  requestAnimationFrame(cercles);
}

function courbes() {
  if (angle > 2 * Math.PI) {
    angle = 0;
    console.log(courbeX.length);
    console.log(courbeY.length);

    courbeX = [];
    courbeY = [];
  }
  for (let i = 0; i < courbeX.length; i++) {
    context.fillRect(courbeX[i], courbeY[i], 3, 3);
  }
  requestAnimationFrame(courbes);
}
