var canvas = document.getElementById("myCanvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
var context = canvas.getContext("2d");
const NB_CERCLES = 5;
const DECALAGE_HORIZON = innerWidth * 0.35;
const DECALAGE_VERTICAL = innerHeight * 0.35;
const RAYON = 75;

cercles();
courbes();

function draw() {
  context.strokeStyle = "white";
  let yHorizon = 150;
  let xVertical = DECALAGE_HORIZON - 250;
  for (var i = 0; i < NB_CERCLES; i++) {
    // Cercles 1ère ligne
    var x = DECALAGE_HORIZON + 250 * i;
    context.beginPath();
    context.arc(x, yHorizon, RAYON, 0, 2 * Math.PI);
    context.stroke();
    // Cercle 1ère colonne
    var y = DECALAGE_VERTICAL + 250 * i - 40;
    context.beginPath();
    context.arc(xVertical, y, RAYON, 0, 2 * Math.PI);
    context.stroke();
  }
}

var angle = 0;
function cercles() {
  requestAnimationFrame(cercles);
  context.clearRect(0, 0, innerWidth, innerHeight);
  draw();
  for (var i = 0; i < NB_CERCLES; i++) {
    // Point tournant sur les cercles de la ligne
    var xCentreCercleLigne = DECALAGE_HORIZON + 250 * i;
    var xLigne = xCentreCercleLigne + RAYON * Math.cos(angle * (i + 1));
    var yLigne = RAYON * Math.sin(angle * (i + 1)) + 150;
    context.beginPath();
    context.arc(xLigne, yLigne, 5, 0, Math.PI * 2);
    context.stroke();
    // Lignes bougeant par rapport aux cercles tournant sur la ligne
    context.moveTo(xLigne, 0);
    context.lineTo(xLigne, innerHeight);
    context.stroke();

    // Point tournant sur les cercles de la colonne
    var yCentreCercleColonne = DECALAGE_VERTICAL + 250 * i - 38;
    var xColonne = DECALAGE_HORIZON - 250 + RAYON * Math.cos(angle * (i + 1));
    var yColonne = yCentreCercleColonne + RAYON * Math.sin(angle * (i + 1));
    context.beginPath();
    context.arc(xColonne, yColonne, 5, 0, Math.PI * 2);
    context.stroke();
    // Lignes bougeant par rapport aux cercles tournant sur la ligne
    context.moveTo(0, yColonne);
    context.lineTo(innerWidth, yColonne);
    context.stroke();
  }
  angle += 0.01;
  if (angle > 2 * Math.PI + 0.5) {
    angle = 0;
  }
}

function courbes() {
  requestAnimationFrame(courbes);
  if (angle > 2 * Math.PI) {
    alert("bonjour");
  }
}
