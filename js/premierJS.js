var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
draw();
cercles();

function draw() {
  var longueurCanvas = canvas.width;
  var hauteurCanvas = canvas.height;

  for (var i = 200; i < longueurCanvas; i += 125) {
    context.beginPath();
    context.arc(i, 75, 50, 0, 2 * Math.PI);
    context.stroke();
  }
  for (var i = 200; i < hauteurCanvas; i += 125) {
    context.beginPath();
    context.arc(75, i, 50, 0, 2 * Math.PI);
    context.stroke();
  }
}

function cercles() {}
