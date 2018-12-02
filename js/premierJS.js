var canvas = document.getElementById("myCanvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
var context = canvas.getContext("2d");
let nbCol = 8;
let nbLigne = 4;


cercles();

function draw() {
  context.strokeStyle = "white";
  // Horizontaux
  var xHorizon = 400;
  let yHorizon = 150;
  for (var i = 1; i <= nbCol; i++) {
    context.beginPath();
    context.arc(xHorizon, yHorizon, 75, 0, 2 * Math.PI);
    context.stroke();
    xHorizon += 250;
  }
  // Verticaux
  let xVertical = 150;
  var yVertical = 350;
  for (var i = 1; i <= nbLigne; i++) {
    context.beginPath();
    context.arc(xVertical, yVertical, 75, 0, 2 * Math.PI);
    context.stroke();
    yVertical += 250;
  }
}

function cercles() {
  requestAnimationFrame(cercles);
  context.clearRect(0, 0, innerWidth, innerHeight);
  draw();
  var x = 400;
  var y = 350;
  for (var i = 1; i <= nbCol; i++) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, innerHeight);
    context.stroke();
    x += 250;
  }
  for (var i = 1; i <= nbLigne; i++) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(innerWidth, y);
    context.stroke();
    y += 250;
  }

}
